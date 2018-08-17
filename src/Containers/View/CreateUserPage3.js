import React, {Component} from 'react';
import {Picker, Text, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import Consts, {width} from "../../Configs/Consts";
import moment from "moment/moment";
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class CreateUserPage3 extends Component {

    constructor() {
        super();
        this.state = {
            team: null,
            roles: null,
            day: 27,
            month: 12,
            year: 2013,
            isDateTimePickerVisible: false,
            date_time: '',
        }
    }

    render() {
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <View style={{marginTop: 20, marginBottom: 20}}>
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
                <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center',
                        color: '#2699FB',
                        fontFamily: 'Montserrat-Bold',
                        marginBottom: 40
                    }}>
                        Create an User
                    </Text>
                    <View style={{marginBottom: 25}}>
                        <Text style={{color: '#55AFFC', marginBottom: 5}}>
                            Bộ phận
                        </Text>
                        <View style={{borderWidth: 1, borderColor: '#CEE8FE'}}>

                            <Picker
                                selectedValue={this.state.team}
                                style={{
                                    height: 50,
                                    width: width - 100,
                                    color: '#55AFFC',
                                    paddingVertical: 5
                                }}
                                onValueChange={(itemValue, itemIndex) => this.setState({team: itemValue})}>
                                {
                                    Object.keys(Consts.team).map((value, index) => {
                                        return <Picker.Item key={index} label={Consts.team[value]}
                                                            value={Consts.team[value]}/>
                                    })
                                }
                            </Picker>
                        </View>
                    </View>
                    <View style={{marginBottom: 25}}>
                        <Text style={{color: '#55AFFC', marginBottom: 5}}>
                            Chức vụ
                        </Text>
                        <View style={{borderWidth: 1, borderColor: '#CEE8FE'}}>
                            <Picker
                                selectedValue={this.state.roles}
                                style={{
                                    height: 50,
                                    width: width - 100,
                                    color: '#55AFFC',
                                    paddingVertical: 5
                                }}
                                onValueChange={(itemValue, itemIndex) => this.setState({roles: itemValue})}>
                                {Object.keys(Consts.roles).map((value, index) => {
                                    return <Picker.Item key={index} label={Consts.roles[value]}
                                                        value={Consts.roles[value]}/>
                                })}
                            </Picker>
                        </View>
                    </View>
                    <View style={{marginBottom: 25}}>
                        <Text style={{color: '#55AFFC', marginBottom: 5}}>
                            Ngày tham gia
                        </Text>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: width - 100,
                            height: 50,
                            borderWidth: 1,
                            borderColor: '#CEE8FE',
                            backgroundColor: 'white',
                            paddingLeft: 10
                        }}
                                          onPress={() => this.setState({isDateTimePickerVisible: true})}
                        >
                            <Text style={{color: '#55AFFC', fontSize: 15}}>
                                {this.state.date_time === '' ? 'Join day' : this.state.date_time}
                            </Text>
                            <DateTimePicker
                                mode='date'
                                isVisible={this.state.isDateTimePickerVisible}
                                is24Hour={true}
                                onConfirm={(date) => {
                                    this.setState({
                                        date_time: moment(date).format('MMMM, Do YYYY'),
                                        isDateTimePickerVisible: false
                                    });
                                }}
                                onCancel={() => this.setState({isDateTimePickerVisible: false})}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        width: width - 200,
                        height: 60,
                        borderColor: '#2699FB',
                        borderWidth: 2,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        marginBottom: 10,
                        borderRadius: 10,
                        elevation: 5
                    }}
                                      onPress={() => {
                                          this.props.navigation.navigate('CreateUserPage1')
                                      }}>
                        <Text style={BaseStyles.screen.touchableButtonText}>
                            Create
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

