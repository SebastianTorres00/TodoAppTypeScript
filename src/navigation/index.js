/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../feature/Home/Home';
import AddTodo from '../feature/AddTodos';
import EditTodo from '../feature/EditTodo';

const Stack = createNativeStackNavigator();
// react-native run-android & react-native run-ios
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="EditTodo" component={EditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
