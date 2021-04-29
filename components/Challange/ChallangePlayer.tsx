import * as React from 'react';
import { Text } from '../../components/Themed';
import { ImageBackground, Dimensions, StyleSheet, View, Image, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Challanges } from '../../types';
import {  PLAYER_AVATAR, SKILL_NUMBER_BACKGROUND, SKILL_SECOND_UNOPENED_GIFT, SKILL_THIRD_UNOPENED_GIFT, SKILL_UNOPENED_GIFT} from '../../assets/assets';

function formatSkill(skill: number) {
    let out
    if(skill.toString().length > 3) {
        if(skill.toString().slice(0, skill.toString().length - 3).length > 1) {
            out = skill.toString().slice(0, skill.toString().length - 3)
            out = out.slice(0,out.length-1) + '.' +out.slice(out.length-1,out.length) + ' K'
        }else{
            out = skill.toString()
        }
    }else{
        return skill
    }
    return out
}

const mapStateProps = (state: any) => {
  return {
    userData: state.userData,
    challangeData: state.challangeData
  };
};

interface Props {
    userData?: any,
    challangeData: Challanges,
    userName: string,
    index: number,
    skill: number,
    userId: number
}

class ChallangePlayer extends React.Component<Props> {
  state = {
    /////////////////
    loading: true,
    /////////////////
    error: false,
    error_message: ''
    /////////////////
  }

  spinValue = new Animated.Value(0);
  springValue = new Animated.Value(1);

  collectSpin() {
    Animated.sequence([
        Animated.parallel([
            Animated.timing(
                this.springValue,
                {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 200
                }
            ),
        ])
    ]).start()
}

  render() {
    return (
        <View style={[styles.container, this.props.userId === this.props.userData.userId ? {backgroundColor: '#398cd3'} : undefined]}>
            <View style={styles.component_wrapper}>
                <Text style={styles.text}>{this.props.index}</Text>
                <Image source={PLAYER_AVATAR} style={styles.avatar}/>
            </View>
            <Text style={[styles.text, {width: Dimensions.get('window').width * 0.3}]}>{this.props.userName}</Text>
            <ImageBackground style={styles.skill_background} source={SKILL_NUMBER_BACKGROUND} resizeMode='stretch'>
                <Text style={styles.skill_text}>{formatSkill(this.props.skill?this.props.skill:0)}</Text>
            </ImageBackground>
            {
                this.props.index < 4 ?
                    <ImageBackground 
                        source = {
                            this.props.index === 1 ?
                                SKILL_UNOPENED_GIFT
                            :
                                this.props.index === 2 ?
                                    SKILL_SECOND_UNOPENED_GIFT
                                :
                                    SKILL_THIRD_UNOPENED_GIFT
                        } 
                        style={styles.unopened_gift}
                    />   
                :
                    <View style={styles.unopened_gift}/>
            }
        </View>
      );
  }
}

export default connect(mapStateProps)(ChallangePlayer);

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.8,
        resizeMode: 'cover',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    gift_wrapper: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: '#0f2943',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    avatar: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        resizeMode: 'cover',
    },
    skill_icon: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        resizeMode: 'cover',
    },
    component_wrapper: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    component_wrapper_skill_gift: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.35,
        alignItems: 'center'
    },
    skill_background: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.035,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    skill_text: {
        paddingLeft: Dimensions.get('window').width * 0.05,
        fontSize: 11,
        color: 'white',
        marginLeft: -10
    },
    text: {
        color: 'white'
    },
    unopened_gift: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.09,
        resizeMode: 'contain',
        marginRight: 2
    },
  });