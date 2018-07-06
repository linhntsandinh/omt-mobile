/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type Props = {};
export default class ForgotPasswordView extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });

    constructor() {
        super();
        this.state = {mail: ''};
    }

    getMail(value) {
        this.setState({
            mail: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: 320, marginTop: 50, marginBottom: 100}}>
                    <Icon
                        onPress={() => {
                            this.props.navigation.navigate('Login')
                        }}
                        name='ios-arrow-round-back-outline'
                        color='white'
                        size={35}
                    />
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <Text style={styles.welcome}>
                        Forgot password
                    </Text>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <Icon
                                name='ios-mail-outline'
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
                            Send verification
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
        // justifyContent: 'center',
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
