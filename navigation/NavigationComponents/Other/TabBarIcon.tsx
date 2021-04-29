import { AntDesign as Icon } from "@expo/vector-icons";
import React from "react";

export default function TabBarIcon(props: { name: string; color: string, isNotTabBar?: boolean }) {
    return <Icon size={30} style={props.isNotTabBar ? undefined : { marginBottom: -3 }} {...props} />;
  }