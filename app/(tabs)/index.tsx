import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// Passo 1: Importar os componentes .tsx que criamos.
// O caminho relativo está correto para a sua estrutura de pastas.
import InteractiveSection from '../../components/InteractiveSection';
import ProfileCard from '../../components/ProfileCard';

// Este é o componente da sua tela principal (a primeira aba).
// Ele não precisa de alterações, pois já estava correto. O problema era
// que não havíamos atualizado este arquivo no Canvas.
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Aula de Componentes, Props e State</Text>

          {/* Passo 2: Usar os componentes importados */}
          <ProfileCard
            nome="Aline Timm"
            descricao="Professora na UniSenac. Adora Gatos, bolo e café."
            imagemUrl="https://github.com/alinetimm.png"
          />
          <ProfileCard
            nome="Aluno Destaque"
            descricao="Estudante dedicado(a) aplicando os conceitos da aula."
            imagemUrl="https://i.pravatar.cc/150?img=47"
          />

          <InteractiveSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos para o layout geral da tela
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#784e00ff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#281c02ff',
  },
});
