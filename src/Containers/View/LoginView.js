/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import Popup from "../../Components/Base/Popup";
import {width} from "../../Configs/Consts"
import * as Progress from 'react-native-progress';
import moment from "moment/moment";

export default class LoginView extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });

    constructor() {
        super();
        this.state = {
            username: '', password: '', isShow: false, error: '', progress: 0,
            indeterminate: true,
            loading: false,
        }
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

    handleSubmit() {
        fetch('http://192.168.1.55:9000/timelog/countDay/' + moment(new Date()).format('DD-MM-YYYY'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        }).then((response) => response.json())
            .then((res) => {
                // console.log(res);
                this.props.getAllUsers(res);
            }).catch(error => {
            console.log(error);
        });
        this.props.onLogin(this.state.username, this.state.password);

        fetch('http://192.168.1.55:9000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.props.onLoginSuccess(res);
                this.setState({loading: false});
                if (res['status'] === 'OK') {
                    this.props.navigation.navigate('TabMain');
                } else {
                    this.setState({isShow: true});
                    this.setState({error: 'Please try again'})
                }
            }).catch(error => {
            console.log(error);
            this.props.onLoginFail(error);
            this.setState({isShow: true});
            this.setState({loading: false});
            this.setState({error: error})
        });

    }

    isValid() {
        const {username, password} = this.state;
        let valid = false;

        if (username.length > 0 && password.length > 0) {
            valid = true;
        }

        if (username.length === 0) {
            this.setState({error: 'You must enter an username'});
            this.setState({isShow: true});
        } else if (password.length === 0) {
            this.setState({error: 'You must enter a password'});
            this.setState({isShow: true});
        }
        return valid;
    }

    render() {
        return (
            <View style={BaseStyles.screen.mainContainer}>

                <StatusBar
                    backgroundColor='#026dc9'
                    barStyle='light-content'
                />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 150,
                    width: width,
                    backgroundColor: '#2699FB'
                }}>
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
                </View>
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
                                      onPress={() => {
                                          if (this.isValid()) {
                                              this.handleSubmit();
                                              this.setState({loading: true})
                                          }
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
                {/*{this.state.isShow ?*/}
                    {/*Alert.alert(*/}
                        {/*'Login Fail',*/}
                        {/*this.state.error,*/}
                        {/*[*/}
                            {/*{text: 'Ok', onPress: () => this.setState({isShow: false}), style: 'Ok'},*/}
                        {/*]*/}
                    {/*)*/}
                    {/*:*/}
                    {/*null*/}
                {/*}*/}
                {this.state.loading ?
                    <View style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        elevation: 7
                    }}>
                        <Progress.Circle
                            color='red'
                            progress={this.state.progress}
                            indeterminate={this.state.indeterminate}
                        />
                    </View>
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
