import React, {Component} from 'react';
import {Icon, View} from '../../Components'
import {Dimensions, Image, ImageBackground, TouchableOpacity} from "react-native";
import Text from "../../Components/Base/Text";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class ProfileView extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >

                <TouchableOpacity style={{
                    width: width,
                    height: '25%',
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                    <ImageBackground source={require('../../Assets/Image/wallhaven-367110.png')}
                                     style={{width: '100%', height: '100%'}}/>
                    <Icon
                        style={{position: 'absolute',left: 20, top: 10}}
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
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={{position: 'absolute', top: -75}}
                    >
                        <Image source={require('../../Assets/Image/wallhaven-367110.png')}
                               style={{width: 150, height: 150, borderRadius: 80, borderWidth: 2, borderColor: 'white'}}/>
                    </TouchableOpacity>
                    <Text
                        style={{
                            margin: 85
                        }}
                    > Đặng Tiến Quy</Text>
                </View>
            </View>
        );
    }
}
