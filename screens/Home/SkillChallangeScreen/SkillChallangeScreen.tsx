import * as React from 'react';
import { styles } from './SkillChallangeScreenStyle';
import { ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { UserData } from '../../../types';
import { SCREEN_BACKGROUND } from '../../../assets/assets';
import Challange from '../../../components/Challange/Challange';
import { StatusBar } from 'expo-status-bar';

const mapStateProps = (state: any) => {
  return {
    userData: state.userData
  };
};

interface Props {
    route: any,
    userData: UserData
}

class SkillChallangeScreen extends React.Component<Props> {
  state = {
    /////////////////
    loading: true,
    /////////////////
    error: false,
    error_message: ''
    /////////////////
  }

  render() {
    return (
        <ImageBackground style={styles.container} source={SCREEN_BACKGROUND}>
            <StatusBar style='light'/>
            <ScrollView contentContainerStyle={styles.scroll_view_align} showsVerticalScrollIndicator={false}>
              <Challange/>
            </ScrollView>
        </ImageBackground>
      );
  }
}

export default connect(mapStateProps)(SkillChallangeScreen);