import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationFunctionComponent } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

type LoginScreenProps = {
  navigation: StackNavigationProp<any, any>; // Replace with your specific types
};


const SignupScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Signup Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    margin: 10,
  },
});

export default SignupScreen;
