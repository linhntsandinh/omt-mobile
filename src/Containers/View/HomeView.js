import {Icon, View} from '../../Components'
import {BaseStyles} from '../../Theme'
import React, {Component} from 'react';
import {FlatList, Image, Keyboard, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Icons} from "../../Assets";
import InputText from "../../Components/Base/InputText";
import Consts, {width} from "../../Configs/Consts"
import moment from 'moment'
import Text from "../../Components/Base/Text";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputSearch = null;
        this.state = {
            isSearch: false,
            textSearch: '',
            isDetailShow: -1,
            isCheckout: false,
            checkoutId: null,
            startTime: null,
            endTime: null
        };
        this.handleCheckin = this.handleCheckin.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
        console.log(new Date().toLocaleTimeString())

    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus();
        } else {
            Keyboard.dismiss();
        }
    }

    handleCheckout() {
        fetch(Consts.api_url + '/timelog/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.checkoutId,
                user_id: this.props.user['user_data']['id'],
                date: moment(new Date()).format('DD-MM-YYYY'),
                start_time: this.state.startTime,
                end_time: new Date().toLocaleTimeString(),
                device_info: '{' + 'hello' + '}',
                create_by: 1,
                update_by: 1
            }),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.setState({isCheckout: !this.state.isCheckout})
                this.setState({endTime: new Date().toLocaleTimeString()})
            }).catch(error => {
            console.log(error);
        });
    }

    handleCheckin() {
        fetch(Consts.api_url + '/timelog/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: this.props.user['user_data']['id'],
                date: moment(new Date()).format('DD-MM-YYYY'),
                start_time: new Date().toLocaleTimeString(),
                end_time: new Date().toLocaleTimeString(),
                device_info: '{' + 'hello' + '}',
                create_by: 1,
                update_by: 1
            }),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.setState({checkoutId: res['data']});
                this.setState({startTime: new Date().toLocaleTimeString()});
                this.setState({isCheckout: !this.state.isCheckout})
            }).catch(error => {
            console.log(error);
        });

    }

    render() {
        const {isSearch, isDetailShow, isCheckout} = this.state;
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
                    style={{width: width, height: 1, borderColor: '#F1F1F1', borderWidth: 1, marginVertical: 8}}>
                </View>
                <TouchableOpacity
                    style={{width: width - 30, height: 110, backgroundColor: '#d8edff', alignSelf: 'center'}}>
                    <View
                        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => {

                        }}>
                            <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                                   style={{width: 90, height: 90, borderRadius: 60}}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                marginLeft: 15,
                                marginBottom: 10
                            }}
                                  fontSize={22}
                                  color='#008BFF'
                                  bold={true}
                                  align='center'
                            >
                                {this.props.user['Profile']['full_name']}
                            </Text>
                            <TouchableOpacity style={{
                                width: width - 175,
                                height: 50,
                                backgroundColor: '#39B774',
                                borderRadius: 70,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 15,
                                borderWidth: 2,
                                borderColor: 'white'
                            }}
                                              onPress={() => {
                                                  if (isCheckout) {
                                                      this.handleCheckout();
                                                  } else {
                                                      this.handleCheckin();
                                                  }

                                              }}
                            >
                                {this.state.isCheckout ?
                                    <Text
                                        fontSize={20}
                                        color='white'
                                        bold={true}
                                        align='center'
                                    >
                                        CHECK OUT
                                    </Text>
                                    :
                                    <Text
                                        fontSize={20}
                                        color='white'
                                        bold={true}
                                        align='center'
                                    >
                                        CHECK IN
                                    </Text>
                                }

                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        width: width,
                        height: 1,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginVertical: 8
                    }}>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.props.all_users.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) =>
                        <View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                {index > 0
                                    ?
                                    <View
                                        style={{
                                            width: width - 30,
                                            height: 1,
                                            borderColor: '#F1F1F1',
                                            borderWidth: 1,
                                            marginVertical: 5
                                        }}>
                                    </View>
                                    :
                                    null
                                }
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({...this.state, isDetailShow: index});
                                        if (this.state.isDetailShow === index) {
                                            this.setState({isDetailShow: null})
                                        }
                                    }}
                                    style={{
                                        width: width - 30,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: '#E1F2FF',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5
                                    }}>
                                    <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Profile')}
                                    >
                                        <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                                               style={{width: 90, height: 90, borderRadius: 60}}/>
                                    </TouchableOpacity>
                                    <Text
                                        style={{
                                        marginTop: 10,
                                        marginLeft: 40
                                    }}
                                        fontSize={22}
                                        color='#2799FB'
                                        align='center'
                                    >
                                        {item.profile['full_name']}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {(isDetailShow === index) ?
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
                                            {item['department']}
                                        </Text>
                                        <Text>
                                            {this.state.startTime}
                                        </Text>
                                        <Text>
                                            {this.state.endTime}
                                        </Text>
                                        <Text>
                                            {moment(new Date()).format('DD-MM-YYYY')}
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

});
