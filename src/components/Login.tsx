import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React from "react";
import { useState } from "react";

interface LoginProps {}

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <View>
      <Text>Login</Text>

      <TextInput
        placeholder="Digite seu usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
