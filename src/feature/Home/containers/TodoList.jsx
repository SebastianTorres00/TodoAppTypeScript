// import { Fab, Icon } from "native-base";
import React from 'react';
import { View, FlatList, Text, Button, TouchableOpacity, Alert } from "react-native";
import useChangeStatusTodo from "../hooks/useChangeStatusTodo";
import styles from "../styles";
import {Checkbox} from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import showAlert from "../utils/showAlert";

const TodoList = ({navigation}) => {
    const dispatch = useDispatch();
    useChangeStatusTodo()
    const { listTodoReducer } = useSelector((state) => state)
    const onPressNav = () => {
      navigation.navigate('AddTodo')
    }
    
    const onPressDeleteTodo = (todoToDelete) => {
      const newListTodo = []
      listTodoReducer.map(item => {if(item?.id !== todoToDelete?.id) newListTodo.push(item)})
      showAlert(dispatch, newListTodo)
    }

    const onPressEditTodo = (item) =>navigation.navigate('EditTodo', {item})

    const renderItem = ({item}) => (
        <View style={styles.containerViewCheckBox}>
          <Checkbox
            value={item.title}
            accessibilityLabel={item.title}
            onPress={() => console.log(item)}
            >
            <Text style={styles.title}>{item.title}</Text>
          </Checkbox>
          <View>
            <TouchableOpacity
              onPress={() => onPressDeleteTodo(item)}
              style={styles.checkBox}
              accessibilityLabel="Learn more about this purple button"
            >
              <Text>ELIMINAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressEditTodo(item)}
              style={styles.checkBox}
              accessibilityLabel="Learn more about this purple button"
            >
              <Text>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    return(
    <View style={styles.container}>
        <FlatList
          data={listTodoReducer}
          renderItem={renderItem}
          keyExtractor={listTodoReducer => listTodoReducer.id}
          extraData={listTodoReducer}
        />
      <Button
      onPress={onPressNav}
      testID={"btn_add"}
      title="ADD TODOS"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>
  )
}
export default TodoList
