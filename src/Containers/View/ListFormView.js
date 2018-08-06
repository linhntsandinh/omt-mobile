import React, {Component} from 'react';
import {View} from '../../Components'
import {BaseStyles} from '../../Theme'
import {Icons} from "../../Assets";
import Icon from "../../Components/Base/Icon";
import InputText from "../../Components/Base/InputText";
import {Alert, FlatList, Keyboard, TouchableOpacity} from "react-native";
import Text from "../../Components/Base/Text";
import Consts, {height, moderateScale, width} from "../../Configs/Consts";

export default class ListFormView extends Component {
    constructor(props) {
        super(props);
        this._inputSearch = null;
        this.state = {
            isSearch: false,
            isNameClass: true,
            isStatusClass: false,
            isTimeClass: false,
            isTypeClass: false,
            all: false,
            waiting: false,
            success: false,
            fail: false,
            deleteRowKey: null,
            textSearch: ''
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus();
        } else {
            Keyboard.dismiss();
        }
    }
    refreshFlatlist = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            }
        })
    }
    render() {
        const {isSearch, isNameClass, isStatusClass, isTimeClass, isTypeClass, all, success, waiting, fail} = this.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E1F2FF',
                    height: 80,

                }}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        width: width - 50,
                        borderRadius: 50,
                        borderWidth: 1.5,
                        borderColor: '#53B2FF'
                    }}>
                        <Icon
                            key={'icon'}
                            name={isSearch ? Icons.back : Icons.search}
                            onPress={() => this.setState({isSearch: !isSearch})}
                            style={{marginTop: 10, marginLeft: 5}}
                            color='#53B2FF'
                        />
                        <InputText
                            onChangeText={text => this.setState({textSearch: text})}
                            onFocus={() => this.setState({isSearch: true})}
                            hint="Search"
                            key={'haha'}
                            ref={(com) => {
                                this._inputSearch = com;
                            }}
                            iconRemove={true}
                            color='#CDE7FD'
                        />
                    </View>
                </View>

                <View
                    style={{
                        width: width,
                        height: 1,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginVertical: 5,
                        marginBottom: 20
                    }}>
                </View>
                <View style={{width: '88%', height: 30, alignSelf: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: '#56ADF3',
                        borderTopLeftRadius: 20,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isNameClass ? '#E1F2FF' : 'white'
                    }}
                                      onPress={() => this.setState({
                                          isNameClass: true,
                                          isStatusClass: false,
                                          isTimeClass: false,
                                          isTypeClass: false
                                      })}
                    >
                        <Text style={{}}>Tên</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: '#56ADF3',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isStatusClass ? '#E1F2FF' : 'white'
                    }}
                                      onPress={() => this.setState({
                                          isNameClass: false,
                                          isStatusClass: true,
                                          isTimeClass: false,
                                          isTypeClass: false,
                                          all: true,
                                          success: false,
                                          waiting: false,
                                          fail: false
                                      })}
                    >
                        <Text style={{}}>Trạng thái</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: '#56ADF3',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isTimeClass ? '#E1F2FF' : 'white'
                    }}
                                      onPress={() => this.setState({
                                          isNameClass: false,
                                          isStatusClass: false,
                                          isTimeClass: true,
                                          isTypeClass: false
                                      })}
                    >
                        <Text style={{}}>Thời gian</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: '#56ADF3',
                        borderTopRightRadius: 20,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isTypeClass ? '#E1F2FF' : 'white'
                    }}
                                      onPress={() => this.setState({
                                          isNameClass: false,
                                          isStatusClass: false,
                                          isTimeClass: false,
                                          isTypeClass: true
                                      })}
                    >
                        <Text style={{}}>Loại</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#EBF6FF',
                        width: '88%',
                        height: '76%',
                        alignSelf: 'center',

                    }}>
                    {isStatusClass ?
                        <View style={{
                            width: '100%', height: 35, alignSelf: 'center', flexDirection: 'row'
                            // , position: 'absolute', top: 150
                        }}>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                borderColor: '#56ADF3',
                                borderTopLeftRadius: 2,
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: all ? '#E1F2FF' : 'white'
                            }}
                                              onPress={() => this.setState({
                                                  all: true,
                                                  success: false,
                                                  waiting: false,
                                                  fail: false
                                              })}
                            >
                                <Text style={{}}>Tất cả</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                borderColor: '#56ADF3',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: success ? '#E1F2FF' : 'white'
                            }}
                                              onPress={() => this.setState({
                                                  all: false,
                                                  success: true,
                                                  waiting: false,
                                                  fail: false
                                              })}
                            >
                                <Text style={{}}>Đang chờ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                borderColor: '#56ADF3',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: waiting ? '#E1F2FF' : 'white'
                            }}
                                              onPress={() => this.setState({
                                                  all: false,
                                                  success: false,
                                                  waiting: true,
                                                  fail: false
                                              })}
                            >
                                <Text style={{}}>Thành công</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                borderColor: '#56ADF3',
                                borderTopRightRadius: 2,
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: fail ? '#E1F2FF' : 'white'
                            }}
                                              onPress={() => this.setState({
                                                  all: false,
                                                  success: false,
                                                  waiting: false,
                                                  fail: true
                                              })}
                            >
                                <Text style={{}}>Thất bại</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }
                    <FlatList
                        style={{paddingLeft: 20}}
                        data={Consts.form_test}
                        numColumns={2}
                        renderItem={({item, index}) =>
                            <View style={{
                                width: '42%',
                                height: height * 31 / 100,
                                margin: 10,
                            }}
                            >
                                <View style={{
                                    flex: 4,
                                    backgroundColor: '#2699FB', justifyContent: 'space-around', alignItems: 'center',
                                    flexDirection: 'row',

                                }}>
                                    <View style={{
                                        backgroundColor: '#BCE0FD',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Icon
                                            name={Icons.pencil_bold}
                                            size={20}
                                            color='#008BFF'
                                            onPress={() => this.props.navigation.navigate('FormDetailView', {
                                                isEdit: true
                                            })}
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: '#BCE0FD',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Icon
                                            name={Icons.trash}
                                            size={20}
                                            color='#008BFF'
                                            onPress={() => {
                                                Alert.alert(
                                                    'Alert',
                                                    'Are you sure want to delete that ?',
                                                    [
                                                        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                                        {text: 'Yes', onPress: () => {
                                                                Consts.form_test.splice(this.props.index, 1);
                                                                this.refreshFlatlist(index)
                                                            }}
                                                    ]
                                                )
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: 'white',
                                    flex: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <View>
                                        <Text color='#7F7F7F' bold={true} fontSize={13}>
                                            Đơn xin đi muộn
                                        </Text>
                                        <Text color='#CECECE' fontSize={10}>
                                            10p trước
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                    <View style={{
                        backgroundColor: '#06cc5b',
                        borderRadius: 50,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: moderateScale(height * 0.01),
                        right: moderateScale(width * 0.02)
                    }}>
                        <Icon
                            name={Icons.add_bold}
                            size={30}
                            color='white'
                            onPress={() => this.props.navigation.navigate('FormDetailView', {
                                isEdit: true
                            })}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: width,
                        height: 1,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginTop: 6,
                    }}>
                </View>
            </View>
        );
    }
}
