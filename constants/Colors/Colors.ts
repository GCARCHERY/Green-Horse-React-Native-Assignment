import { ContainerColorStyle, Tints, TextColorStyle } from '../Colors/DefaultStyle';

export default {
  light: {
    text: TextColorStyle.lightModeColor,
    background: ContainerColorStyle.lightModeBackgroundColor,
    tint: Tints.tintColorLight,
  },
  dark: {
    text: TextColorStyle.darkModeColor,
    background: ContainerColorStyle.darkModeBackgroundColor,
    tint: Tints.tintColorDark,
  },
};
