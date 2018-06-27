/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Dimensions, TextInput, TouchableOpacity
} from 'react-native';
import Icon from "react-native-elements/src/icons/Icon";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type Props = {};
export default class Login extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });
    constructor() {
        super();
        this.state = {username: '', password: ''};
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

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>
                        Log In
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
                                name='ios-lock-outline'
                                type='ionicon'
                                color='white'
                            />
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'white'}}
                                onChangeText={(value) => {
                                    this.getPassword(value)
                                }}
                                // value={this.state.password}
                                underlineColorAndroid='transparent'
                                placeholder='Password'
                                returnKeyType="go"
                                placeholderTextColor='#60646E'
                                selectionColor='white'
                                secureTextEntry={true}
                                ref={(input) => this.passwordInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#BF8D2D', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {this.props.navigation.navigate('ProfileScreen')}}>
                        <Text style={styles.loginText}>
                            Log in
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
                            First time here?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('SignUpScreen');
                            this.usernameInput.clear();
                            this.passwordInput.clear();
                        }}>
                            <Text style={{color: '#A3C2CE', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        marginTop: 100,
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
