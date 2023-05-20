import { ScrollView, Text, TouchableOpacity } from "react-native";
import Committees from "../common/committees";
import styles from "./announcement.style";
import { SHADOWS } from "../../../constants";
import { useRouter } from "expo-router";

const Announcement = () => {
  const router = useRouter();
  return (
    <ScrollView>
      {Committees.map((item, id) => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={id}
            style={[styles.noticeContainer, SHADOWS.elevation]}
            onPress={() => router.push("../notice")}
          >
            <Text style={styles.noticeHeading}>{item.deptName}</Text>
            <Text style={styles.noticeDate}>ISSUE_DATE</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Announcement;
