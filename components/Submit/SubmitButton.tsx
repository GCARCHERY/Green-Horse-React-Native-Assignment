import * as React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    navigation?: any,
    placeholder: string,
    onPress?: Function,
    loading?: boolean
}

class SubmitButton extends React.Component<Props> {
    state={
        loading: false
    }

    componentDidUpdate() {
        if(this.state.loading !== this.props.loading) {
            this.setState({loading: this.props.loading})
        }
    }

    render() {
        return (
            <TouchableOpacity style={[styles.submit_button, {backgroundColor: '#55c42d'}]} onPress={() => {
                if(this.props.onPress) {
                    this.props.onPress()
                }
            }}>
                {
                    !this.state.loading ? 
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>{this.props.placeholder}</Text>
                    :
                        <ActivityIndicator color={'white'}/>
                }
            </TouchableOpacity>
          );
    }
}

export default SubmitButton;

const styles = StyleSheet.create({
    submit_button: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
});