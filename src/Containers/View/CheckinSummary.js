import React, {Component} from 'react';
import {View} from '../../Components'
import {BaseStyles} from '../../Theme'
import Consts, {width} from "../../Configs/Consts";
import Text from "../../Components/Base/Text";
import {FlatList} from "react-native";
import {Header} from "react-native-elements";
import moment from "moment/moment";
import {NavigationEvents} from 'react-navigation';
import * as Progress from 'react-native-progress';

export default class CheckinSummary extends Component {
    handleSubmit() {
        fetch(Consts.api_url +  '/timelog/count/' + moment(new Date()).format('DD-MM-YYYY'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.props.getAllUsersSummary(res);
                this.setState({isLoading: true})
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
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <NavigationEvents
                    onWillFocus={() => {
                        this.handleSubmit()
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
                    <FlatList
                        data={this.props.all_users_summary['count']}
                        keyExtractor={(item, index) => index.toString()}
                        style={{marginTop: 10}}
                        renderItem={({item, index}) =>
                            <View>
                                <View style={{justifyContent: 'center', alignItems: 'center',  marginTop: 8,}}>
                                    <Text
                                        fontSize={20}
                                        color='#008BFF'
                                        bold={true}
                                        align='center'
                                        style={{marginBottom: 15}}
                                    >
                                        {item['name']}
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
                                                {item['count']}
                                            </Text>
                                            <Text
                                                style={{marginBottom: 10}}
                                                color='#828282'
                                            >
                                                {item['early']}
                                            </Text>
                                            <Text
                                                color='#828282'
                                            >
                                                {item['late']}
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            width: width - 35,
                                            height: 1,
                                            borderColor: '#828282',
                                            borderWidth: 1,
                                            marginVertical: 5,
                                            marginTop: 10
                                        }}>
                                    </View>
                                </View>
                            </View>
                        }
                    />
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
