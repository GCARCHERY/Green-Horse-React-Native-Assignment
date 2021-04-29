import React from "react";
import { TouchableOpacity ,StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HEADER_BURGER_FOREGROUND, HEADER_NAVIGATION_ICON_ALERT } from "../../../assets/assets";
import NavigationDropdown from "./NavigationDropdown";
import { updateDropdownVisibility } from "../../../state/Actions/MenuActions";
import { View } from "../../../components/Themed";

export default function Menu() {

    const dispatch = useDispatch()
    const reduxData:any = useSelector(state => state) 

    return (
        <View style={styles.parent_container}>
                <TouchableOpacity 
                    style={styles.burgerBackground} 
                    onPress={
                        () => {
                            dispatch(updateDropdownVisibility(!reduxData.isDropdownVisible))
                        }
                    }
                >
                    <ImageBackground source={HEADER_BURGER_FOREGROUND} style={styles.burgerForeground} resizeMode='stretch'>
                        <Image source={HEADER_NAVIGATION_ICON_ALERT} style={styles.alert_badge}/>
                    </ImageBackground>
                </TouchableOpacity>
                <NavigationDropdown/>
        </View>
    );
}

const styles = StyleSheet.create ({
    burgerBackground: {
        height: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').height * 0.04,
        position: 'absolute',
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    burgerForeground: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
        marginLeft: -10
    },
    parent_container: {
        height: 46,
        width: 46,
        backgroundColor: 'transparent'
    },
    alert_badge: {
        resizeMode: 'contain',
        height: 20,
        width: 20,
        marginRight: -10,
        marginTop: -7,
        alignSelf: 'flex-end'
    } 
})