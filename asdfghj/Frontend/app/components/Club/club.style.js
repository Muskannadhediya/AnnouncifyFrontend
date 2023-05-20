import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  clubHeading: {
    textAlign: "center",
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.secondary,
    margin: SIZES.small,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: COLORS.tertiary,
    width: "50%",
    padding: SIZES.xSmall,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.small,
  },
  buttonAct: {
    backgroundColor: COLORS.tertiary,
  },
  buttonUna: {
    backgroundColor: COLORS.tertiary2,
  },
  buttonText: {
    fontSize: SIZES.medium,
    textAlign: "center",
    color: COLORS.gray,
    fontWeight: 500,
  },
});

export default styles;
