import React, {Component} from 'react';
import {View} from '../../Components'
import {BaseStyles} from '../../Theme'

export default class EventView extends Component {
    constructor(props){
        super(props)
        this.a =null
    }
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
            </View>
        );
    }
}
