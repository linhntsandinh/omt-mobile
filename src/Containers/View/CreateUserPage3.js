import React, {Component} from 'react';
import {Dimensions, Picker, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";
import Consts from "../../Configs/Consts";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class CreateUserPage3 extends Component {

    constructor() {
        super();
        this.state = {
            team: null,
            roles: null,
            day: 27,
            month: 12,
            year: 2013
        }
    }

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
                        style={{marginLeft: 25}}
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
                    <View>
                        <Text style={{color: '#55AFFC', marginBottom: 5}}>
                            Ngày tham gia
                        </Text>
                        <View style={{
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: width - 100,
                            height: 50,
                            borderWidth: 1,
                            borderColor: '#CEE8FE'
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
                    <TouchableOpacity style={styles.loginButton}
                                      onPress={() => {
                                          this.props.navigation.navigate('CreateUserPage2')
                                      }}>
                        <Text style={styles.loginText}>
                            Create
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
