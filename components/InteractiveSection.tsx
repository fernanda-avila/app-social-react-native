import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Declaramos o componente como um React.FC (Functional Component).
// Como ele não recebe props, não precisamos passar um tipo genérico.
const InteractiveSection: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [curtidas, setCurtidas] = useState(15);
  const [curtido, setCurtido] = useState(false);

  const handleLike = () => {
    if (curtido) {
      setCurtidas(curtidas - 1);
      setCurtido(false);
    } else {
      setCurtidas(curtidas + 1);
      setCurtido(true);
    }
  };

  return (
    <View style={styles.interactiveContainer}>
      <Text style={styles.sectionTitle}>Seção Interativa (com Estado)</Text>
      <Text style={styles.counterText}>Contador: {contador}</Text>
      <View style={styles.buttonsRow}>
        <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        <Button
          title="Decrementar"
          onPress={() => setContador(contador - 1)}
          color="#ff6347"
        />
      </View>
      <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
        <Text style={styles.likeButtonText}>
          {curtido ? '❤️ Descurtir' : '🤍 Curtir'}
        </Text>
        <Text style={styles.likeButtonText}>{curtidas}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  interactiveContainer: {
    backgroundColor: '#f9ae51ff',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1e3a5f',
  },
  counterText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  likeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default InteractiveSection;
