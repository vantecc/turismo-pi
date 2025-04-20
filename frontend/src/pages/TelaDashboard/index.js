import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import AttractionCard from '../../components/AttractionCard';
import img1 from '../../assets/serracapi.png';
import img2 from '../../assets/setecidades.png';
import { FontAwesome } from '@expo/vector-icons';


export default function DashboardScreen() {
  const categories = [
    { name: 'Natureza' },
    { name: 'História' },
    { name: 'Gastronomia' },
  ];

  const attractions = [
    {
      id: 1,
      name: 'Serra da Capivara',
      category: 'Natureza',
      rating: 5,
      image: img1,
      bookmarked: true,
    },
    {
      id: 2,
      name: 'Parque Nacional de Sete Cidades',
      category: 'História',
      rating: 4.5,
      image: img2,
      bookmarked: false,
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MeuPiauí</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar pontos turísticos ou municípios"
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      >
        {categories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista completa de municípios */}
      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreText}>Explorar lista completa de municípios</Text>
      </TouchableOpacity>

      {/* Título da seção */}
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleText}>Mais Visitados</Text>
      </View>

      {/* Carrossel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {attractions.map((item) => (
          <AttractionCard
            key={item.id}
            name={item.name}
            category={item.category}
            image={item.image}
            rating={item.rating}
            bookmarked={item.bookmarked}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

{/* Footer com navegação */}
<View style={styles.footer}>
  <TouchableOpacity style={styles.footerButton}>
    <FontAwesome name="home" size={24} color="#0f9d58" />
    <Text style={styles.footerLabel}>Home</Text>
  </TouchableOpacity>

  {/* Botão central grande */}
  <View style={styles.centerButtonWrapper}>
    <TouchableOpacity style={styles.centerButton}>
      <View style={styles.centerDot} />
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.footerButton}>
    <FontAwesome name="map" size={24} color="#999" />
    <Text style={[styles.footerLabel, { color: '#999' }]}>Municípios</Text>
  </TouchableOpacity>
</View>
