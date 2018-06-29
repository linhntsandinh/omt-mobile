import React, {Component} from 'react';
import {Header, Icon, View} from '../../Components'
import {BaseStyles} from '../../Theme'
import {Icons} from '../../Assets'

export default class Camera extends Component {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <Header
                    title={routeName}
                >
                    <Icon
                        name={Icons.back_right}
                        onPress={() => this.props.navigation.navigate('Home')} />
                </Header>
            </View>
        );
    }
}
