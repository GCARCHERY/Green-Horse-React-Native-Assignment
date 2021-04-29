import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Animated, Easing } from "react-native";
import { GOLD_CURRENCY_ICON, SHIELD_CURRENCY_ICON } from "../../../assets/assets";
import { useSelector } from 'react-redux'

export default function Currencies() {
    const reduxData:any = useSelector(state => state)
    const [goldChanged, updateGoldChanged] = useState(reduxData.goldCounter)
    const springOnUpdate = new Animated.Value(1)
    
    if(goldChanged !== reduxData.goldCounter) {
            Animated.sequence([
                 Animated.timing(
                    springOnUpdate,
                    {
                      toValue: 1.2,
                      useNativeDriver: true,
                      duration: 100,
                      easing: Easing.sin
                    }
                  ),
                  Animated.timing(
                    springOnUpdate,
                    {
                      toValue: 1,
                      useNativeDriver: true,
                      duration: 100,
                      easing: Easing.sin
                    }
                  )
            ]).start();
            
            setTimeout(() => {
                updateGoldChanged(reduxData.goldCounter)
            }, 250)
    }

    return (
            <View style={styles.wrapperContainer}>
                <View style={styles.container}> 
                    <Image source={SHIELD_CURRENCY_ICON} style={styles.shieldCurrencyIcon}/>
                    <Text style={styles.currencyText}>{reduxData.shieldCounter}</Text>
                </View>
                <Animated.View style={[styles.container, {transform: [{scale: springOnUpdate}]}]}>
                    <Image source={GOLD_CURRENCY_ICON} style={styles.goldCurrencyIcon}/>
                    <Text style={styles.currencyText}>{reduxData.goldCounter}</Text>
                </Animated.View>
            </View>
    );
}

const styles = StyleSheet.create ({
    wrapperContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    shieldCurrencyIcon: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
    },
    goldCurrencyIcon: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
    },
    currencyText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 5
    }
})

