import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Post from '../../components/Post';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoRow}>
            <Ionicons name="heart" size={36} color="#e1306c" />
          </View>

          {/* Stories fictícios (apenas visual) */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
            {[
              { name: 'Mariana', avatar: 'https://i.pravatar.cc/100?img=32' },
              { name: 'Lucas', avatar: 'https://i.pravatar.cc/100?img=12' },
              { name: 'Ana', avatar: 'https://i.pravatar.cc/100?img=5' },
              { name: 'Milena', avatar: 'https://i.pravatar.cc/100?img=20' },
              { name: 'Mariana L.', avatar: 'https://i.pravatar.cc/100?img=30' },
              { name: 'Pedro', avatar: 'https://i.pravatar.cc/100?img=11' },
            ].map((s, i) => (
              <View key={i} style={styles.storyItem}>
                <View style={styles.storyCircle}>
                  <Image source={{ uri: s.avatar }} style={styles.storyAvatar} />
                </View>
                <Text style={styles.storyLabel}>{s.name}</Text>
              </View>
            ))}
          </ScrollView>

          <Post
            nomeAutor="Mariana Souza"
            urlAvatar="https://i.pravatar.cc/150?img=32"
            urlImagemPost="https://plus.unsplash.com/premium_photo-1667843649659-d77cbfd16475?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"
            descricao="Fim de semana perfeito para uma trilha no meio da natureza 🌲🚶‍♀️"
            curtidasIniciais={0}
          />

          <Post
            nomeAutor="Lucas Pereira"
            urlAvatar="https://i.pravatar.cc/150?img=12"
            urlImagemPost="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            descricao="Café & Código ☕💻"
            curtidasIniciais={0}
          />

            <Post
              nomeAutor="Ana Costa"
              urlAvatar="https://i.pravatar.cc/150?img=5"
              urlImagemPost="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&auto=format&fit=crop&q=80"
              descricao="Do catolicismo só gosto do pecado e do vinho 🍷🍇"
              curtidasIniciais={0}
            />

            <Post
              nomeAutor="Milena Torres"
              urlAvatar="https://i.pravatar.cc/150?img=20"
              urlImagemPost="https://plus.unsplash.com/premium_photo-1663840175543-6eb0f4a25401?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
              descricao="Experimentando novas receitas. Hoje: brownie! 🍫"
              curtidasIniciais={0}
            />

            <Post
              nomeAutor="Mariana Lima"
              urlAvatar="https://i.pravatar.cc/150?img=30"
              urlImagemPost="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&auto=format&fit=crop&q=80"
              descricao="A natureza é o melhor remédio para a alma 🌿"
              curtidasIniciais={0}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos para o layout geral da tela
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  logoRow: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 36,
    resizeMode: 'contain',
  },
  storiesScroll: {
    marginBottom: 12,
  },
  storyItem: {
    width: 72,
    alignItems: 'center',
    marginRight: 12,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#2ecc71',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  storyAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  storyLabel: {
    marginTop: 6,
    fontSize: 12,
    color: '#fff',
  },
});
