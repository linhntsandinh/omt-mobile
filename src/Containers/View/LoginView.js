/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import {Header} from "react-native-elements";
import Icons from "../../Assets/Icons";
import Popup from "../../Components/Base/Popup";
import {width} from "../../Configs/Consts"
// const height = Dimensions.get('window').height;
type Props = {};
export default class LoginView extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });

    constructor() {
        super();
        this.state = {username: '', password: '', isShow: false}
    }

    getUsername(value) {
        this.setState({
            username: value
        })
    }

    getPassword(value) {
        this.setState({
            password: value
        })
    }
    handleSubmit(e) {
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
        fetch('http://192.168.1.83:9000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then((res) => {
                // console.log(res);
                this.props.onLoginSuccess(res['user_data', res['permission'], res['Profile'], res['status']]);
                this.props.navigation.navigate('TabMain');
            }).catch(error => {
            console.log(error);
            this.props.onLoginFail(error);
            this.setState({isShow: !this.state.isShow})
        });
    }

    render() {
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <StatusBar
                    backgroundColor='#026dc9'
                    barStyle='light-content'
                />
                <Header
                    centerComponent={
                        <View style={{height: 120, width: 300, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: 40,
                                textAlign: 'center',
                                color: '#FFFFFF',
                                fontFamily: 'Montserrat-Bold'
                            }}>
                                OHZE
                            </Text>
                            <Text style={{
                                fontSize: 17,
                                textAlign: 'center',
                                color: '#FFFFFF',
                                fontFamily: 'Montserrat-Bold'
                            }}>
                                MANAGEMENT TOOL
                            </Text>
                        </View>
                    }
                    backgroundColor='#2699FB'
                    innerContainerStyles={{justifyContent: 'center'}}
                    outerContainerStyles={{height: 150}}
                />

                <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center',
                        marginBottom: 40,
                        color: '#2699FB',
                        fontFamily: 'Montserrat-Bold'
                    }}>
                        LOG IN
                    </Text>
                    <View style={{marginBottom: 25}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <Icon
                                name={Icons.profile}
                                color='#2699FB'
                            />
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: '#55AFFC'}}
                                onChangeText={(value) => {
                                    this.getUsername(value)
                                }}
                                underlineColorAndroid='transparent'
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder='Username'
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                returnKeyType='next'
                                onSubmitEditing={() => {
                                    this.passwordInput.focus()
                                }}
                                ref={(input) => this.usernameInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#C1E2FD', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <Icon
                                name={Icons.lock}
                                color='#2699FB'
                            />
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: '#55AFFC'}}
                                onChangeText={(value) => {
                                    this.getPassword(value)
                                }}
                                // value={this.state.password}
                                underlineColorAndroid='transparent'
                                placeholder='Password'
                                returnKeyType="go"
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                secureTextEntry={true}
                                // onSubmitEditing={() => {
                                //     this.loginButton.focus()
                                // }}
                                ref={(input) => this.passwordInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#C1E2FD', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginButton}
                                      onPress={(e) => {
                                          this.handleSubmit(e);
                                      }}>
                        <Text style={styles.loginText}>
                            LOG IN
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: '#BCBCBC', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
                            Forgot password?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => this.popup.show()}>
                            <Text style={{color: '#A3C2CE', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
                                Click here
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>
                <Popup ref={ref => (this.popup = ref)} title='Reset Password' iconName={Icons.build_bold}
                       buttonTitle='Send vertification' placeHolder2='Mật khẩu mới' placeHolder='Mật khẩu cũ'/>
                { this.state.isShow ?
                    Alert.alert(
                        'Alert',
                        'Please try again',
                    )
                    :
                    null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#434856'
    },
    welcome: {
        fontSize: 35,
        alignSelf: 'flex-start',
        textAlign: 'center',
        marginBottom: 60,
        color: '#2699FB',
        fontFamily: 'Montserrat-Bold'
    },
    loginButton: {
        width: width - 100,
        height: 60,
        backgroundColor: '#2699FB',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 70,
        elevation: 5
    },
    loginText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 60,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
});
