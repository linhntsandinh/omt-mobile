import React, {Component} from 'react';
import {Icon, View} from '../../Components'
import {Image, ImageBackground, ScrollView, TextInput, TouchableOpacity} from "react-native";
import Text from "../../Components/Base/Text";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import {height, moderateScale, width} from "../../Configs/Consts";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

export default class ProfileView extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: true,
            name: '',
            date_time: '',
            hometown: '',
            phonenumber: '',
            email: '',
            team: '',
            roles: '',
            joinedDay: '',
            isDateTimePickerVisible: false
        };
    }
    getName(value) {
        this.setState({
            name: value
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

    getEmail(value) {
        this.setState({
            hometown: value
        })
    }

    getTeam(value) {
        this.setState({
            hometown: value
        })
    }

    getRoles(value) {
        this.setState({
            hometown: value
        })
    }

    getJoinedDay(value) {
        this.setState({
            hometown: value
        })
    }
    render() {
        const {isEdit} = this.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <TouchableOpacity style={{
                    width: width,
                    height: moderateScale(height * 0.53),
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                    <ImageBackground source={require('../../Assets/Image/wallhaven-367110.png')}
                                     style={{width: '100%', height: '100%'}}/>
                    <Icon
                        style={{position: 'absolute', left: 20, top: 10}}
                        name='ios-arrow-back-outline'
                        color='black'
                        size={30}
                    />
                    <Icon
                        style={{position: 'absolute', right: 20, top: 10}}
                        name='ios-log-out-outline'
                        color='black'
                        size={30}
                    />
                    <Text
                        style={{
                            position: 'absolute',
                            right: moderateScale(width * 0.1),
                            top: moderateScale(height * 0.45),
                        }}
                        color='white'
                        fontSize={20}
                    > Nguyễn Xuân Trường</Text>
                </TouchableOpacity>
                <View style={{
                    width: moderateScale(width * 0.4),
                    height: moderateScale(height * 0.2),
                    backgroundColor: 'white',
                    alignItems: 'center',
                    position: 'absolute', top: moderateScale(height * 0.45), left: moderateScale(width * 0.145),
                    borderTopRightRadius: 70, borderTopLeftRadius: 70,
                }}>
                </View>

                <ScrollView style={{
                    backgroundColor: '#E1F2FF',
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: moderateScale(height * 0.07),
                    marginBottom: moderateScale(height * 0.05),

                }}>
                    <View>
                        <View style={{marginTop: 20, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Full name
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
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
                                        this.hometownInput.focus()
                                    }}
                                    ref={(input) => this.nameInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        Nguyễn Xuân Trường
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={{marginTop: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Ngày sinh
                            </Text>
                            {isEdit ?
                                <View style={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    flex: 1,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: '#CEE8FE',
                                    backgroundColor: 'white',
                                    paddingLeft: 20,
                                    paddingRight: 2
                                }}>
                                    <Text color='#55AFFC'>
                                        {this.state.date_time}
                                    </Text>
                                    <DateTimePicker
                                        mode='date'
                                        isVisible={this.state.isDateTimePickerVisible}
                                        is24Hour={true}
                                        onConfirm={(date) => {
                                            this.setState({date_time: moment(date).format('MMMM, Do YYYY'), isDateTimePickerVisible: false});
                                        }}
                                        onCancel={() => this.setState({isDateTimePickerVisible: false})}
                                    />
                                    <Icon
                                        name={Icons.arrow_down}
                                        onPress={() => this.setState({isDateTimePickerVisible: true})}
                                        color='#55AFFC'
                                    />
                                </View>
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        14/08/1997
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={{marginTop: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Quê quán
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
                                    onChangeText={(value) => {
                                        this.getHometown(value)
                                    }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Địa chỉ'
                                    placeholderTextColor='#55AFFC'
                                    selectionColor='#55AFFC'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    onSubmitEditing={() => {
                                        this.phoneNumberInput.focus()
                                    }}
                                    ref={(input) => this.hometownInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        Hà Nội
                                    </Text>
                                </View>
                            }

                        </View>
                        <View style={{marginTop: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Số điện thoại
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
                                    onChangeText={(value) => {
                                        this.getPhonenumber(value)
                                    }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Số điện thoại'
                                    placeholderTextColor='#55AFFC'
                                    selectionColor='#55AFFC'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    onSubmitEditing={() => {
                                        this.emailInput.focus()
                                    }}
                                    ref={(input) => this.phoneNumberInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        01672599545
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={{marginTop: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Email
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
                                    onChangeText={(value) => {
                                        this.getEmail(value)
                                    }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Email'
                                    placeholderTextColor='#55AFFC'
                                    selectionColor='#55AFFC'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    onSubmitEditing={() => {
                                        this.teamInput.focus()
                                    }}
                                    ref={(input) => this.emailInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        truongnx2@sandinh.net
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={{marginTop: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Bộ phận
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
                                    onChangeText={(value) => {
                                        this.getTeam(value)
                                    }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Bộ phận'
                                    placeholderTextColor='#55AFFC'
                                    selectionColor='#55AFFC'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    onSubmitEditing={() => {
                                        this.rolseInput.focus()
                                    }}
                                    ref={(input) => this.teamInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        Thực tập sinh
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={{marginTop: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Chức vụ
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
                                    onChangeText={(value) => {
                                        this.getRoles(value)
                                    }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Chức vụ'
                                    placeholderTextColor='#55AFFC'
                                    selectionColor='#55AFFC'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    onSubmitEditing={() => {
                                        this.joinedDayInput.focus()
                                    }}
                                    ref={(input) => this.rolseInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        Leader
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={{marginVertical: 10, marginHorizontal: 40}}>
                            <Text style={{marginBottom: 7}}
                                  color='#55AFFC'
                                  fontSize={10}
                                  bold={true}
                            >
                                Ngày tham gia
                            </Text>
                            {isEdit ?
                                <TextInput
                                    style={{
                                        flex: 1,
                                        color: '#55AFFC',
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20
                                    }}
                                    onChangeText={(value) => {
                                        this.getJoinedDay(value)
                                    }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Ngày tham gia'
                                    placeholderTextColor='#55AFFC'
                                    selectionColor='#55AFFC'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    onSubmitEditing={() => {

                                    }}
                                    ref={(input) => this.joinedDayInput = input}
                                />
                                :
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: '#C7E5FD',
                                        paddingLeft: 20, height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Text
                                        color='#55AFFC'
                                        fontSize={14}
                                        align='center'
                                    >
                                        11/06/2017
                                    </Text>
                                </View>
                            }
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={{position: 'absolute', top: moderateScale(height * 0.465), left: moderateScale(width * 0.173)}}
                >
                    <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                           style={{
                               width: moderateScale(width * 0.35),
                               height: moderateScale(height * 0.2),
                               borderRadius: moderateScale(70),
                           }}/>
                </TouchableOpacity>
            </View>
        );
    }
}
