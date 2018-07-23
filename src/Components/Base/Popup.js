import React, {Component} from 'react';
import {View} from '../../Components'
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import Text from "../../Components/Base/Text";
import Icon from "../../Components/Base/Icon";
import PropTypes from 'prop-types';
import {Dimensions, TextInput, TouchableOpacity} from "react-native";

const width = Dimensions.get('window').width;
const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});
export default class Popup extends Component {
    show = () => {
        this.popupDialog.show();
    };
    constructor() {
        super();
        this.state = {
            oldEmail: '',
            newEmail: ''
        }
    }

    getOldPawssword(value) {
        this.setState({
            oldEmail: value
        })
    }

    getNewPassword(value) {
        this.setState({
            newEmail: value
        })
    }

    render() {
        const {title, iconName, buttonTitle} = this.props;
        return (
            <PopupDialog
                ref={(popupDialog) => {
                    this.popupDialog = popupDialog;
                }}
                dialogAnimation={slideAnimation}
                width={300}
                height={400}
                containerStyle={{elevation: 5}}
            >
                <View style={{
                    width: '100%',
                    height: '25%',
                    backgroundColor: '#008BFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon
                        name={iconName}
                        color='white'
                        style={{marginBottom: 10}}
                    />
                    <Text
                        color='white'
                        fontSize={20}
                        bold={true}
                    >
                        {title}
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', margin: 25}}>
                    <View style={{}}>
                        <Text style={{marginLeft: 15}} fontSize={10} color='#A4A4A4' bold={true}>
                            Mật khẩu cũ:
                        </Text>
                        <TextInput
                            style={{
                                color: '#55AFFC',
                                borderWidth: 2,
                                borderColor: '#D0E9FD',
                                borderRadius: 40,
                                marginTop: 5,
                                // paddingLeft: 10,
                                paddingHorizontal: 10,
                                height: 40
                            }}
                            onChangeText={(value) => {
                                this.getOldPawssword(value)
                            }}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='Old password'
                            placeholderTextColor='#55AFFC'
                            selectionColor='#55AFFC'
                            returnKeyType='next'
                            keyboardType="email-address"
                            onSubmitEditing={() => {
                                this.newPasswordInput.focus();
                            }}
                            // ref={(input) => this.usernameInput = input}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{marginLeft: 15}} fontSize={10} color='#A4A4A4' bold={true}>
                            Mật khẩu mới:
                        </Text>
                        <TextInput
                            style={{
                                color: '#55AFFC',
                                borderWidth: 2,
                                borderColor: '#D0E9FD',
                                borderRadius: 50,
                                marginTop: 5,
                                paddingHorizontal: 10,
                                height: 40
                            }}
                            onChangeText={(value) => {
                                this.getNewPassword(value)
                            }}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='New password'
                            placeholderTextColor='#55AFFC'
                            selectionColor='#55AFFC'
                            returnKeyType='next'
                            keyboardType="email-address"
                            onSubmitEditing={() => {

                            }}
                            ref={(input) => this.newPasswordInput = input}
                        />
                    </View>
                    <TouchableOpacity style={{
                        width: width - 250,
                        alignSelf: 'center',
                        height: 40,
                        borderColor: '#2699FB',
                        borderWidth: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 40,
                        marginBottom: 10,
                        borderRadius: 5,
                    }}
                                      onPress={() => {

                                      }}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Montserrat-Bold'
                        }}
                              color='#2699FB'
                              fontSize={15}
                        >
                            {buttonTitle}
                        </Text>
                    </TouchableOpacity>
                </View>

            </PopupDialog>
        );
    }
};
Popup.propTypes = {
    title: PropTypes.string,
    iconName: PropTypes.string,
    buttonTitle: PropTypes.string,
};
