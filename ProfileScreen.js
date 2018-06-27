/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View, Dimensions, TextInput, TouchableOpacity, FlatList, Image, ImageBackground
} from 'react-native';
import Icon from "react-native-elements/src/icons/Icon";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type Props = {};
export default class ProfileScreen extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={{
                    width: width,
                    height: height - 500,
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                    <ImageBackground source={require('./wallhaven-367110.png')}
                                     style={{width: width, height: height - 500}}/>
                    <TouchableOpacity style={{marginLeft: 30, marginTop: 10}}>
                        <Icon
                            name='ios-arrow-back-outline'
                            type='ionicon'
                            color='black'
                            size={30}
                        ></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 310, marginTop: 10}}>
                        <Icon
                            name='ios-log-out-outline'
                            type='ionicon'
                            color='black'
                            size={30}
                        ></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{position: 'absolute', top: 90}}
                >
                    <Image source={require('./wallhaven-367110.png')}
                           style={{width: 150, height: 150, borderRadius: 80, borderWidth: 2, borderColor: 'white'}}></Image>
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 25,
                        color: 'black',
                        textAlign: 'center',
                        marginBottom: 60,
                        marginTop: 70,
                        fontFamily: 'Montserrat-Bold'
                    }}
                > Đặng Tiến Quy</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 35,
        alignSelf: 'flex-start',
        textAlign: 'center',
        marginBottom: 60,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
    loginButton: {
        width: width - 100,
        height: 60,
        backgroundColor: '#21242C',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 10,
        borderRadius: 70,
        elevation: 5
    },
    loginText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 60,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
});
