import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './loading';
import IndexScreen from './Index';

// Definindo os tipos de rotas
export type RootStackParamList = {
  Loading: undefined;
  Index: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Index" component={IndexScreen} />
    </Stack.Navigator>
  );
}