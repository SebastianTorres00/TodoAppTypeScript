// const {View, Text, TouchableOpacity} = require('react-native');

import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../app/actions";

const DeleteTodo = ({route}) => {
  const navigation = useNavigation()
  const {saveNewListTodo} = route.params
  const onPressDeleteTodo = () => {
    dispatch(deleteTodo(saveNewListTodo))
    navigation.goBack();
  }
  
  const dispatch = useDispatch();
  return (
    <View style={{
      position: "absolute",
      dispaly: "flex",
      justifyContent:"center",
      width:420,
      padding: 24,
      // backgroundColor: 'blue',
      height: 600,
      // marginLeft: 60,
      }}>
      <Text style={{textAlign: "center", color: "red", fontSize: 20, backgroundColor: "#FFF"}}>Eliminar Tarea</Text>
      <View style={{
        flexDirection: 'row',
       padding: 24,
       backgroundColor: "#000",
       justifyContent: "center"
         }} >
        <TouchableOpacity style={{ backgroundColor: "green" , width: 100,
         alignItems: "center" }} onPress={( ()=> onPressDeleteTodo())}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "green" , width: 100, alignItems: "center", marginLeft: 10 }} onPress={()=> navigation.goBack()}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteTodo;
