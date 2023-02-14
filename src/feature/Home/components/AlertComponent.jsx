// const {View, Text, TouchableOpacity} = require('react-native');

import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../app/actions";

const AlertComponent = ({newListTodo, deleteTodo, setDeleteTodo}) => {
  const dispatch = useDispatch();
  return (
    <View style={{
      // flex: 1,

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
        <TouchableOpacity style={{ backgroundColor: "green" , width: 100, alignItems: "center" }} onPress={ ()=> dispatch(deleteTodo(newListTodo))}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "green" , width: 100, alignItems: "center", marginLeft: 10 }} onPress={()=> setDeleteTodo(false)}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {AlertComponent};
