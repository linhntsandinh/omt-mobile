import React, {Component} from 'react';
import {Dimensions, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class CreateUserPage2 extends Component {
    constructor() {
        super();
        this.state = {name: '', birthday: '', hometown: '', phonenumber: ''};
    }

    getName(value) {
        this.setState({
            name: value
        })
    }
    getBirthday(value) {
        this.setState({
            birthday: value
        })
    }
    getHometown(value) {
        this.setState({
            hometown: value
        })
    }
    getPhonenumber(value) {
        this.setState({
            phonenumber: value
        })
    }
    render() {
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <View style={{width: 320, marginTop: 20, marginBottom: 50}}>
                    <Icon
                        onPress={() =>
                            this.props.navigation.goBack()
                        }
                        name={Icons.back_round}
                        color='#2699FB'
                        size={35}
                        style={{marginLeft: 25}}
                    />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                                    this.getName(value)
                                }}
                                underlineColorAndroid='transparent'
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder='Họ và tên'
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                returnKeyType='next'
                                keyboardType="email-address"
                                onSubmitEditing={() => {
                                    this.birthdayInput.focus()
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
                                    this.getBirthday(value)
                                }}
                                // value={this.state.password}
                                underlineColorAndroid='transparent'
                                placeholder='Ngày sinh'
                                returnKeyType="go"
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                onSubmitEditing={() => {
                                    this.hometownInput.focus()
                                }}
                                ref={(input) => this.birthdayInput = input}
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
                                    this.getHometown(value)
                                }}
                                // value={this.state.password}
                                underlineColorAndroid='transparent'
                                placeholder='Quên quán'
                                returnKeyType="go"
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                onSubmitEditing={() => {
                                    this.phonenumberInput.focus()
                                }}
                                ref={(input) => this.hometownInput = input}
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
                                    this.getPhonenumber(value)
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='Số điện thoại'
                                returnKeyType="go"
                                placeholderTextColor='#55AFFC'
                                selectionColor='#55AFFC'
                                ref={(input) => this.phonenumberInput = input}
                            />
                        </View>
                        <View
                            style={{width: width - 100, height: 1, borderBottomColor: '#CEE8FE', borderBottomWidth: 1}}>
                        </View>
                    </View>
                    <TouchableOpacity style={BaseStyles.screen.touchableButton}
                                      onPress={() => {
                                          this.props.navigation.navigate('CreateUserPage3')
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

