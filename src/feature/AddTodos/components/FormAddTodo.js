import React from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native'
import styles from '../../AddTodos/styles';
import useFormAddTodo from '../hooks/useFormAddTodo';

const FormAddTodo = () => {
    const {text, onChangeText, onPressTodoList} = useFormAddTodo()
    return (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <TouchableOpacity
        style={styles.buttonForm}
        onPress={onPressTodoList}
      >
        <Text>Add TODO</Text>
      </TouchableOpacity>
        </View>
    )
}
export default FormAddTodo;
