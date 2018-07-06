import React, {Component} from 'react';
import {Icon, View} from '../../Components'
import {Dimensions} from "react-native";
import {BaseStyles} from "../../Theme";
import Icons from "../../Assets/Icons";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class EditMail extends Component {
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <Icon
                    name={Icons.back}
                    color='black'
                    size={30}
                />
            </View>
        );
    }
}
