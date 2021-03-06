import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {Colors, Fonts, Metrics} from '../../Theme';
import {Icon, Text} from '../';

import Icons from "../../Assets/Icons";

export default class InputText extends Component {

    static propTypes = {
        color: PropTypes.string,
        italic: PropTypes.bool,
        bold: PropTypes.bool,
        upperCase: PropTypes.bool,
        defaultValue: PropTypes.string,
        hint: PropTypes.string,
        hintColor: PropTypes.string,
        maxLength: PropTypes.number,
        style: PropTypes.any,
        autoFocus: PropTypes.any,
        hintTop: PropTypes.any,
        styleConstant: PropTypes.any,
        hideBottom: PropTypes.bool,
        iconRemove: PropTypes.bool,
        onFocus: PropTypes.func,
        onUnFocus: PropTypes.func,
        onChangeText: PropTypes.func
    };

    static defaultProps = {
        color: Colors.text,
        italic: false,
        bold: false,
        UpperCase: false,
        multiline: false,
        iconRemove: false,
        hideBottom: true,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || '',
            error: undefined,
            height: 20
        };
    }

    _renderHint = () => {
        let { hint, maxLength } = this.props;
        let { value } = this.state;
        return value.length > 0
            ? <View style={styles.containersHint}>
                <Text
                    text={hint}
                    color={Colors.access}
                    fontSize={Fonts.size.small}
                />
                {maxLength
                    ? <Text
                        color={Colors.access}
                        fontSize={Fonts.size.small}
                        text={`${value.length}/${maxLength}`} />
                    : null}
            </View>
            : null;
    };

    _renderRemoveAll = () => {
        let { value } = this.state;
        let { iconRemove } = this.props;
        return value.length && iconRemove > 0
            ? <View
                style={[
                    styles.removeAll,
                    { top: this.props.hintTop ? Fonts.size.small + Metrics.padVer : 0 }
                ]}
            >
                <Icon
                    onPress={() => this._handRemoveAllText()}
                    name={Icons.close}
                />
            </View>
            : null;
    };

    _renderError = () => {
        let { error } = this.state;
        return error
            ? <Text
                size={Fonts.size.small}
                color={Colors.error}
                text={error} />
            : null;
    };

    render() {
        const {
            color,
            bold,
            italic,
            upperCase,
            hint,
            multiline,
            style,
            autoFocus,
            hintColor,
            hintTop,
            styleConstant,
            maxLength,
            hideBottom
        } = this.props;

        const { value, height } = this.state;

        return (
            <View
                style={[styles.containers, hideBottom ? null : styles.borderBottom, styleConstant,]}
            >
                {hintTop ? this._renderHint() : null}
                <TextInput
                    ref={'_input'}
                    inlineImagePadding={0}
                    maxLength={maxLength}
                    autoFocus={autoFocus}
                    placeholder={hint}
                    placeholderTextColor={hintColor}
                    blurOnSubmit={true}
                    multiline={multiline}
                    underlineColorAndroid="transparent"
                    onChangeText={this._onChangeText}
                    value={upperCase ? value.toUpperCase() : value}
                    onFocus={this._onFocus}
                    style={{
                        color: color,
                        fontWeight: bold ? 'bold' : undefined,
                        fontStyle: italic ? 'italic' : undefined,
                        fontSize: Fonts.size.regular,
                        ...style,
                        height: height
                    }}
                    onContentSizeChange={this._onContentSizeChange}
                    onEndEditing={this._onEndEditing}
                />
                {this._renderError()}
                {this._renderRemoveAll()}
            </View>
        );
    }

    _onFocus = () => {
        this.setState({ error: undefined });
        this.props.onFocus && this.props.onFocus();
    };
    _onEndEditing = () => {
        this.props.onUnFocus && this.props.onUnFocus();
    };

    _handRemoveAllText = () => {
        this.setState({ value: '' });
        this.props.onChangeText && this.props.onChangeText('');
    };

    _onContentSizeChange = (event) => {
        let height = event.nativeEvent.contentSize.height;
        let { onContentSizeChange } = this.props;
        if (Platform.OS === 'android') { this.setState({ height }); }
        onContentSizeChange && onContentSizeChange(event);
    };

    _onChangeText = (text) => {
        this.setState({ value: text });
        this.props.onChangeText && this.props.onChangeText(text);
    };
    /**
     * {string} @return 'curent text '
     */
    focus = () => {
        this.refs._input.focus();
    }

    text = () => {
        return this.state.value;
    };

    removeText = () => {
        this._handRemoveAllText();
    }

    showError = (error) => {
        this.setState({ error: error });
    }
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        paddingHorizontal: Metrics.padHor,
        paddingVertical: Metrics.padVer,
        justifyContent: 'center'
    },
    borderBottom: {
        borderBottomColor: Colors.border,
        borderBottomWidth: Metrics.border
    },
    containersHint: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    removeAll: {
        position: 'absolute',
        right: Metrics.padHor,
        bottom: 0,
        justifyContent: 'center'
    }
});
