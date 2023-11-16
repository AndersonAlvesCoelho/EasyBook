// IMPORTS
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// SERVICES
import { RootStackParamList } from './RootStackParamList';

// COMPONENTS
import HomeScreen from '../screen/home';
import OnboardScreen from '../screen/onboard';
import AboutBookScreen from '../screen/aboutBook';

export default function RouteNavigation() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen name="Onboard" component={OnboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutBook" component={AboutBookScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
