import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import styles from "./login.style";
import { SIZES, COLORS } from "../../../constants";
import TextBox from "../common/textBox";

const Login = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.loginContainer}>
      <Text style={{ fontSize: SIZES.xxLarge, color: COLORS.secondary }}>
        Log In
      </Text>
      {Object.keys(userData).map((item, id) => {
        return (
          <TextBox
            value={userData[item]}
            setUser={setUserData}
            label={item}
            key={id}
          />
        );
      })}
      <TouchableOpacity
        style={styles.logInButton}
        onPress={() => router.push((href = "components/Drawer/home"))}
      >
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
        Don't have an account?{" "}
        <Text
          onPress={() => {
            router.push((href = "components/Register/register"));
          }}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

export default Login;
