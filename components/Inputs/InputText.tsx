import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TextInput, View } from '../Themed';
import { ContainerColorStyle, TextInputColorStyle } from '../../constants/Colors/DefaultStyle';

interface Props {
    navigation?: any,
    placeholder?: string,
    secureTextEntry?: boolean
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined,
    onChangeText?: Function,
    value?: string,
    visible?: boolean,
    editable?: boolean
}

class InputText extends React.Component<Props> {
    render() {
        return (
            <View>
                {   
                    this.props.visible !== false ?
                        <TextInput
                            secureTextEntry={this.props.secureTextEntry?true:false}
                            keyboardType={this.props.keyboardType}
                            style={[styles.text_input, {borderColor: TextInputColorStyle.textInputBorderColor, color: TextInputColorStyle.placeholderColor}]}
                            placeholder={this.props.placeholder}
                            placeholderTextColor={TextInputColorStyle.placeholderColor}
                            lightColor={ContainerColorStyle.lightModeBackgroundColor}
                            darkColor={ContainerColorStyle.darkModeBackgroundColor}
                            editable={this.props.editable === false ? this.props.editable : true}
                            onChangeText={(value) => {
                                if(this.props.onChangeText) {
                                    this.props.onChangeText(value)
                                }
                            }}
                            value={this.props.value}
                        />
                    :
                        null
                }
            </View>
          );
    }
}

export default InputText;

const styles = StyleSheet.create({
    text_input: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        paddingLeft: 10,
        fontWeight: 'bold',

    },
});