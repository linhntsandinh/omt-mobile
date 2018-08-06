/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Picker, ScrollView, StatusBar, TextInput, View} from 'react-native';
import Icon from "../../Components/Base/Icon";
import {BaseStyles} from "../../Theme";
import {Header} from "react-native-elements";
import Icons from "../../Assets/Icons";
import DateTimePicker from 'react-native-modal-datetime-picker';
import Text from "../../Components/Base/Text";
import Consts, {width} from "../../Configs/Consts"


type Props = {};
export default class FormDetailView extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });

    constructor() {
        super();
        this.state = {
            isDateTimePickerVisible1: false, isDateTimePickerVisible2: false,
            receiver: 'Nguyễn Thế Linh'
        };
    }

    render() {
        const {navigation} = this.props;
        const isEdit = navigation.getParam('isEdit');
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <StatusBar
                    backgroundColor='#026dc9'
                    barStyle='light-content'
                />
                <Header
                    centerComponent={
                        <View style={{
                            // height: 50,
                            width: width,
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Icon
                                name={Icons.back}
                                color='white'
                                onPress={() => this.props.navigation.navigate('ListForm')}
                            />
                            <Text
                                fontSize={24}
                                color='white'
                                bold={true}
                            >
                                Đơn xin đi muộn
                            </Text>
                            <Icon
                                name={Icons.pencil_bold}
                                color='white'
                                size={25}
                                onPress={() => this.setState({isEdit: !isEdit})}
                            />
                        </View>
                    }
                    backgroundColor='#2699FB'
                    innerContainerStyles={{justifyContent: 'center'}}
                    outerContainerStyles={{height: 80}}
                />
                <View
                    style={{width: width, height: 1, borderColor: '#F1F1F1', borderWidth: 1, marginVertical: 5}}>
                </View>
                <ScrollView>
                        <View style={{
                            justifyContent: 'space-around',
                            marginLeft: 60,
                            marginRight: 60,
                            marginTop: 50,
                            marginBottom: 60,
                            flexDirection: 'column',
                            backgroundColor: 'white'

                        }}>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Tên tôi là:
                                </Text>
                                <Text>
                                    Nguyễn Xuân Trường
                                </Text>
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Bộ phận:
                                </Text>
                                <Text>
                                    Intership
                                </Text>
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Chức vụ:
                                </Text>
                                <Text>
                                    Leader
                                </Text>
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Ngày:
                                </Text>
                                <Text>
                                    02/07/2018
                                </Text>
                            </View>
                            <View style={{justifyContent: 'space-between', marginBottom: 20}}>
                                <Text>
                                    Thời gian từ:
                                </Text>
                                {isEdit ?
                                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                                        <Text>
                                            22:30
                                        </Text>
                                        <Icon
                                            name={Icons.calendar_bold}
                                            size={20}
                                            onPress={() => this.setState({isDateTimePickerVisible1: true})}
                                        />
                                        <Text>
                                            02/07/2018
                                        </Text>

                                        <DateTimePicker
                                            mode='datetime'
                                            isVisible={this.state.isDateTimePickerVisible1}
                                            onConfirm={(date) => {
                                                console.log('A date has been picked: ', date);
                                                this.setState({isDateTimePickerVisible1: false});
                                            }}
                                            onCancel={() => this.setState({isDateTimePickerVisible1: false})}
                                        />
                                    </View>
                                    :
                                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                                        <Text>
                                            22:30
                                        </Text>
                                        <Text>
                                            02/07/2018
                                        </Text>
                                    </View>
                                }
                            </View>
                            <View style={{justifyContent: 'space-between', marginBottom: 20}}>
                                <Text>
                                    Thời gian đến:
                                </Text>
                                {isEdit ?
                                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                                        <Text>
                                            22:30
                                        </Text>
                                        <Icon
                                            name={Icons.calendar_bold}
                                            size={20}
                                            onPress={() => this.setState({isDateTimePickerVisible2: true})}
                                        />
                                        <Text>
                                            02/07/2018
                                        </Text>

                                        <DateTimePicker
                                            mode='datetime'
                                            isVisible={this.state.isDateTimePickerVisible2}
                                            onConfirm={(date) => {
                                                console.log('A date has been picked: ', date);
                                                this.setState({isDateTimePickerVisible2: false});
                                            }}
                                            onCancel={() => this.setState({isDateTimePickerVisible2: false})}
                                        />
                                    </View>
                                    :
                                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                                        <Text>
                                            22:30
                                        </Text>
                                        <Text>
                                            02/07/2018
                                        </Text>
                                    </View>
                                }
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Lý do:
                                </Text>
                                {isEdit ?
                                    <TextInput
                                        style={{
                                            height: 20, width: 145, fontSize: 15,
                                            padding: 0
                                        }}
                                        placeholder='Reason'
                                        underlineColorAndroid='transparent'
                                        // autoFocus={true}
                                    />
                                    :
                                    <Text>
                                        Tắc đường
                                    </Text>
                                }

                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Chuyên môn:
                                </Text>
                                <Text>
                                    Developer
                                </Text>
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>
                                <Text>
                                    Người nhận đơn:
                                </Text>
                                {isEdit ?
                                    <View style={{flexDirection: 'row'}}>
                                        <Picker
                                            selectedValue={this.state.receiver}
                                            style={{
                                                height: 20,
                                                width: 159,
                                                transform: [
                                                    {scaleX: 0.9},
                                                    {scaleY: 0.9},
                                                ]
                                            }}

                                            onValueChange={(itemValue, itemIndex) => this.setState({receiver: itemValue})}>
                                            {Object.keys(Consts.employee_list).map((value, index) => {
                                                return <Picker.Item key={index} label={Consts.employee_list[value]}
                                                                    value={Consts.employee_list[value]}/>
                                            })}
                                        </Picker>
                                    </View>

                                    :
                                    <Text>
                                        Nguyễn Thế Linh
                                    </Text>
                                }
                            </View>
                        </View>
                </ScrollView>

            </View>
        );
    }
}
