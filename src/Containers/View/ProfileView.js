import React, {Component} from 'react';
import {Icon, View} from '../../Components'
import {Image, ScrollView, TextInput, TouchableOpacity} from "react-native";
import Text from "../../Components/Base/Text";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import {height, moderateScale, width} from "../../Configs/Consts";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import pick from '../../Components/Base/ImagePicker'

export default class ProfileView extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false,
            name: '',
            date_time: '',
            hometown: '',
            phonenumber: '',
            email: '',
            team: '',
            roles: '',
            joinedDay: '',
            isDateTimePickerVisible: false,
            avatarSource: null,
            data: null
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

    show() {
        pick((source, data) => this.setState({avatarSource: source, data: data}));
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
                    <View
                        style={{width: '100%', height: '100%', backgroundColor: '#008BFF'}}
                    >
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20,
                                marginLeft: 15
                            }}>
                                <Icon
                                    style={{}}
                                    name='ios-arrow-back-outline'
                                    color='white'
                                    size={30}
                                />
                                <Text
                                    color='white'
                                    fontSize={18}
                                    style={{marginLeft: 30,}}
                                >
                                    Tài khoản
                                </Text>
                            </View>
                            <Icon
                                style={{alignSelf: 'flex-end', marginRight: 20}}
                                name='ios-log-out-outline'
                                color='white'
                                size={30}
                                onPress={() => {
                                    // this.props.onLogout();
                                    this.props.navigation.navigate('Login');
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                position: 'absolute',
                                right: moderateScale(width * 0.1),
                                top: moderateScale(height * 0.45),
                            }}
                            color='white'
                            fontSize={20}
                        > Nguyễn Xuân Trường</Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                    width: moderateScale(width * 0.39),
                    height: moderateScale(height * 0.21),
                    backgroundColor: 'white',
                    alignItems: 'center',
                    position: 'absolute', top: moderateScale(height * 0.445), left: moderateScale(width * 0.145),
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
                                        {this.props.user['Profile']['full_name']}
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
                                            this.setState({
                                                date_time: moment(date).format('DD-MM-YYYY'),
                                                isDateTimePickerVisible: false
                                            });
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
                                        {this.props.user['Profile']['birth_date']}
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
                                        {this.props.user['Profile']['address']}
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
                                        {this.props.user['Profile']['phone_number']}
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
                                        {this.props.user['user_data']['email']}
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
                                        {this.props.user['Profile']['department']['name']}
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
                                        {this.props.user['Profile']['job_title']['name']}
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
                                        {this.props.user['Profile']['join_date']}
                                    </Text>
                                </View>
                            }
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        position: 'absolute',
                        top: moderateScale(height * 0.465),
                        left: moderateScale(width * 0.173),
                        width: moderateScale(width * 0.33),
                        height: moderateScale(height * 0.19),
                        borderRadius: moderateScale(70),
                        backgroundColor: '#BCE0FD',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {this.state.avatarSource == null ?
                        <Icon
                            name={Icons.person}
                            size={50}
                            color='#008BFF'
                            outlineContainerHeight={45}
                            outlineContainerWidth={45}
                            onPress={() => this.show()}
                        />
                        :
                        <TouchableOpacity
                            style={{
                                flex: 1, alignSelf: 'stretch',
                                borderRadius: 75
                            }}
                            onPress={() => this.show()}>
                            <Image
                                source={this.state.avatarSource}
                                resizeMode='cover'
                                style={{
                                    flex: 1, alignSelf: 'stretch',
                                    borderRadius: 75
                                }}
                            />
                        </TouchableOpacity>
                    }
                </View>
                <View style={{
                    position: 'absolute',
                    top: moderateScale(height * 0.595),
                    right: moderateScale(width * 0.04),
                    // backgroundColor: '#E1F2FF',
                    width: 30,
                    height: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...BaseStyles.shadow,
                }}>
                    <Icon
                        onPress={() => {
                            this.setState({isEdit: !isEdit})
                        }}
                        name={Icons.pencil_bold}
                        color='#2699FB'
                        size={20}
                    />
                </View>
                <Icon
                    style={{
                        position: 'absolute',
                        top: moderateScale(height * 0.586),
                        right: moderateScale(width * 0.2),
                        ...BaseStyles.shadow,
                    }}
                    onPress={() => {
                        this.setState({isEdit: !isEdit});
                        this.props.navigation.navigate('CreateUserPage1')
                    }}
                    name={Icons.add_person}
                    color='#2699FB'
                    size={21}
                />
            </View>
        );
    }
}
