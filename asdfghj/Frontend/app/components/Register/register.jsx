import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import styles from "./register.style";
import { SIZES, FONT, COLORS } from "../../../constants";
import TextBox from "../common/textBox";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    collegeId: "",
    branch: "",
    year: "",
    email: "",
    phone: "",
    password: "",
    confirmP: "",
  });

  return (
    <View style={styles.loginContainer}>
      <Text style={{ fontSize: SIZES.xxLarge, color: COLORS.secondary }}>
        Register
      </Text>
      {Object.keys(user).map((item, id) => {
        return (
          <TextBox value={user[item]} setUser={setUser} label={item} key={id} />
        );
      })}
      <TouchableOpacity activeOpacity={0.8} style={styles.logInButton}>
        <Text
          style={{
            fontSize: SIZES.large,
            fontWeight: "400",
            color: COLORS.gray3,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <Text>
        Don't have an account?
        <Text
          onPress={() => {
            router.push((href = "components/Login/login"));
          }}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Register;
