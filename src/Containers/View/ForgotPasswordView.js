/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-elements/src/icons/Icon";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type Props = {};
export default class ForgotPasswordView extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });

    constructor() {
        super();
        this.state = {username: '', password: '', mail: ''};
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

    getMail(value) {
        this.setState({
            mail: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={{alignSelf: 'flex-start', marginBottom: 40}} onPress={() => {this.props.navigation.navigate('LoginScreen')}}>
                        <Icon
                            name='ios-arrow-round-back-outline'
                            type='ionicon'
                            color='white'
                            size={35}
                        />
                    </TouchableOpacity>
                    <Text style={styles.welcome}>
                        Forgot password
                    </Text>
                    <View style={{marginBottom: 40}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <Icon
                                name='ios-person-outline'
                                type='ionicon'
                                color='white'
                            />
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'white'}}
                                onChangeText={(value) => {
                                    this.getUsername(value)
                                }}
                                underlineColorAndroid='transparent'
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder='Username'
                                placeholderTextColor='#60646E'
                                selectionColor='#60646E'
                                returnKeyType='next'
                                keyboardType="email-address"
                                onSubmitEditing={() => {
                                    this.passwordInput.focus()
                                }}
                                ref={(input) => this.usernameInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#BF8D2D', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <Icon
                                name='ios-mail-outline'
                                type='ionicon'
                                color='white'
                            />
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'white'}}
                                onChangeText={(value) => {
                                    this.getMail(value)
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='E-mail'
                                returnKeyType="go"
                                placeholderTextColor='#60646E'
                                selectionColor='white'
                                secureTextEntry={true}
                                ref={(input) => this.emailInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#BF8D2D', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
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
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
    loginButton: {
        width: width - 100,
        height: 60,
        backgroundColor: '#21242C',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 10,
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
