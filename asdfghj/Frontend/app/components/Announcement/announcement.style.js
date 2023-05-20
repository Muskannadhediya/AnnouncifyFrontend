import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  noticeContainer: {
    backgroundColor: COLORS.white,
    margin: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  noticeHeading: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    padding: SIZES.xSmall,
    paddingBottom: SIZES.xxSmall,
  },
  noticeDate: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    paddingBottom: SIZES.xSmall,
    paddingLeft: SIZES.xSmall,
  },
});

export default styles;
