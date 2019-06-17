import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthCheck from "../screens/AuthCheck";
// import AuthStack from "../screens/Auth";
// import AppDrawer from "../screens/App";

const AppNavigator = createSwitchNavigator(
  {
    AuthCheck: AuthCheck
    // App: { screen: AppDrawer },
    // Auth: { screen: AuthStack }
  },
  {
    initialRouteName: "AuthCheck"
  }
);

export default createAppContainer(AppNavigator);
