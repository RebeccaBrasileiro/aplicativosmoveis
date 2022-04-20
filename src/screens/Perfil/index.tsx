import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./style";

export default function Perfil() {
  return (
    <View style={styles.container}>
      
        <Image source={require("../../assets/rebecca_1.png")} />
        <Text>Rebecca Brasileiro</Text>
    </View>
  );
}