/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-elements/src/icons/Icon";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type Props = {};
export default class DanhSachDon extends Component<Props> {
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
                <Tab/>
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

