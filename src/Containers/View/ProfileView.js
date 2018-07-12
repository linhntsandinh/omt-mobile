import React, {Component} from 'react';
import {Icon, View} from '../../Components'
import {Dimensions, Image, ImageBackground, Picker, ScrollView, TextInput, TouchableOpacity} from "react-native";
import Text from "../../Components/Base/Text";
import {BaseStyles} from "../../Theme";
import Consts from "../../Configs/Consts";
import Icons from "../../Assets/Icons";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class ProfileView extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        };
    }

    render() {
        const {isEdit} = this.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <TouchableOpacity style={{
                    width: width,
                    height: height - 450,
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
                        style={{position: 'absolute', left: 180, top: 190,}}
                        color='white'
                        fontSize={20}
                    > Nguyễn Xuân Trường</Text>
                </TouchableOpacity>
                <View style={{
                    width: 125,
                    height: 110,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    position: 'absolute', top: 180, left: 40, borderTopRightRadius: 70, borderTopLeftRadius: 70
                }}>
                </View>
                <ScrollView style={{
                    backgroundColor: '#E1F2FF',
                    height: height - 350,
                    width: width - 20,
                    alignSelf: 'center',
                    marginTop: 30,
                    position: 'absolute',
                    top: 250
                }}>
                    {isEdit ? <Edit/> : <Edited/>}

                </ScrollView>
                <TouchableOpacity
                    style={{position: 'absolute', top: 190, left: 53}}
                >
                    <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                           style={{
                               width: 100,
                               height: 100,
                               borderRadius: 70,
                           }}/>
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    top: 258,
                    right: 10,
                    backgroundColor: '#E1F2FF',
                    width: 30,
                    height: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...BaseStyles.shadow,
                }}>
                    <Icon
                        onPress={() => this.setState({isEdit: !isEdit})}
                        name={Icons.pencil_bold}
                        color='#2699FB'
                        size={20}
                    />
                </View>
            </View>
        );
    }
}

class Edited extends Component {
    render() {
        return (
            <View>
                <View style={{marginTop: 45, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Full name
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Ngày sinh
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Quê quán
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Số điện thoại
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Email
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Bộ phận
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Chức vụ
                    </Text>
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
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Ngày tham gia
                    </Text>
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
                </View>
            </View>
        )
    }
}

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            day: 1,
            month: 1,
            year: 1940,
            hometown: '',
            phonenumber: '',
            email: '',
            team: '',
            roles: '',
            joinedDay: '',

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
        return (
            <View>
                <View style={{marginTop: 45, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Full name
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Ngày sinh
                    </Text>
                    <View style={{
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flex: 1,
                        height: 50,
                        borderWidth: 1,
                        borderColor: '#CEE8FE',
                        backgroundColor: 'white'
                    }}>
                        <Text style={{color: '#55AFFC'}}>
                            {this.state.day}
                        </Text>
                        <Picker
                            selectedValue={this.state.day}
                            style={{
                                height: 20,
                                width: 22,
                                color: '#55AFFC',
                            }}
                            onValueChange={(itemValue, itemIndex) => this.setState({day: itemValue})}>
                            {Object.keys(Consts.day).map((value, index) => {
                                return <Picker.Item key={index} label={Consts.day[value]}
                                                    value={Consts.day[value]}/>
                            })}
                        </Picker>
                        <Text style={{color: '#55AFFC'}}>
                            {this.state.month}
                        </Text>
                        <Picker
                            selectedValue={this.state.month}
                            style={{
                                height: 20,
                                width: 22,
                                color: '#55AFFC',
                                // paddingVertical: 5
                            }}
                            onValueChange={(itemValue, itemIndex) => this.setState({month: itemValue})}>
                            {Object.keys(Consts.month).map((value, index) => {
                                return <Picker.Item key={index} label={Consts.month[value]}
                                                    value={Consts.month[value]}/>
                            })}
                        </Picker>
                        <Text style={{color: '#55AFFC'}}>
                            {this.state.year}
                        </Text>
                        <Picker
                            selectedValue={this.state.year}
                            style={{
                                height: 20,
                                width: 22,
                                color: '#55AFFC',
                            }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({year: itemValue});
                            }}
                        >
                            {Object.keys(Consts.year).map((value, index) => {
                                return <Picker.Item key={index} label={Consts.year[value]}
                                                    value={Consts.year[value]}/>
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Quê quán
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Số điện thoại
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Email
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Bộ phận
                    </Text>
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
                </View>
                <View style={{marginTop: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Chức vụ
                    </Text>
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
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 30}}>
                    <Text style={{marginBottom: 7}}
                          color='#55AFFC'
                          fontSize={10}
                          bold={true}
                    >
                        Ngày tham gia
                    </Text>
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
                </View>
            </View>
        );
    }
}
