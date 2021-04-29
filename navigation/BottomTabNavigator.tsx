import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../types';


import NetInfo from "@react-native-community/netinfo";

///////////////// -- STACKS -- /////////////////
import ProfileNavigator from './NavigationStacks/ProfileStack';
import HomeNavigator from './NavigationStacks/HomeStack';
/////////////// -- END-STACKS -- ///////////////

import { connect } from 'react-redux';
import { updateConnectionStatus } from '../state/Actions/ConnectionActions';

const mapStateProps = (state: any) => {
  return {
    isConnected: state.isConnected,
    userData: state.userData
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateConnectionStatus: (data: boolean) => {
      dispatch(updateConnectionStatus(data))
    },
  };
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

interface Props {
  isConnected: boolean,
  updateConnectionStatus: Function,
  userData: any
}

class BottomTabNavigator extends React.Component<Props> {

  componentDidMount() {
    const subscribe = NetInfo.addEventListener(state => {
      if(this.props.isConnected !== state.isConnected) {
        this.props.updateConnectionStatus(state.isConnected)
      }
    });
  }

  render() {
    return (
      <BottomTab.Navigator
        initialRouteName={'Profile'}
        >
        <BottomTab.Screen
          name="Challange"
          component={HomeNavigator}
          options={{
            tabBarVisible: false
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarVisible: false
          }}
        />
      </BottomTab.Navigator>
    );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(BottomTabNavigator);

