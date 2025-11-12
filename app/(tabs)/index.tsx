import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Post from '../../components/Post';

export default function HomeScreen() {
 
  const localImages = [
    { src: require('../../assets/images/1.jpg'), title: '1.jpg' },
    { src: require('../../assets/images/2.jpg'), title: '2.jpg' },
    { src: require('../../assets/images/3.jpg'), title: '3.jpg' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.11_12a58d12.jpg'), title: 'WhatsApp 11.09.11' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.12_2ebfdca2.jpg'), title: 'WhatsApp 11.09.12 a' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.12_54da44d2.jpg'), title: 'WhatsApp 11.09.12 b' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.13_06d5f24f.jpg'), title: 'WhatsApp 11.09.13 a' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.13_d7ad2b92.jpg'), title: 'WhatsApp 11.09.13 b' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.14_9dc760c5.jpg'), title: 'WhatsApp 11.09.14 a' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.14_f7631258.jpg'), title: 'WhatsApp 11.09.14 b' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.15_e6392ca0.jpg'), title: 'WhatsApp 11.09.15 a' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.15_f5c0d921.jpg'), title: 'WhatsApp 11.09.15 b' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.15_fe602611.jpg'), title: 'WhatsApp 11.09.15 c' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.16_9057b1d6.jpg'), title: 'WhatsApp 11.09.16 a' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.16_d871bc50.jpg'), title: 'WhatsApp 11.09.16 b' },
    { src: require('../../assets/images/Imagem do WhatsApp de 2025-11-10 à(s) 14.09.17_a9ea7630.jpg'), title: 'WhatsApp 11.09.17' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoRow}>
            <Image
              source={require('../../assets/images/splash-icon.png')}
              style={styles.logo}
            />
            <View style={styles.logoTextContainer}>
              <Text style={styles.logoTitle}>Concurso Definitivo de poses</Text>
              <Text style={styles.logoSubtitle}>do willem dafoe</Text>
            </View>
          </View>

          {/* Galeria local (cada imagem como um Post, mesmo estilo dos outros posts) */}
          <View style={{ marginBottom: 12 }}>
            {localImages.map((img, idx) => {
              // Obter URI de forma segura para web e native.
              let uri = '';
              try {
                if (typeof img.src === 'string') {
                  uri = img.src;
                } else if (img.src && typeof img.src === 'object' && 'uri' in img.src) {
                  // já é um objeto asset
                  // @ts-ignore
                  uri = img.src.uri;
                } else if (typeof Image.resolveAssetSource === 'function') {
                  const resolved = Image.resolveAssetSource(img.src as any);
                  uri = resolved && resolved.uri ? resolved.uri : '';
                } else if (img.src != null) {
                  // fallback: attempt to stringify (some bundlers return a string path)
                  // @ts-ignore
                  uri = String(img.src);
                }
              } catch (e) {
                uri = '';
              }

              const avatar = `https://api.dicebear.com/6.x/bottts/png?seed=robot-tds-${idx}&size=150`;
              const num = idx + 1;
              let descricao = `Imagem ${num}`;

              // Apply user-specified labels/names
              const alineSet = new Set([1, 2, 3, 4, 11, 12, 13, 14, 15]);
              const arthurSet = new Set([5, 6, 7]);
              const nelsonSet = new Set([8, 10]);
              const lukaSet = new Set([9, 16]);

              if (arthurSet.has(num)) {
                descricao = `${descricao} — ARTHUR`;
              } else if (nelsonSet.has(num)) {
                descricao = `${descricao} — NELSON`;
              } else if (lukaSet.has(num)) {
                descricao = `${descricao} — LUKA`;
              } else if (alineSet.has(num)) {
                descricao = `${descricao} — ALINE`;
              }

              return (
                <Post
                  key={`local-${idx}`}
                  nomeAutor={'TDS'}
                  urlAvatar={avatar}
                  urlImagemPost={uri}
                  descricao={descricao}
                  curtidasIniciais={0}
                />
              );
            })}
          </View>


          

        


          
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  logo: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
  },
  logoTextContainer: {
    marginLeft: 12,
    flexShrink: 1,
  },
  logoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  logoSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 2,
    textTransform: 'uppercase',
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
  galleryScroll: {
    marginTop: 8,
    marginBottom: 8,
  },
});
