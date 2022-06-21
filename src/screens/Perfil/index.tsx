import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./style";
import Button from "../../components/Button";
import { useAuth } from "../../hook/auth";
import { setDefaultResultOrder } from "dns";


export default function Perfil() {
  const { user } = useAuth();
  return (
      <View style={styles.container}>
        <Image source={require("../../assets/rebecca_1.png")} style={styles.imgperfil} />
        <Text>Rebecca Brasileiro</Text>
        <View style={styles.nomepet}>
          <Image source={require("../../assets/suzi.png")} />
          <Text>NOME DO PET: suzi</Text>
        </View>

        <View style={styles.descricaopet}>
          <Text>DESCRIÇÃO DO PET:</Text>
          <Text>Agitada,brincalhona,sempre gosta de petiscos,adora morder.</Text>
        </View>

        <View>
          <Button
            title="Alterar Senha"
            type="primary"
            onPress={() => console.log("Alterar Senha")}
          />
          <Button
            title="Sair"
            type="primary"
            onPress={() => console.log("Sair")}
          />
        </View>
      </View>


  );

}