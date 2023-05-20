import { View, Text } from "react-native";
import styles from "./about.style";
import { SHADOWS } from "../../../constants";
const About = () => {
  return (
    <View style={[styles.aboutContainer, SHADOWS.elevation]}>
      <Text style={styles.aboutText}>
        About Us ------ Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quas illum similique dolorem maxime, reprehenderit accusamus animi
        tempora beatae aperiam ut at esse quos earum, deserunt nulla eligendi
        aspernatur consequatur? Veritatis? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Molestiae et voluptas est porro
        praesentium. Ullam hic dolore, eveniet distinctio numquam ducimus quasi
        eos, illum sit labore quibusdam dicta, provident alias?
      </Text>
    </View>
  );
};
export default About;
