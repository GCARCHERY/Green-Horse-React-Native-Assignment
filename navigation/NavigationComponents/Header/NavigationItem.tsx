import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HEADER_NAVIGATION_ICON_ALERT, HEADER_NAVIGATION_ICON_CHALLANGE, HEADER_NAVIGATION_ICON_PROFILE } from '../../../assets/assets';

interface Props {
    navigation?: any,
    placeholder: string,
    screen: 'challange' | 'profile',
    onPress?: Function,
    hasAlert?: boolean
}

class NavigationItem extends React.Component<Props> {
    state={}
    
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                if(this.props.screen === 'challange') {
                    this.props.navigation.navigate('Challange', {screen: 'SkillChallangeScreen'})
                }else{
                    this.props.navigation.navigate('Profile', {screen: 'ProfileScreen'})
                }
                if(this.props.onPress) {
                    this.props.onPress()
                }
            }}>
                <View style={styles.wrapper}>
                    <Image source={this.props.screen === 'challange' ? HEADER_NAVIGATION_ICON_CHALLANGE : HEADER_NAVIGATION_ICON_PROFILE} style={styles.nav_image}/>
                    <Text style={styles.text}>{this.props.placeholder}</Text>
                </View>
                {
                    this.props.hasAlert ? 
                        <Image source={HEADER_NAVIGATION_ICON_ALERT} style={styles.alert_badge}/>
                    :
                        undefined
                }
            </TouchableOpacity>
          );
    }
}

export default NavigationItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.7 - 40
    },
    wrapper: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 18
    },
    nav_image: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
        marginRight: 15
    },
    alert_badge: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
        marginRight: 15,
        alignSelf: 'flex-end'
    }   
});