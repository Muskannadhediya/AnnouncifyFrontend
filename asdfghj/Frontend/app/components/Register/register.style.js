import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  textInput: {
    fontSize: FONT.reg,
    paddingHorizontal: SIZES.small,
    backgroundColor: COLORS.white,
    width: "90%",
    borderRadius: SIZES.xxSmall,
    paddingVertical: SIZES.xxSmall,
    margin: SIZES.xSmall,
  },
  logInButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.xxLarge,
    borderRadius: 4,
    elevation: SIZES.xSmall,
    backgroundColor: COLORS.tertiary,
    width: "90%",
    margin: SIZES.large,
  },
  loginContainer: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.gray,
  },
});

export default styles;
