import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default function Login() {
  let [userName, setUserName] = useState("");
  let [userPassword, setUserPassword] = useState("");

  function login() {
    console.log(`usuario${userName} senha ${userPassword}`);
  }
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Digite seu Usuario"
        value={userName}
        onChangeText={setUserName}
        style={styles.input}
      />
      <Text>Senha</Text>
      <TextInput
        placeholder="Digite sua Senha"
        value={userPassword}
        secureTextEntry={true}
        onChangeText={setUserPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={login}></Button>
    </View>
  );
}
