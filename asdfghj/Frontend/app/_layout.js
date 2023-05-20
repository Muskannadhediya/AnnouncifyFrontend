import { Stack } from "expo-router";
import { COLORS } from "../constants";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        // headerLeft: () => (
        //   <ScreenHeaderBtn iconUrl={icons.menu} dimension="80%" />
        // ),
        headerTitle: "Announcify",
        headerTintColor: COLORS.white,
        headerTitleAlign: "center",
      }}
    />
  );
};

export default Layout;
