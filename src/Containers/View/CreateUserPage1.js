import React, {Component} from 'react';
import {Dimensions, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {BaseStyles} from "../../Theme";

const width = Dimensions.get('window').width;
export default class CreateUserPage1 extends Component {
    constructor() {
        super();
        this.state = {username: '', password: '', email: ''};
    }

    getUsername(value) {
        this.setState({
            username: value
        })
    }
    getEmail(value) {
        this.setState({
            email: value
        })
    }
    getPassword(value) {
        this.setState({
            password: value
        })
    }
    render() {
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center',
                        color: '#2699FB',
                        fontFamily: 'Montserrat-Bold',
                        marginBottom: 50
                    }}>
                        Create an User
                    </Text>
                    <View style={{marginBottom: 25}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
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
                                keyboardType="email-address"
                                onSubmitEditing={() => {
                                    this.passwordInput.focus()
                                }}
                                ref={(input) => this.usernameInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#CEE8FE', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', marginBottom: 25}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: '#55AFFC'}}
                                onChangeText={(value) => {
                                    this.getPassword(value)
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='Password'
                                returnKeyType="go"
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                secureTextEntry={true}
                                onSubmitEditing={() => {
                                    this.emailInput.focus()
                                }}
                                ref={(input) => this.passwordInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#CEE8FE', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: '#55AFFC'}}
                                onChangeText={(value) => {
                                    this.getEmail(value)
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='Email'
                                returnKeyType="go"
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                ref={(input) => this.emailInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#CEE8FE', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <TouchableOpacity style={BaseStyles.screen.touchableButton}
                                      onPress={() => {
                                          this.props.navigation.navigate('CreateUserPage2')
                                      }}>
                        <Text style={BaseStyles.screen.touchableButtonText}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

