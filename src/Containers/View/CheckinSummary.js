import React, {Component} from 'react';
import {View} from '../../Components'
import {BaseStyles} from '../../Theme'
import Consts, {width} from "../../Configs/Consts";
import Text from "../../Components/Base/Text";
import {Header} from "react-native-elements";
import moment from "moment/moment";
import {NavigationEvents} from 'react-navigation';
import {Calendar} from 'react-native-calendars';
import * as Progress from 'react-native-progress';

export default class CheckinSummary extends Component {
    getAllUserSummaries() {
        fetch(Consts.api_url + '/timelog/count/' + moment(new Date()).format('DD-MM-YYYY'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        }).then((response) => response.json())
            .then((res) => {
                this.props.getAllUsersSummary(res);
                this.setState({isLoading: true})
            }).catch(error => {
            console.log(error);
        });
    }

    getUserSummary() {
        fetch(Consts.api_url + '/timelog/countUserId/' + this.props.user['user_data']['id'], {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        }).then((response) => response.json())
            .then((res) => {
                // console.log(res);
                this.props.getUserSummary(res);
            }).catch(error => {
            console.log(error);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            progress: 0,
            indeterminate: true,

        };
    }

    render() {
        let userSummary;
        let summary_history;
        if (this.state.isLoading) {
            for (let i = 0; i < this.props.all_users_summary['count'].length; i++) {
                if (this.props.all_users_summary['count'][i]['id'] === this.props.user['user_data']['id']) {
                    userSummary = this.props.all_users_summary['count'][i];
                }
            }
            let obj = this.props.user_summary['data'].map(value => ({
                [value] : {selected: true, marked: true, selectedColor: 'blue', dotColor: 'red'}
            }));
            summary_history = obj.reduce((a, b) => Object.assign(a, b), {});
        }

        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <NavigationEvents
                    onWillFocus={() => {
                        this.getAllUserSummaries();
                        this.getUserSummary();
                    }}
                />
                <Header
                    centerComponent={
                        <View style={{
                            // height: 50,
                            width: width,
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        >
                            <Text
                                fontSize={24}
                                color='white'
                                bold={true}
                            >
                                Tổng kết chấm công
                            </Text>
                        </View>
                    }
                    backgroundColor='#2699FB'
                    innerContainerStyles={{justifyContent: 'center'}}
                    outerContainerStyles={{height: 80}}
                />
                {this.state.isLoading
                    ?
                    <View>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 8,}}>
                            <Text
                                fontSize={20}
                                color='#008BFF'
                                bold={true}
                                align='center'
                                style={{marginBottom: 15}}
                            >
                                {userSummary['name']}
                            </Text>
                            <View style={{
                                width: width - 20,
                                alignSelf: 'center',
                                paddingTop: 10,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                // backgroundColor: '#F5F5F5',
                                paddingHorizontal: 25
                            }}>

                                <View style={{
                                    flexDirection: 'column',
                                    marginBottom: 15
                                }}>
                                    <Text
                                        style={{marginBottom: 10}}
                                        color='#828282'
                                    >
                                        Tổng số ngày công:
                                    </Text>
                                    <Text
                                        style={{marginBottom: 10}}
                                        color='#828282'
                                    >
                                        Ngày đi về sớm:
                                    </Text>
                                    <Text
                                        color='#828282'
                                    >
                                        Ngày đi muộn:
                                    </Text>
                                </View>
                                <View style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    marginBottom: 15
                                }}>
                                    <Text
                                        style={{marginBottom: 10}}
                                        color='#828282'
                                    >
                                        {userSummary['count']}
                                    </Text>
                                    <Text
                                        style={{marginBottom: 10}}
                                        color='#828282'
                                    >
                                        {userSummary['early']}
                                    </Text>
                                    <Text
                                        color='#828282'
                                    >
                                        {userSummary['late']}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Calendar
                            style={{
                                borderWidth: 1,
                                paddingTop: 5,
                                borderColor: '#eee',
                                marginBottom: 15,
                                marginHorizontal: 20,
                                elevation: 5
                            }}
                            markedDates={summary_history}
                            // disabledByDefault={true}
                        />
                    </View>

                    :
                    <View style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        elevation: 7
                    }}>
                        <Progress.Circle
                            color='red'
                            progress={this.state.progress}
                            indeterminate={this.state.indeterminate}
                        />
                    </View>
                }
            </View>
        );
    }
}
