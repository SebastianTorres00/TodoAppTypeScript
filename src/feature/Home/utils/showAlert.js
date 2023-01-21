import { Alert } from "react-native";
import { deleteTodo } from "../../../app/actions";

const showAlert = (dispatch, newListTodo) =>
      Alert.alert(
        "Eliminar tarea",
        "¿Deseas eliminar la tarea?",
        [
          {
            text: "Eliminar Tarea",
            onPress: () => dispatch(deleteTodo(newListTodo)),
            style: "cancel",
          },
          {
            cancelable: true,
            text: "No eliminar tarea",
          }
        ],
      );
export default showAlert;