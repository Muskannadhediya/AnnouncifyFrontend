import { TextInput } from "react-native";
import styles from "../Register/register.style";
import { SHADOWS } from "../../../constants";

const TextBox = (props) => {
  const onChangeText = (key, data) => {
    props.setUser((prevUser) => ({ ...prevUser, [key]: data }));
  };

  return (
    <TextInput
      value={props.value}
      onChangeText={(data) => onChangeText(props.label, data)}
      style={[styles.textInput, SHADOWS.elevation]}
    />
  );
};

export default TextBox;
