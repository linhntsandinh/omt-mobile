import React, {Component} from 'react';
import {Icon, View} from '../../Components'
import {Text, TextInput} from "react-native";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import {width} from "../../Configs/Consts"

export default class EditMail extends Component {
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <View style={{flexDirection: 'row', width: width}}>
                    <Icon
                        name={Icons.back}
                        color='black'
                        size={30}
                        // style={{alignSelf: 'flex-start'}}
                    />
                    <View style={{position: 'absolute', left: 0, right: 0}}>
                        <Text style={{
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'black',
                            fontFamily: 'Montserrat-Bold'
                        }}>
                            Email
                        </Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', width: width - 100, alignSelf: 'center', marginTop: 40}}>
                    <View style={{ flexDirection: 'row', paddingVertical: 6}}>
                        <TextInput
                            style={{flex: 1, padding: 0, paddingHorizontal: 8, color: 'black'}}
                            onChangeText={(value) => {
                                // this.getPassword(value)
                            }}
                            // value={this.state.password}
                            underlineColorAndroid='transparent'
                            placeholder='Email'
                            returnKeyType="go"
                            placeholderTextColor='#60646E'
                            selectionColor='white'
                            secureTextEntry={true}
                            // ref={(input) => this.passwordInput = input}
                        />
                    </View>
                    <View
                        style={{width: width - 100, height: 1, borderBottomColor: '#BF8D2D', borderBottomWidth: 1}}>
                    </View>
                </View>
            </View>
        );
    }
}
