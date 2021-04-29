import * as React from 'react';
import { Text } from '../../components/Themed';
import { ImageBackground, Dimensions, StyleSheet, View, Image, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { Challanges, UserData } from '../../types';
import {  GOLD_CURRENCY_ICON, OPENED_GIFT, OPENED_GIFT_BACKGROUND, SKILL_CHALLANGE_BACKGROUND, SKILL_UNOPENED_GIFT } from '../../assets/assets';
import ImageButton from '../Submit/ImageButton';
import ChallangePlayer from './ChallangePlayer';
import Modal from 'react-native-modal';
import SubmitButton from '../Submit/SubmitButton';
import { collectReward } from '../../hooks/useExternalRequest';
import { updateRewardVisibility } from '../../state/Actions/GameActions';

const mapStateProps = (state: any) => {
  return {
    userData: state.userData,
    challangeData: state.challangeData,
    isRewardVisible: state.isRewardVisible
  };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateRewardVisibility: (data: boolean) => {
        dispatch(updateRewardVisibility(data))
      },
    };
  };

interface Props {
    route?: any,
    userData?: UserData,
    challangeData: Challanges,
    updateRewardVisibility: Function,
    isRewardVisible: boolean
}

class Challange extends React.Component<Props> {
    state = {
        /////////////////
        loading: true,
        /////////////////
        error: false,
        error_message: '',
        /////////////////
        expanded: false
    }

    giftSpinValue = new Animated.Value(0);
    giftSpringValue = new Animated.Value(1);

    playerListOpacityValue = new Animated.Value(0);
    playerListOffsetValue = new Animated.Value(0);

    displayPlayers() {
        return this.props.challangeData?.challengeGroup.map((player, key) => {
                return  <ChallangePlayer 
                            key={key} 
                            index={key+1}
                            userId={player.userId}
                            userName={player.userName}
                            skill={player.skill}
                        />
        })
    }


    collectReward = async() => {
            this.collectSpin()
            setTimeout(async() => { 
                this.setState({loading: true})
                if(await collectReward() === 'success') {
                    this.props.updateRewardVisibility(false)
                }
                this.setState({loading: false, expanded: false})
            }, 500);
            
    }

    /////////////// -- ANIMATIONS -- ///////////////

    initialSpin() {
        this.giftSpinValue.setValue(0)
        Animated.sequence([
            Animated.timing(
                this.giftSpinValue,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ),
            Animated.spring(
                this.giftSpringValue,
                {
                    toValue: 1.2,
                    useNativeDriver: true,
                    velocity: 10
                }
            ),
        ]).start()
    }

    collectSpin() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.giftSpringValue,
                    {
                        toValue: 1,
                        useNativeDriver: true,
                        duration: 200
                    }
                ),
            ])
        ]).start()
    }

    loadPlayers() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.playerListOffsetValue,
                    {
                        toValue: 1,
                        useNativeDriver: true,
                        duration: 500
                    }
                ),
                Animated.timing(
                    this.playerListOpacityValue,
                    {
                        toValue: 1,
                        useNativeDriver: true,
                        duration: 500,
                        easing: Easing.sin
                    }
                )
            ])
        ]).start()
    }

    /////////////// -- END-ANIMATIONS -- ///////////////

    componentDidMount() {
        this.loadPlayers()
    }

render() {

    /////////////// -- INTERPOLATE -- ///////////////

    const giftSpin = this.giftSpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const giftSpring = this.giftSpringValue.interpolate({
        inputRange: [1, 1.2],
        outputRange: [1, 1.2]
    })

    const playerListOffset = this.playerListOffsetValue.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0]
    })

    const playerListOpacity = this.playerListOpacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    /////////////// -- END-INTERPOLATE -- ///////////////

    return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={SKILL_CHALLANGE_BACKGROUND} resizeMode="stretch">
                { 
                    this.props.isRewardVisible ? 
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.challange_ended}>Challange Ended</Text>
                            <View style={styles.gift_wrapper}>
                                <Image source={SKILL_UNOPENED_GIFT} style={styles.unopened_gift}/>
                                <ImageButton placeholder="COLLECT" onPress={() => {
                                    this.setState({expanded: true})
                                    this.initialSpin()
                                }}
                            />
                            </View>
                        </View>
                    :
                        undefined
                }     
                </ImageBackground>
                <Animated.View style={[styles.players_container, {opacity: playerListOpacity, transform: [{translateY: playerListOffset}]}]}>
                    {
                        this.props.challangeData ? 
                            this.displayPlayers() 
                        : 
                            <Text style={styles.challange_ended}>Something went wrong...</Text>
                    }
                </Animated.View>
                <Modal isVisible={this.state.expanded}>
                    <View style={styles.modal_container}>
                        <ImageBackground style={styles.background_opened} source={OPENED_GIFT_BACKGROUND}>
                            <Animated.View style={[styles.opened_gift, {transform: [{rotate: giftSpin}, {scale: giftSpring}]}]}>
                                <ImageBackground style={{width: '100%', height: '100%'}} source={OPENED_GIFT}/>
                            </Animated.View>
                            <Text style={styles.opened_gift_reward_text}>Rewards:</Text>
                            <View style={styles.opened_gift_reward_wrapper}>
                                <Text style={styles.gold_text}>+{this.props.challangeData?.uncollectedReward?.reward}</Text>
                                <Image source={GOLD_CURRENCY_ICON} style={styles.gold_icon}/>
                            </View>
                            <SubmitButton loading={this.state.loading} placeholder='COLLECT' onPress={this.collectReward}/>
                        </ImageBackground>
                    </View>
                </Modal>
            </View>
      );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Challange);

export const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 0.9,
      alignItems: 'center',
      backgroundColor: '#16528e',
      borderRadius: 10,
      marginVertical: 20
    },
    background: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.22,
        alignItems: 'center',
        resizeMode: 'cover',
        borderRadius: 10
    },
    background_opened: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.85,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    opened_gift: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.3,
        resizeMode: 'contain',
        marginTop: Dimensions.get('window').width * 0.15
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
    unopened_gift: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        resizeMode: 'cover',
    },
    players_container: {
        minHeight: Dimensions.get('window').height * 0.3,
        borderRadius: 10,
        backgroundColor: '#0f3a66',
        marginBottom: 20
    },
    challange_ended: {
        marginTop: Dimensions.get('window').height * 0.07,
        color: 'white'
    },
    modal_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    opened_gift_reward_text: {
        color: 'white'
    },
    opened_gift_reward_wrapper: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: '#575759',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    gold_text: {
        color: '#55c42d',
        fontWeight: 'bold',
        marginRight: 2
    },
    gold_icon: {
        resizeMode: 'contain',
        height: 20,
        width: 20,
    }
  });