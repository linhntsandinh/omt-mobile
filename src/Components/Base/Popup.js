import React, {Component} from 'react';
import {View} from '../../Components'
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import Text from "../../Components/Base/Text";
import Icon from "../../Components/Base/Icon";
import PropTypes from 'prop-types';
import {TextInput, TouchableOpacity} from "react-native";
import {width} from "../../Configs/Consts"

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
            firstField: '',
            secondField: ''
        }
    }

    getFirstField(value) {
        this.setState({
            firstField: value
        })
    }

    getSecondField(value) {
        this.setState({
            secondField: value
        })
    }

    render() {
        const {title, iconName, buttonTitle, placeHolder, placeHolder2} = this.props;
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
                            {placeHolder}
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
                                this.getFirstField(value)
                            }}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={placeHolder}
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
                            {placeHolder2}
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
                                this.getSecondField(value)
                            }}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={placeHolder2}
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
    placeHolder: PropTypes.string,
    placeHolder2: PropTypes.string
};
