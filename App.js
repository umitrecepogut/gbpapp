import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import AuthContextProvider from './src/context/authContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Banko Maçlar',
    },
  }
);

export default function App() {
  return (
    <AuthContextProvider>{createAppContainer(navigator)}</AuthContextProvider>
  );
}
