import React from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native'
import styles from '../../AddTodos/styles';
import useFormEditTodo from '../hooks/useFormEditTodo';

const FormEditTodo = ({route}) => {
  console.log("route", route);
    const {text, onChangeText, onPressEditTodo} = useFormEditTodo(route.params)
    return (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <TouchableOpacity
        style={styles.buttonForm}
        onPress={onPressEditTodo}
      >
        <Text>Editar TODO</Text>
      </TouchableOpacity>
        </View>
    )
}
export default FormEditTodo;
