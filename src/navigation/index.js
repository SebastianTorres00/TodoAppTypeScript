/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AddTodo from '../feature/AddTodos';
// import EditTodo from '../feature/EditTodo';
import Home from '../feature/Home/containers/Home';
import DeleteTodo from '../feature/DeleteTodos/containers/DeleteTodo';
import FormEditTodo from '../feature/EditTodo/components/FormEditTodo';

const Stack = createNativeStackNavigator();
// react-native run-android & react-native run-ios
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="DeleteTodo"
          component={DeleteTodo}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="EditTodo" component={FormEditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
