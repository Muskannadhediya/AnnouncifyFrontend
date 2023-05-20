import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import Committees from "../common/committees";
import styles from "./home.style";
import { SHADOWS } from "../../../constants";
import { Stack, useRouter } from "expo-router";
import { Image } from "react-native";
const Home = () => {
  const router = useRouter();
  const [departments, setDepartments] = useState(Committees);
  return (
    <>
      <FlatList
        data={departments}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.deptContainer, SHADOWS.elevation]}
            onPress={() => {
              router.push({
                pathname: "../Club/123",
                params: { name: "Eco Club", id: 123 },
              });
            }}
          >
            <Text style={styles.headingContainer}>{item.deptName}</Text>
            <Text style={styles.descContainer}>{item.description}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;
