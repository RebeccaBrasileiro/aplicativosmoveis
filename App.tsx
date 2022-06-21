import "react-native-gesture-handler";
import Login from "./src/screens/Login";
import Navigation from "./src/navigations";
import {AuthProvider} from "./src/hook/auth"

export default function App(){
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}