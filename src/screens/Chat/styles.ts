import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: '#E7FFC8'
  },
  imagem:{
    backgroundColor: colors.thirty,
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    marginBottom: 20,
    marginTop:20,
    borderWidth: 1,
    borderColor: colors.thirty,
    borderRadius: 8,
    width:'90%',
  },
  rowSearch: {
    flexDirection: "row",
    backgroundColor: "#CFD8DC",
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "80%",
    height: 45
  },
  icon: {
    fontSize: 24,
    padding: 5,
  }
});

export default styles