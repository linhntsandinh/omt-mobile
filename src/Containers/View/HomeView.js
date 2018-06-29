import {Icon, View} from '../../Components'
import {BaseStyles} from '../../Theme'
import React, {Component} from 'react';
import {Dimensions, FlatList, Image, Keyboard, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icons} from "../../Assets";
import Header from "../../Components/Header";
import InputText from "../../Components/Base/InputText";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputSearch = null;
        this.state = {
            isSearch: false,
            textSearch: ''
        };
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus();
        } else {
            Keyboard.dismiss();
        }
        this.props.putNotify("aasdas")
    }
    _renderHeader = () => {
        const { isSearch } = this.state;
        return (
            <Header
                left={[
                    <Icon
                        style={{marginTop: 10}}
                        key={'icon'}
                        name={isSearch ? Icons.back : Icons.search}
                        onPress={() => this.setState({ isSearch: !isSearch })} />,
                    <InputText
                        onChangeText={text => this.setState({ textSearch: text })}
                        onFocus={() => this.setState({ isSearch: true })}
                        hint="Search"
                        key={'haha'}
                        ref={(com) => { this._inputSearch = com; }} />
                ]}
            />
        );
    };
    render() {
        return (

                    <View style={BaseStyles.screen.mainContainer}>
                        {this._renderHeader()}
                        <TouchableOpacity style={{width: width, height: 200, backgroundColor: 'white'}}>
                            <View style={{margin: 20, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Image source={require('../../Assets/Image/wallhaven-367110.png')} style={{width: 100, height: 100, borderRadius: 70}}/>
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
                                        <Image source={require('../../Assets/Image/wallhaven-367110.png')} style={{width: 70, height: 70, borderRadius: 50}}/>
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
