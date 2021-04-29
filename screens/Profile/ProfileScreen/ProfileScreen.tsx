import * as React from 'react';
import { styles } from './ProfileScreenStyle';
import { Text } from '../../../components/Themed';
import { ImageBackground, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { UserData, UserMedals } from '../../../types';
import { CHALLANGE_MEDAL_BACKGROUND, CLAN_BACKGROUND, LEVEL_BACKGROUND, MEDAL_COUNTER_BACKGROUND, PLAYER_AVATAR_LARGE, PLAYER_NAME_BACKGROUND, SCREEN_BACKGROUND, SKILL_CHALLANGE_BACKGROUND, SKILL_MEDAL_BACKGROUND } from '../../../assets/assets';
import { fetchInitialData } from '../../../hooks/useExternalRequest';
import { StatusBar } from 'expo-status-bar';

function findMedals(medals: Array<UserMedals>, medal: 'skill' | 'player') {
  let amount = '0'
  medals.map((element) => {
    if(element.type === medal) {
      amount = element.amount 
    }
  })
  return amount
}

let placeholderArray = [{
  "amount": "",
  "type": "",
}]

const mapStateProps = (state: any) => {
  return {
    userData: state.userData
  };
};

interface Props {
    route: any,
    userData: UserData
}

class ProfileScreen extends React.Component<Props> {
  state = {
    /////////////////
    loading: true,
    /////////////////
    error: false,
    error_message: ''
    /////////////////
  }

  async componentDidMount() {
    await fetchInitialData()
  }

  render() {
    return (
          <ImageBackground style={styles.container} source={SCREEN_BACKGROUND}>
              <StatusBar style='light'/>
              <ImageBackground source={PLAYER_NAME_BACKGROUND} style={styles.player_name_container} resizeMode='contain'>
                  <Text style={styles.player_name_text}>{this.props.userData?.userName}</Text>
              </ImageBackground>
              <View style={styles.profile_container}>
                <Image source={PLAYER_AVATAR_LARGE} style={styles.user_avatar}/>
                <View style={styles.profile_details_container}>
                  <ImageBackground source={LEVEL_BACKGROUND} style={styles.level_background} resizeMode='contain'>
                      <Text style={styles.details_text}>{this.props.userData?.level}</Text>
                  </ImageBackground>
                  <ImageBackground source={CLAN_BACKGROUND} style={styles.clan_background} resizeMode='contain'>
                      <Text style={styles.details_text}>{this.props.userData?.clubName}</Text>
                  </ImageBackground>
                </View>
              </View>
              <View style={styles.medal_container}>
                  <ImageBackground source={SKILL_MEDAL_BACKGROUND} style={styles.medal_background} resizeMode='contain'>
                    <ImageBackground source={MEDAL_COUNTER_BACKGROUND} style={styles.medal_counter} resizeMode='contain'>
                      <Text style={styles.counter_text}>
                        {
                          findMedals(
                            this.props.userData ? 
                              this.props.userData.medals 
                            : 
                              placeholderArray, 
                          'skill')
                        }
                      </Text>
                    </ImageBackground>
                  </ImageBackground>
                  <ImageBackground source={CHALLANGE_MEDAL_BACKGROUND} style={styles.medal_background} resizeMode='contain'>
                    <ImageBackground source={MEDAL_COUNTER_BACKGROUND} style={styles.medal_counter} resizeMode='contain'>
                      <Text style={styles.counter_text}>
                        {
                          findMedals(
                            this.props.userData ? 
                              this.props.userData.medals 
                            : 
                              placeholderArray, 
                          'player')
                        }
                      </Text>
                    </ImageBackground>
                  </ImageBackground>
              </View>
          </ImageBackground>
      );
  }
}

export default connect(mapStateProps)(ProfileScreen);