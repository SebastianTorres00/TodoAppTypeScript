import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../app/actions';

type Params = {
  params: object;
};

type Route = {
  route: Params;
};

const DeleteTodo = ({route}: Route) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const saveNewListTodo = route.params.saveNewListTodo;

  const onPressDeleteTodo = () => {
    dispatch(deleteTodo(saveNewListTodo));
    navigation.navigate('Home');
  };

  const goBackNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: 420,
        padding: 24,
        height: 600,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'red',
          fontSize: 20,
          backgroundColor: '#FFF',
        }}>
        Eliminar Tarea
      </Text>
      <View
        style={{
          flexDirection: 'row',
          padding: 24,
          backgroundColor: '#000',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          testID="test-delete-todo"
          style={{backgroundColor: 'green', width: 100, alignItems: 'center'}}
          onPress={onPressDeleteTodo}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="test-goBack-delete-todo"
          style={{
            backgroundColor: 'green',
            width: 100,
            alignItems: 'center',
            marginLeft: 10,
          }}
          onPress={goBackNavigate}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteTodo;
