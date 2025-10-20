import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Passo 1: Definir um "contrato" (type) para as props que o componente espera receber.
// Isso garante que você sempre passará os dados corretos.
type ProfileCardProps = {
  nome: string;
  descricao: string;
  imagemUrl: string;
};

// Passo 2: Usar o tipo definido para tipar as props do componente.
const ProfileCard: React.FC<ProfileCardProps> = ({ nome, descricao, imagemUrl }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{ uri: imagemUrl }}
      />
      <Text style={styles.cardTitle}>{nome}</Text>
      <Text style={styles.cardDescription}>{descricao}</Text>
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
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProfileCard;
