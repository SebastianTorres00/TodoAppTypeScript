import React from 'react';
import {View, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import useChangeStatusTodo from '../hooks/useChangeStatusTodo';
import styles from '../styles';

type Todo = {
  title: string;
  id: number;
};

type TodosStore = {
  listTodoReducer: Todo[];
};

type NavigationInt = {
  navigation: {
    navigate: (route: string, params?: object) => void;
  };
};

const Home = ({navigation}: NavigationInt) => {
  useChangeStatusTodo();
  const listTodoReducer = useSelector(
    (state: TodosStore) => state.listTodoReducer,
  );

  const onPressNav = () => navigation.navigate('AddTodo');

  const onPressDeleteTodo = (todoToDelete: Todo) => {
    const saveNewListTodo: Todo[] = [];
    listTodoReducer.map(item => {
      if (item?.id !== todoToDelete?.id) {
        saveNewListTodo.push(item);
      }
    }); // cambiar a filter - Agregar labels
    navigation.navigate('DeleteTodo', {saveNewListTodo});
  };

  const onPressEditTodo = (item: Todo) => {
    navigation.navigate('EditTodo', {item});
  };

  const renderItem = ({item}: {item: Todo}) => (
    <View style={styles.containerViewCheckBox}>
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <TouchableOpacity
          testID="test_delete_todo"
          onPress={() => onPressDeleteTodo(item)}
          style={styles.checkBox}
          accessibilityLabel="Learn more about this purple button">
          <Text>ELIMINAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="test_edit_todo"
          onPress={() => onPressEditTodo(item)}
          style={styles.checkBox}
          accessibilityLabel="Learn more about this purple button">
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container} testID="test-home-screen">
      <FlatList
        data={listTodoReducer}
        renderItem={renderItem}
        extraData={listTodoReducer}
      />
      <Button
        onPress={onPressNav}
        testID="test_btn_add"
        title="ADD TODOS"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
export default Home;
