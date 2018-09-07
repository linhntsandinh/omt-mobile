import React, {Component} from 'react';
import {View} from '../../Components'
import {BaseStyles} from '../../Theme'
import Consts, {width} from "../../Configs/Consts";
import Text from "../../Components/Base/Text";
import {FlatList} from "react-native";
import {Header} from "react-native-elements";
import moment from "moment/moment";
import {NavigationEvents} from 'react-navigation';

export default class CheckinSummary extends Component {
    handleSubmit() {
        fetch(Consts.api_url +  '/timelog/count/' + moment(new Date()).format('DD-MM-YYYY'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.props.getAllUsersSummary(res)
            }).catch(error => {
            console.log(error);
        });
    }
    constructor(props) {
        super(props);
    }
    componentWillUpdate(){
        this.handleSubmit();
    }
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >

                <Header
                    centerComponent={
                        <View style={{
                            // height: 50,
                            width: width,
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                              // onPress={this.handleSubmit()}
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
                <FlatList
                    data={[{key: 'a'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                    style={{marginTop: 25}}
                    renderItem={({item, index}) =>
                        <View>
                            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                                <Text fontSize={15}>
                                    Nguyễn Xuân Trường
                                </Text>
                                <View style={{
                                    width: width - 20,
                                    alignSelf: 'center',
                                    paddingTop: 10,
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    // backgroundColor: '#F5F5F5',

                                }}>

                                    <View style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'column',
                                        marginBottom: 15
                                    }}>
                                        <Text>
                                            Tổng số ngày công:
                                        </Text>
                                        <Text>
                                            Ngày đi muộn/về sớm:
                                        </Text>
                                    </View>
                                    <View style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'column',
                                        marginBottom: 15
                                    }}>
                                        <Text>
                                            23
                                        </Text>
                                        <Text>
                                            5
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: width,
                                        height: 1,
                                        borderColor: '#F1F1F1',
                                        borderWidth: 1,
                                        marginVertical: 5
                                    }}>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}
