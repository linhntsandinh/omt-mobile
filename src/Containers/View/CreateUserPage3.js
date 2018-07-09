import React, {Component} from 'react';
import {Dimensions, Picker, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import DateTimePicker from 'react-native-modal-datetime-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class CreateUserPage3 extends Component {

    constructor() {
        super();

    }
    state = {
        isDateTimePickerVisible: false,
    };
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };
    render() {
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <View style={{width: 320, marginTop: 20, marginBottom: 20}}>
                    <Icon
                        onPress={() =>
                            this.props.navigation.goBack()
                        }
                        name={Icons.back_round}
                        color='#2699FB'
                        size={35}
                        style={{alignSelf: 'flex-start'}}
                    />
                </View>
                <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
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
                        <View style={{borderWidth: 1, borderColor: '#CEE8FE'}}>
                            <Picker
                                selectedValue={this.state.language}
                                mode='dropdown'
                                style={{
                                    height: 50,
                                    width: width - 100,
                                    color: '#55AFFC',

                                    paddingVertical: 5
                                }}
                                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                <Picker.Item label="Leader" value="leader"/>
                                <Picker.Item label="Chăm sóc khách hàng" value="cskh"/>
                                <Picker.Item label="Marketing" value="mar"/>
                                <Picker.Item label="Kỹ thuật" value="dev"/>
                                <Picker.Item label="Sinh Viên" value="intern"/>
                                <Picker.Item label="Sáng tạo" value="design"/>
                                <Picker.Item label="Tài chính" value="finance"/>
                            </Picker>
                        </View>
                    </View>
                    <View style={{marginBottom: 25}}>
                        <View style={{borderWidth: 1, borderColor: '#CEE8FE'}}>
                            <Picker
                                selectedValue={this.state.language}
                                mode='dropdown'
                                style={{
                                    height: 50,
                                    width: width - 100,
                                    color: '#55AFFC',

                                    paddingVertical: 5
                                }}
                                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                <Picker.Item label="CEO" value="CEO"/>
                            </Picker>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text>Show DatePicker</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
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
    welcome: {
        fontSize: 35,
        alignSelf: 'flex-start',
        textAlign: 'center',
        marginBottom: 60,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
    loginButton: {
        width: width - 200,
        height: 60,
        borderColor: '#2699FB',
        borderWidth: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 5
    },
    loginText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 60,
        color: '#2699FB',
        fontFamily: 'Montserrat-Bold'
    },
});
