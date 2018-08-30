import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {BaseStyles} from "../../Theme";
import {width} from "../../Configs/Consts"
import pick from "../../Components/Base/ImagePicker";
import Icons from "../../Assets/Icons";
import Icon from "../../Components/Base/Icon";

export default class CreateUserPage1 extends Component {
    constructor() {
        super();
        this.state = {username: '', password: '', email: '', avatarSource: null, data: null};
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

    show() {
        pick((source, data) => {
            this.setState({avatarSource: source, data: data})
        });
    }

    render() {
        const {username, password, email, avatarSource, data} = this.state;
        const data1 = new FormData();
        data1.append('name', 'testName'); // you can append anyone.
        data1.append('photo', {
            uri: this.state.avatarSource,
            type: 'image/jpeg', // or photo.type
            name: 'testPhotoName'
        });
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <View style={{marginTop: 20, marginBottom: 50}}>
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
                <View style={{ alignItems: 'center', flex: 1}}>
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
                                style={{
                                    width: width - 100,
                                    height: 1,
                                    borderBottomColor: '#CEE8FE',
                                    borderBottomWidth: 1
                                }}>
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
                                style={{
                                    width: width - 100,
                                    height: 1,
                                    borderBottomColor: '#CEE8FE',
                                    borderBottomWidth: 1
                                }}>
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
                                style={{
                                    width: width - 100,
                                    height: 1,
                                    borderBottomColor: '#CEE8FE',
                                    borderBottomWidth: 1
                                }}>
                            </View>
                        </View>
                        {this.state.avatarSource == null ?
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: '#CEE8FE',
                                    borderWidth: 1,
                                    marginTop: 40,
                                    paddingVertical: 15,
                                    paddingHorizontal: 70
                                }}
                                onPress={() => {
                                    this.show();

                                }}
                            >
                                <Text style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: '#2699FB',
                                }}>
                                    + Chọn ảnh đại diện
                                </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: '#CEE8FE',
                                    borderWidth: 1,
                                    marginTop: 40,
                                    marginHorizontal: 50,
                                    paddingVertical: 15,
                                    paddingHorizontal: 15
                                }}
                                onPress={() => {
                                    this.show();
                                }}
                            >

                                <Text style={{
                                    fontSize: 15,
                                    textAlign: 'center',
                                    color: '#2699FB',
                                }}>
                                    {this.state.avatarSource.uri}
                                </Text>
                            </TouchableOpacity>
                        }

                        <TouchableOpacity style={BaseStyles.screen.touchableButton}
                                          onPress={() => {
                                              this.props.navigation.navigate('CreateUserPage2')
                                              console.log(username, password, email, avatarSource, data)
                                          }}>
                            <Text style={BaseStyles.screen.touchableButtonText}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    {/*<KeyboardAvoidingView behavior='position' enabled>*/}
                    {/*</KeyboardAvoidingView>*/}
                </View>
            </View>
        );
    }
}

