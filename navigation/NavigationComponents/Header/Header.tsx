import { StackNavigationOptions } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import { Dimensions, Image, Platform, StyleSheet } from "react-native"
import { HEADER_BACKGROUND } from "../../../assets/assets";
import { TabBarStyle } from "../../../constants/Colors/DefaultStyle";
import Menu from "./Menu";
import Currencies from "./Currencies";

const header_styles = StyleSheet.create({
    headerRight: {
      width: Dimensions.get('window').width * 0.5,
      alignItems: 'flex-end',
    },
    headerLeft: {
        width: 66,
        height: Platform.OS === 'ios' ? 46 : 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 2,
        borderColor: 'black',
    },
    header: {
      borderBottomWidth: 2,
      height: 66,
    },
    image: {
        height: 66,
        width: Dimensions.get('window').width,
    }
})

export const HeaderConfig:StackNavigationOptions = {
    headerTintColor: TabBarStyle.activeTint,
    headerBackground: (props) => (
            <Image
                style={header_styles.image}
                height={66}
                source={HEADER_BACKGROUND}
                resizeMode='cover'
            />
        ),
    headerLeft: () => <Menu/>,
    headerRight: () => <Currencies/>,
    headerRightContainerStyle: header_styles.headerRight,
    headerStyle: header_styles.header,
    headerLeftContainerStyle: header_styles.headerLeft
}





