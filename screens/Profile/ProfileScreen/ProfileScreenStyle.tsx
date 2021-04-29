import { Dimensions, StyleSheet } from 'react-native'
import { TabBarStyle } from '../../../constants/Colors/DefaultStyle';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    profile_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user_avatar: {
      resizeMode: 'contain',
      height: Dimensions.get('window').width * 0.2,
      width: Dimensions.get('window').width * 0.2,
      marginLeft: 10
    },
    profile_details_container: {
        marginLeft: 10
    },
    level_background: {
      height: Dimensions.get('window').width * 0.1,
      width: Dimensions.get('window').width * 0.22,
      alignItems: 'center',
      justifyContent: 'center'
    },
    clan_background: {
      height: Dimensions.get('window').width * 0.1,
      width: Dimensions.get('window').width * 0.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    details_text: {
      color: 'white',
      fontWeight: 'bold',
      paddingLeft: 20,
      fontSize: 12
    },
    player_name_container: {
      height: Dimensions.get('window').width * 0.15,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center',
    },
    player_name_text: {
      color: 'white',
      fontWeight: 'bold',
      paddingLeft: 20,
      fontSize: 18
    },
    medal_container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    medal_background: {
      height: Dimensions.get('window').width * 0.4,
      width: Dimensions.get('window').width * 0.3,
      marginTop: Dimensions.get('window').width * 0.05
    },
    medal_counter: {
      width: Dimensions.get('window').width * 0.07,
      height: Dimensions.get('window').width * 0.07,
      marginTop: Dimensions.get('window').width * 0.3,
      marginLeft: Dimensions.get('window').width * 0.17,
      alignItems: 'center',
      justifyContent: 'center',
    },
    counter_text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12
    },
  });