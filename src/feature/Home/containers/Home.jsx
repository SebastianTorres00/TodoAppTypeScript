// import { Fab, Icon } from "native-base";
import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import useChangeStatusTodo from '../hooks/useChangeStatusTodo';
// import styles from '../styles';
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useDispatch, useSelector} from 'react-redux';
// import showAlert from '../utils/showAlert';
import {useNavigation} from '@react-navigation/native';
import useChangeStatusTodo from '../hooks/useChangeStatusTodo';
import styles from '../styles';
import showAlert from '../utils/showAlert';

const Home = ({navigation}) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  useChangeStatusTodo();
  const {listTodoReducer} = useSelector(state => state);
  const onPressNav = () => navigation.navigate('AddTodo');

  const onPressDeleteTodo = todoToDelete => {
    const newListTodo = [];
    listTodoReducer.map(item => {
      if (item?.id !== todoToDelete?.id) newListTodo.push(item);
    });
    showAlert(dispatch, newListTodo);
  };
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const onPressEditTodo = item => navigation.navigate('EditTodo', {item});

  const renderItem = ({item}) => (
    <View style={styles.containerViewCheckBox}>
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <TouchableOpacity
          onPress={() => onPressDeleteTodo(item)}
          style={styles.checkBox}
          accessibilityLabel="Learn more about this purple button">
          <Text>ELIMINAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressEditTodo(item)}
          style={styles.checkBox}
          accessibilityLabel="Learn more about this purple button">
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listTodoReducer}
        renderItem={renderItem}
        keyExtractor={listTodoReducer => listTodoReducer.id}
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
