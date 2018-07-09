import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class CreateUserPage3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{width: 320,  marginTop: 20, marginBottom: 20}}>
                    <Icon
                        onPress={() =>
                            this.props.navigation.goBack()
                        }
                        name='ios-arrow-round-back-outline'
                        color='white'
                        size={35}
                        style={{alignSelf: 'flex-start'}}
                    />
                </View>
                <View style={{marginTop: 40}}>
                    <Text style={styles.welcome}>
                        Create User
                    </Text>
                    <View style={{marginBottom: 40}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'white'}}
                                onChangeText={(value) => {
                                    this.getUsername(value)
                                }}
                                underlineColorAndroid='transparent'
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder='Bộ phận'
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
                    <View style={{justifyContent: 'center', marginBottom: 40}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'white'}}
                                onChangeText={(value) => {
                                    this.getPassword(value)
                                }}
                                // value={this.state.password}
                                underlineColorAndroid='transparent'
                                placeholder='Chức vụ'
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
                    <View style={{justifyContent: 'center'}}>
                        <View style={{alignItems: 'center', flexDirection: 'row', paddingVertical: 6}}>
                            <TextInput
                                style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'white'}}
                                onChangeText={(value) => {
                                    this.getPassword(value)
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='Ngày tham gia'
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
                    <TouchableOpacity style={styles.loginButton}
                                      onPress={() => {
                                          this.props.navigation.navigate('CreateUserPage2')
                                      }}>
                        <Text style={styles.loginText}>
                            Next
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