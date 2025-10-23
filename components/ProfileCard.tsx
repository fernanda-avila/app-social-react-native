import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Passo 1: Definir um "contrato" (type) para as props que o componente espera receber.
// Isso garante que você sempre passará os dados corretos.
type ProfileCardProps = {
  nome: string;
  descricao?: string;
  imagemUrl: string;
  compact?: boolean; // quando usado como cabeçalho do post
};

// ProfileCard agora suporta um modo 'compact' para atuar como cabeçalho de post (avatar + nome)
const ProfileCard: React.FC<ProfileCardProps> = ({ nome, descricao, imagemUrl, compact = true }: ProfileCardProps) => {
  if (compact) {
    return (
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: imagemUrl }} />
        <View style={styles.headerText}>
          <Text style={styles.cardTitle}>{nome}</Text>
          {descricao ? <Text style={styles.cardDescription}>{descricao}</Text> : null}
        </View>
        <Text style={styles.more}>⋯</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: imagemUrl }} />
      <Text style={styles.cardTitle}>{nome}</Text>
      {descricao ? <Text style={styles.cardDescription}>{descricao}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8cd60ff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  more: {
    fontSize: 20,
    color: '#666',
    paddingHorizontal: 8,
  },
});

export default ProfileCard;
