
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#E7FFC8',
  },
  imgperfil: {
    marginTop:50
  },
  nomepet:{
    backgroundColor: colors.thirty,
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    marginBottom: 20,
    marginTop:20,
    borderWidth: 1,
    borderColor: colors.thirty,
    borderRadius: 8,
    width:'70%'

  },
  descricaopet:{
    backgroundColor: colors.thirty,
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    borderWidth: 1,
    borderColor: colors.thirty,
    borderRadius: 8,
    
  },

  })
export default styles