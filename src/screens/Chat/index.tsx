import React from "react";
import{SafeAreaView,View} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";


export default function Chat(){
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.rowSearch}>
          <FontAwesome5 name="search" style={styles.icon} />
          <TextInput placeholder="Pesquisar chat" />
        </View>
      </SafeAreaView>
    );
}