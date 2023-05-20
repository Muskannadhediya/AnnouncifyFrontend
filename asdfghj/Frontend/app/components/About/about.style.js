import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: COLORS.white,
    margin: SIZES.xSmall,
    flex: 1,
    borderWidth: 2,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
  },
  aboutText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    padding: SIZES.xSmall,
    textAlign: "justify",
  },
});

export default styles;
