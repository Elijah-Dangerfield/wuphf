import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MessageScreen from "../screens/MessageScreen";

const MainNavigator = createStackNavigator({
  Start: { screen: StartScreen, navigationOptions: { headerShown: false } },
  Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
  Register: {
    screen: RegisterScreen,
    navigationOptions: { headerShown: false }
  },
  Message: { screen: MessageScreen, navigationOptions: { headerShown: false } }
});

const App = createAppContainer(MainNavigator);

export default App;
