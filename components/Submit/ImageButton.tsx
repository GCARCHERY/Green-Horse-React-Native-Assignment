import * as React from 'react';
import { ActivityIndicator, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { TabBarStyle } from '../../constants/Colors/DefaultStyle';
import { SKILL_CHALLANGE_COLLECT_BUTTON_BACKGROUND } from '../../assets/assets';

interface Props {
    navigation?: any,
    placeholder: string,
    onPress?: Function,
}

class ImageButton extends React.Component<Props> {
    state={
        loading: false
    }

    render() {
        return (
            <TouchableOpacity style={[styles.submit_button]} onPress={() => {
                if(this.props.onPress) {
                    this.props.onPress()
                }
            }}>
                <ImageBackground source={SKILL_CHALLANGE_COLLECT_BUTTON_BACKGROUND} style={styles.background}>
                    {   
                        !this.state.loading ? 
                            <Text style={{color: TabBarStyle.submitTextColor, fontSize: 15}}>
                                {this.props.placeholder}
                            </Text>
                        :
                            <ActivityIndicator color={TabBarStyle.submitTextColor}/>
                    }
                </ImageBackground>
            </TouchableOpacity>
          );
    }
}

export default ImageButton;

const styles = StyleSheet.create({
    submit_button: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
    },
    background: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.05,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
});