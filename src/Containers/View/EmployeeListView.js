import {Icon, View} from '../../Components'
import {BaseStyles} from '../../Theme'
import React, {Component} from 'react';
import {FlatList, Image, Keyboard, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Icons} from "../../Assets";
import InputText from "../../Components/Base/InputText";
import {height, moderateScale, width} from "../../Configs/Consts"
import Text from "../../Components/Base/Text";

export default class EmployeeListView extends Component {
    constructor(props) {
        super(props);
        this._inputSearch = null;
        this.state = {
            isSearch: false,
            textSearch: '',
            startTime: null,
            endTime: null
        };
        console.log()
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus();
        } else {
            Keyboard.dismiss();
        }
    }
    render() {
        const {isSearch} = this.state;
        return (
            <View style={BaseStyles.screen.mainContainer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#bae1ff"
                />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E1F2FF',
                    height: 80,

                }}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        width: width - 50,
                        borderRadius: 50,
                        borderWidth: 1.5,
                        borderColor: '#53B2FF'
                    }}>
                        <Icon
                            key={'icon'}
                            name={isSearch ? Icons.back : Icons.search}
                            onPress={() => this.setState({isSearch: !isSearch})}
                            style={{marginTop: 10, marginLeft: 5}}
                            color='#53B2FF'
                            size={25}
                        />
                        <InputText
                            onChangeText={text => this.setState({textSearch: text})}
                            onFocus={() => this.setState({isSearch: true})}
                            hint="Search"
                            key={'haha'}
                            ref={(com) => {
                                this._inputSearch = com;
                            }}
                            iconRemove={true}
                            color='#CDE7FD'
                            hintColor='#E1F2FF'
                        />
                    </View>
                </View>
                <View
                    style={{width: width, height: 1, borderColor: '#F1F1F1', borderWidth: 1, marginVertical: 8}}>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.props.all_users.data}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) =>
                        <View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        paddingHorizontal: 10,
                                        paddingVertical: 5
                                    }}>
                                    <TouchableOpacity
                                        // onPress={() => this.props.navigation.navigate('Profile')}
                                    >
                                        <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                                               style={{width: 80, height: 80, borderRadius: 60}}/>
                                    </TouchableOpacity>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                        }}
                                        fontSize={18}
                                        color='#2799FB'
                                        align='center'
                                    >
                                        {item.profile['full_name']}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                />
                <View style={{
                    backgroundColor: '#06cc5b',
                    borderRadius: 50,
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: moderateScale(height * 0.15),
                    right: moderateScale(width * 0.02)
                }}>
                    <Icon
                        name={Icons.add_bold}
                        size={30}
                        color='white'
                        onPress={() => this.props.navigation.navigate('CreateUserPage1', {
                            isEdit: true
                        })}
                    />
                </View>
                <View
                    style={{
                        width: width,
                        height: 1,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginTop: 5,
                        marginBottom: 10,
                    }}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
