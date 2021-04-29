import { Dimensions, StyleSheet } from 'react-native'
import { TabBarStyle } from '../../../constants/Colors/DefaultStyle';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    scroll_view_align: {
        alignItems: 'center',
    },
    subtitle_container: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    activity_indicator: {
        marginTop: '50%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: TabBarStyle.activeTint,
        textAlign: 'center'
      },
      author: {
        marginBottom: 3,
        textAlign: 'center'
      },
      description: {
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        maxWidth: Dimensions.get('window').width * 0.8,
      },
      text_wrapper: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        paddingBottom: '10%'
      },
      image: {
          width: Dimensions.get('window').width * 0.4,
          height: Dimensions.get('window').height * 0.4,
          resizeMode: 'contain'
      },
      separator: {
          height: 2,
          width: Dimensions.get('window').width * 0.8,
          backgroundColor: TabBarStyle.activeTint,
          marginVertical: 20
      },
      page_number: {
        color: TabBarStyle.activeTint,
        marginBottom: 3,
        textAlign: 'center'
      }
  });