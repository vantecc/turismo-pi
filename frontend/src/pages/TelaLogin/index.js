// src/pages/Login/index.js

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';

export default function Login() {
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
        {/* Logo */}
        <Image
          source={require('../../assets/meupiaui1.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Personagem */}
        <View style={styles.characterContainer}>
          <Image
            source={require('../../assets/oxe.png')}
            style={styles.character}
            resizeMode="contain"
          />
        </View>

        {/* Criar Conta */}
        <TouchableOpacity style={styles.registerLink}>
          <Text style={styles.registerText}>Criar uma conta</Text>
        </TouchableOpacity>

        {/* Formulário */}
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            placeholderTextColor="#132e209e"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#132e209e"
            secureTextEntry
          />

          {/* Lembrar senha */}
          <View style={styles.rememberRow}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>LEMBRAR SENHA</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>

          {/* Conectar */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Conectar</Text>
          </TouchableOpacity>
        </View>

        {/* Botões sociais */}
        <View style={styles.socialArea}>
          {['Facebook', 'Google', 'Apple'].map((provider, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.socialButton, styles[`btn${provider}`]]}
            >
              <View style={styles.socialContent}>
                <Image source={socialIcons[provider]} style={styles.socialIcon} />
                <Text
                  style={[
                    styles.socialButtonText,
                    { color: buttonTextColor[provider] },
                  ]}
                >
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
