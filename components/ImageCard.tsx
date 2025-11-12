import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  source: any;
  title?: string;
};

export default function ImageCard({ source, title }: Props) {
  // Resolve asset dimensions for local requires so we can preserve aspect ratio
  const aspectRatio = useMemo(() => {
    try {
      if (typeof Image.resolveAssetSource === 'function') {
        const info = Image.resolveAssetSource(source as any);
        if (info && info.width && info.height) return info.width / info.height;
      } else if (source && typeof source === 'object' && 'width' in source && 'height' in source) {
        // alguns bundlers podem expor width/height diretamente
        // @ts-ignore
        return source.width / source.height;
      }
    } catch (e) {
      // ignore
    }
    return undefined;
  }, [source]);

  return (
    <View style={styles.card}>
      <Image
        source={source}
        style={[styles.image, aspectRatio ? { aspectRatio } : { height: 240 }]}
        resizeMode="contain"
      />
      {title ? <Text style={styles.title} numberOfLines={1}>{title}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#111',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
    backgroundColor: '#222',
  },
  title: {
    padding: 10,
    color: '#fff',
    fontSize: 14,
  },
});
