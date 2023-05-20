import { View, Text, Pressable } from "react-native";
import { FONT, COLORS } from "../../constants";

const Landing1 = () => {
  return (
    <View>
      <Text>Are you a </Text>
      <Pressable>
        <Text
          style={{
            fontSize: FONT.reg,
            fontWeight: "400",
            color: COLORS.primary,
          }}
        >
          USER
        </Text>
      </Pressable>
      <Pressable>
        <Text
          style={{
            fontSize: FONT.reg,
            fontWeight: "400",
            color: COLORS.primary,
          }}
        >
          ADMIN
        </Text>
      </Pressable>
    </View>
  );
};

export default Landing1;
