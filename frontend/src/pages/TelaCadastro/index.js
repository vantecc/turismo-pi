// src/pages/Cadastro/index.js

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';

export default function Cadastro() {
  const socialIcons = {
    Facebook: require('../../assets/facebook.png'),
    Google: require('../../assets/google.png'),
    Apple: require('../../assets/apple.png'),
  };

  const socialOptions = [
    { provider: 'Facebook', bg: '#3a63ed', textColor: '#fff' },
    { provider: 'Google', bg: '#ffffff', textColor: '#1a2821', border: true },
    { provider: 'Apple', bg: '#106d3e', textColor: '#fff' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Será muito bom estar com você.
        </Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subtitle}>Criar conta</Text>
      </View>

      {/* Nome e Sobrenome */}
      <View style={styles.nameRow}>
        <TextInput style={styles.inputHalf} placeholder="Nome" placeholderTextColor="#132e209e" />
        <TextInput style={styles.inputHalf} placeholder="Sobrenome" placeholderTextColor="#132e209e" />
      </View>

      {/* Telefone, Email, Senha */}
      <TextInput style={styles.inputFull} placeholder="Telefone" placeholderTextColor="#132e209e" />
      <TextInput style={styles.inputFull} placeholder="Email" placeholderTextColor="#132e209e" />
      <TextInput style={styles.inputFull} placeholder="Senha" placeholderTextColor="#132e209e" secureTextEntry />

      {/* Botão cadastrar */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Termos */}
      <Text style={styles.terms}>
        Ao criar uma conta, você concorda com nossos Termos de Serviço
        e Política de Privacidade.
      </Text>

      {/* Botões sociais */}
      <View style={styles.socialArea}>
        {socialOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.socialButton,
              {
                backgroundColor: option.bg,
                borderWidth: option.border ? 1 : 0,
                borderColor: option.border ? '#496d5b33' : 'transparent',
              },
            ]}
          >
            <View style={styles.socialContent}>
              <Image source={socialIcons[option.provider]} style={styles.socialIcon} />
              <Text style={[styles.socialButtonText, { color: option.textColor }]}>
                Cadastro com {option.provider}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
