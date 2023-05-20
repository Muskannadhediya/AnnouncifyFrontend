import { Text, TouchableOpacity, View } from "react-native";
import styles from "./club.style";
import { useSearchParams } from "expo-router";
import About from "../About/about";
import Announcement from "../Announcement/announcement";
import { useState } from "react";

const Club = () => {
  const [tab, setTab] = useState(true);
  const { name, id } = useSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.clubHeading}>{name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.button, tab ? styles.buttonAct : styles.buttonUna]}
          onPress={() => setTab(true)}
        >
          <Text style={styles.buttonText}>Announcements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.button, tab ? styles.buttonUna : styles.buttonAct]}
          onPress={() => setTab(false)}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
      </View>
      {tab ? <Announcement /> : <About />}
    </View>
  );
};
export default Club;
