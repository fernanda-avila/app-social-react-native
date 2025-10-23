import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PostActionsProps = {
  curtidasIniciais: number;
};

const PostActions: React.FC<PostActionsProps> = ({ curtidasIniciais }: PostActionsProps) => {
  // Começar a contagem de curtidas a partir de 0 conforme solicitado
  const [curtidas, setCurtidas] = useState<number>(0);
  const [curtido, setCurtido] = useState<boolean>(false);

  // Usando atualizações funcionais para garantir consistência mesmo com toques rápidos
  const handleLike = () => {
    setCurtido(prev => {
      // atualiza o contador com base no estado anterior (prev)
      setCurtidas(c => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <View>
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
            <Ionicons
              name={curtido ? 'heart' : 'heart-outline'}
              size={28}
              color={curtido ? '#e1306c' : '#333'}
            />
          </TouchableOpacity>

          {/* ícones decorativos do Instagram */}
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="paper-plane-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.rightActionsRow}>
          <Text style={[styles.countText, curtido ? styles.likedCount : null]}>{curtidas} curtidas</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightActions: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightActionsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 6,
  },
  likeText: {
    fontSize: 22,
  },
  countText: {
    fontSize: 14,
    color: '#333',
  },
  liked: {
    color: '#e1306c',
  },
  likedCount: {
    color: '#e1306c',
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 8,
  },
});

export default PostActions;
