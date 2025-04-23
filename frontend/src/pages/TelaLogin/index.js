import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import { loginUser } from '../../api/auth';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth'; 


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { loginWithGooglePrompt } = useGoogleAuth(navigation); // ✅ aqui fora da função

   
  async function loginUser(email, senha) {
    try {
      const response = await api.post('/login/', { email, senha });
      const { token } = response.data;
      await AsyncStorage.setItem('userToken', token);
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Erro', 'Email ou senha inválidos.');
    }
  }

  const socialIcons = {
    Facebook: require('../../assets/facebook.png'),
    Google: require('../../assets/google.png'),
    Apple: require('../../assets/apple.png'),
  };

  const buttonTextColor = {
    Facebook: '#ffffff',
    Google: '#1a2821',
    Apple: '#ffffff',
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/meupiaui1.png')} style={styles.logo} resizeMode="contain" />

        <View style={styles.characterContainer}>
          <Image source={require('../../assets/oxe.png')} style={styles.character} resizeMode="contain" />
        </View>

        <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText}>Criar uma conta</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            placeholderTextColor="#132e209e"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#132e209e"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.loginButton} onPress={() => loginUser(email, senha)}>
            <Text style={styles.loginButtonText}>Conectar</Text>
          </TouchableOpacity>
        </View>

        {/* Botões sociais estilizados com ação no botão do Google */}
        <View style={styles.socialArea}>
          {['Facebook', 'Google', 'Apple'].map((provider, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.socialButton, styles[`btn${provider}`]]}
              onPress={provider === 'Google' ? loginWithGooglePrompt : undefined}
            >
              <View style={styles.socialContent}>
                <Image source={socialIcons[provider]} style={styles.socialIcon} />
                <Text style={[styles.socialButtonText, { color: buttonTextColor[provider] }]}>
                  Entrar com {provider}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
