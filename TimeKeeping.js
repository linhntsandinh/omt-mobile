/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet, TextInput, TouchableOpacity,
    View, Text, Dimensions, Image, FlatList
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from "react-native-elements/src/icons/Icon";
type Props = {};
export default class TimeKeeping extends Component<Props> {
    static navigationOptions = ({
        header: null,
    });
    state = {
        text: '',
        show: true,
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={{width: width, height: 50, backgroundColor: 'white', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#888889'}}>
                    {this.state.show === true ?
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>
                            <TouchableOpacity
                                onPress={() => this.setState(()=>{return {show: false}})}
                                style={{margin: 10}}
                            >
                                <Icon
                                    name='md-search'
                                    color='#888889'
                                    type='ionicon'
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, alignItems:'center'}}>
                            <TextInput
                                style={{color: '#888889', fontSize: 15, fontWeight:'bold', flex: 1 }}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                                placeholder="Search"
                                placeholderTextColor='#888889'
                                underlineColorAndroid="transparent"
                                autoFocus={true}
                                selectionColor={'#888889'}
                            />
                            <TouchableOpacity
                                onPress={() => this.setState(()=>{return {text: '',show: true}})}
                            >
                                <Icon
                                    name='md-close'
                                    color='#888889'
                                    type='ionicon'
                                />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <TouchableOpacity style={{width: width, height: 200, backgroundColor: 'white'}}>
                    <View style={{margin: 20, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image source={require('./wallhaven-367110.png')} style={{width: 100, height: 100, borderRadius: 70}}/>
                        </TouchableOpacity>
                        <Text style={styles.text}
                        >
                            Thông tin chấm công
                        </Text>
                    </View>
                    <TouchableOpacity style={{width: width,height: 60,  backgroundColor: '#059876'}}>
                        <Text style={styles.text}
                        >
                            Check In
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <FlatList
                    data={[{key: 'a'}]}
                    renderItem={({item}) =>
                        <View style={{margin: 20, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Image source={require('./wallhaven-367110.png')} style={{width: 70, height: 70, borderRadius: 50}}/>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 17,
                                textAlign: 'center',
                                color: '#3D5494',
                                marginTop: 10,
                                fontFamily: 'Montserrat-Bold',
                                marginLeft: 15
                            }}
                            >
                                Thông tin chấm công
                            </Text>
                        </View>
                    }
                />
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
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#3D5494',
        marginTop: 10,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 15
    }
});


