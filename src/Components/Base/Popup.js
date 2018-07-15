import React, {Component} from 'react';
import {View} from '../../Components'
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import Text from "../../Components/Base/Text";
import Icon from "../../Components/Base/Icon";
import PropTypes from 'prop-types';
import {Dimensions, TextInput} from "react-native";

const width = Dimensions.get('window').width;
const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});
export default class Popup extends Component {
    show = () => {
        this.popupDialog.show();
    }

    constructor() {
        super();
        this.state = {
            oldEmail: '',
            newEmail: ''
        }
    }

    getOldEmail(value) {
        this.setState({
            oldEmail: value
        })
    }

    getNewEmail(value) {
        this.setState({
            newEmail: value
        })
    }

    render() {
        const {title, iconName} = this.props;
        return (
            <PopupDialog
                ref={(popupDialog) => {
                    this.popupDialog = popupDialog;
                }}
                dialogAnimation={slideAnimation}
                width={300}
                height={400}
                containerStyle={{ elevation: 5}}
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
                <View style={{flex:1, justifyContent: 'center', margin: 25}}>
                    <View style={{}}>
                        <Text style={{marginLeft: 10}}>
                            Email đăng ký:
                        </Text>
                        <TextInput
                            style={{ color: '#55AFFC', borderWidth: 1, borderColor: '#D0E9FD', borderRadius: 40, marginTop: 5, paddingLeft: 5}}
                            onChangeText={(value) => {

                            }}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='Register Email'
                            placeholderTextColor='#55AFFC'
                            selectionColor='#55AFFC'
                            returnKeyType='next'
                            keyboardType="email-address"
                            onSubmitEditing={() => {

                            }}
                            // ref={(input) => this.usernameInput = input}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{marginLeft: 10}}>
                            Email xác nhận:
                        </Text>
                        <TextInput
                            style={{ color: '#55AFFC', borderWidth: 2, borderColor: '#D0E9FD', borderRadius: 50, marginTop: 5, paddingLeft: 5}}
                            onChangeText={(value) => {

                            }}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='Confirm email'
                            placeholderTextColor='#55AFFC'
                            selectionColor='#55AFFC'
                            returnKeyType='next'
                            keyboardType="email-address"
                            onSubmitEditing={() => {

                            }}
                            // ref={(input) => this.usernameInput = input}
                        />
                    </View>
                </View>

            </PopupDialog>
        );
    }
};
Popup.propTypes = {
    title: PropTypes.string,
    iconName: PropTypes.string,
}
