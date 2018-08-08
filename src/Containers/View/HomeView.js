import {Icon, View} from '../../Components'
import {BaseStyles} from '../../Theme'
import React, {Component} from 'react';
import {FlatList, Image, Keyboard, StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icons} from "../../Assets";
import InputText from "../../Components/Base/InputText";
import {width} from "../../Configs/Consts"
// const height = Dimensions.get('window').height;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputSearch = null;
        this.state = {
            isSearch: false,
            textSearch: '',
            isDetailShow: null
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus();
        } else {
            Keyboard.dismiss();
        }
    }

    render() {
        const {isSearch, isDetailShow} = this.state;
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#bae1ff"
                />
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
                    style={{width: width, height: 1, borderColor: '#F1F1F1', borderWidth: 1, marginVertical: 5}}>
                </View>
                <TouchableOpacity
                    style={{width: width - 20, height: 150, backgroundColor: '#E1F2FF', alignSelf: 'center'}}>
                    <View
                        style={{margin: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                                   style={{width: 100, height: 100, borderRadius: 70}}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: '#2799FB',
                                marginTop: 10,
                                fontFamily: 'Montserrat-Bold',
                                marginLeft: 15,
                                marginBottom: 10
                            }}
                            >
                                Nguyễn Xuân Trường
                            </Text>
                            <TouchableOpacity style={{
                                width: width - 185,
                                height: 55,
                                backgroundColor: '#39B774',
                                borderRadius: 70,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 15,
                                borderWidth: 2,
                                borderColor: 'white'
                            }}>
                                <Text style={styles.text}
                                >
                                    CHECK IN
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>
                <FlatList
                    data={[{key: 'a'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                    renderItem={({item, index}) =>
                        <View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <View
                                    style={{
                                        width: width,
                                        height: 1,
                                        borderColor: '#F1F1F1',
                                        borderWidth: 1,
                                        marginVertical: 5
                                    }}>
                                </View>
                                <TouchableOpacity
                                    onPress={() => this.setState({isDetailShow: index})}
                                    style={{
                                        width: width - 20,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: '#E1F2FF',
                                    }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                        <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                                               style={{width: 105, height: 105, borderRadius: 70}}/>
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        color: '#3D5494',
                                        marginTop: 10,
                                        fontFamily: 'Montserrat-Bold',
                                        marginLeft: 15
                                    }}
                                    >
                                        Thông tin chấm công
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {(isDetailShow == index) ?
                                <View style={{
                                    width: width - 20,
                                    alignSelf: 'center',
                                    marginTop: 5,
                                    paddingTop: 15,
                                    justifyContent: 'space-around',
                                    flexDirection: 'row',
                                    backgroundColor: '#F5F5F5',

                                }}>
                                    <View style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'column',
                                        marginBottom: 20
                                    }}>
                                        <Text>
                                            Bộ phận:
                                        </Text>
                                        <Text>
                                            Time checkin:
                                        </Text>
                                        <Text>
                                            Time checkout:
                                        </Text>
                                        <Text>
                                            Ngày:
                                        </Text>
                                        <Text>
                                            Status:
                                        </Text>
                                    </View>
                                    <View style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'column',
                                        marginBottom: 20
                                    }}>
                                        <Text>
                                            Intership
                                        </Text>
                                        <Text>
                                            08:50
                                        </Text>
                                        <Text>
                                            18:00
                                        </Text>
                                        <Text>
                                            02/07/2018
                                        </Text>
                                        <Text>
                                            Muộn 5 phút
                                        </Text>
                                    </View>
                                </View>
                                :
                                null
                            }
                        </View>
                    }
                />
                <View
                    style={{
                        width: width,
                        height: 1,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginTop: 5,
                        marginBottom: 10,
                    }}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
    }
});
