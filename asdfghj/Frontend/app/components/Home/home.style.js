import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  deptContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.xSmall,
    margin: SIZES.xSmall,
    borderRadius: SIZES.medium,
    borderColor: COLORS.gray2,
    borderWidth: 2,
  },
  headingContainer: {
    fontSize: SIZES.large,
    marginBottom: SIZES.xxSmall,
  },
  descContainer: {
    color: COLORS.gray3,
    textAlign: "justify",
    fontSize: SIZES.small,
  },
});

export default styles;
