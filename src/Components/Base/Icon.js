import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Metrics} from '../../Theme';
import {Icons} from '../../Assets'

let IconApp = ({
                   style,
                   name,
                   size,
                   color,
                   onPress,
                   disable,
                   outlineContainerWidth,
                   outlineContainerHeight
               }) => {
    return (
        <TouchableOpacity
            disabled={disable}
            activeOpacity={Metrics.opacity}
            onPress={onPress}
            style={[style, {
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                height: outlineContainerWidth,
                width: outlineContainerHeight
            }]}>
            <Icon
                style={styles.icon}
                name={name}
                size={size}
                color={color}/>
        </TouchableOpacity>
    );
};

let styles = StyleSheet.create({
    containers: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.icons.medium,
        width: Metrics.icons.medium
    },
    icon: {
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
});

IconApp.propTypes = {
    style: PropTypes.any,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    onPress: PropTypes.func,
    disable: PropTypes.bool,
    outlineContainerWidth: PropTypes.number,
    outlineContainerHeight: PropTypes.number,
};

IconApp.defaultProps = {
    name: Icons.error,
    size: Metrics.icons.medium,
    outlineContainerWidth: Metrics.icons.medium,
    outlineContainerHeight: Metrics.icons.medium,
    color: Colors.text,
    disable: false
};

export default IconApp;
