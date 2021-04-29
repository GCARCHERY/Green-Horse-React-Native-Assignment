import {  useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Dimensions, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateAlertPage, updateDropdownVisibility } from "../../../state/Actions/MenuActions";
import { AlertPage } from "../../../types";
import NavigationItem from "./NavigationItem";

export default function NavigationDropdown() {
    const navigation = useNavigation()
    const reduxData:any = useSelector(state => state) 
    const dispatch = useDispatch()
    const closeNavigationDropdown = (page: AlertPage) => {
        dispatch(updateDropdownVisibility(false))
        dispatch(updateAlertPage(page))
    }

    return (
        <View>
            { 
                reduxData.isDropdownVisible ? 
                    <View style={[styles.container]}>
                        <NavigationItem 
                            placeholder='Profile'
                            navigation={navigation} 
                            screen='profile' 
                            onPress={() => closeNavigationDropdown('Challange')}
                            hasAlert={reduxData.alertPage === 'Profile'}
                         />
                        <View style={styles.separator}/>
                        <NavigationItem 
                            placeholder='Skill Challange' 
                            navigation={navigation} 
                            screen='challange' 
                            onPress={() => closeNavigationDropdown('Profile')}
                            hasAlert={reduxData.alertPage === 'Challange'}
                        />
                    </View>
                :
                    undefined
            }
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        width: Dimensions.get('window').width * 0.7,
        minHeight: 50,
        backgroundColor: '#e1e1e1',
        position: 'absolute',
        top: Platform.OS === 'ios' ?  46 : 41,
        left: -10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
        width: '100%',
        marginVertical: 20
    }
})