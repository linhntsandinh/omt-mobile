import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from '../../Components';

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            if (this.props.isLoggedIn){
                this.props.navigation.navigate('TabMain');
            } else {
                this.props.navigation.navigate('Login');
            }
        }, 1000);
    }
    render() {
        return (
            <View
                style={styles.containers}
            >
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../Assets/Image/ohze2.png')} style={{width: 400, height: 200}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containers: {
        flex: 1
    }
});
