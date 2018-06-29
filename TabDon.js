import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

class Waiting extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Waiting</Text>
            </View>
        );
    }
}

class Success extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Success!</Text>
            </View>
        );
    }
}
class Fail extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Fail!</Text>
            </View>
        );
    }
}
const Tab = createMaterialTopTabNavigator({
    Waiting: Waiting,
    Success: Success,
    Fail: Fail
});
