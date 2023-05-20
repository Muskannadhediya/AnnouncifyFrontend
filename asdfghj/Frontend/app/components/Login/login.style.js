import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  textInput: {
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.white,
    width: "90%",
    paddingVertical: SIZES.xSmall,
    margin: SIZES.large,
  },
  logInButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
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
