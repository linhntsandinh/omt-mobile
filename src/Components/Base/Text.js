import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Colors} from '../../Theme';

let TextApp = ({
    text,
    bold,
    italic,
    style,
    disable,
    color,
    fontSize,
    align,
    ellipsizeMode,
    numberOfLines,
    children,
    onPress,
    under
}) => {
    return <Text
        onPress={onPress}
        ellipsizeMode={ellipsizeMode}
        numberOfLines={numberOfLines}
        style={[style, {
            textAlign: align,
            color: disable ? Colors.disable : color,
            fontSize,
            fontWeight: bold ? 'bold' : undefined,
            fontStyle: italic ? 'italic' : undefined,
            textDecorationLine: under ? 'underline' : 'none'
        }]}
    >
        {text}
        {children}
    </Text>;
};

TextApp.propTypes = {
    style: PropTypes.any,
    text: PropTypes.string,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    disable: PropTypes.bool,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    align: PropTypes.string,
    ellipsizeMode: PropTypes.string,
    numberOfLines: PropTypes.number,
    children: PropTypes.any,
    onPress: PropTypes.func,
    under: PropTypes.bool
};

TextApp.defaultProps = {
    color: Colors.text,
    numberOfLines: undefined,
    align: 'left'
};

export default TextApp;
