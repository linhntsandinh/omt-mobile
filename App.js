/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
type Props = {};
import Navigator from './Navigation'
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Navigator></Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

