import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationFunctionComponent } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

type LoginScreenProps = {
  navigation: StackNavigationProp<any, any>; // Replace with your specific types
};


const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("App")} />
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

export default LoginScreen;
