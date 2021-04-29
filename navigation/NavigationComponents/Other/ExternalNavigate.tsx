import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabBarStyle } from '../../../constants/Colors/DefaultStyle';

interface Props {
    screen?: string,
    title?: string
}

export default function RightButtonNavigation({screen, title}: Props) {
  const navigation = useNavigation();

  return (
    <Button
      title={title?title:'Right'}
      onPress={() => {
        navigation.navigate(screen?screen:'');
      }}
      color={TabBarStyle.activeTint}
    />
  );
}