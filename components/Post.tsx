import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PostActions from './PostActions';
import ProfileCard from './ProfileCard';

type PostProps = {
  nomeAutor: string;
  urlAvatar: string;
  urlImagemPost: string;
  descricao: string;
  curtidasIniciais: number;
};

const Post: React.FC<PostProps> = ({ nomeAutor, urlAvatar, urlImagemPost, descricao, curtidasIniciais }: PostProps) => {
  const [imageUri] = useState<string>(urlImagemPost);
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  return (
    <View style={styles.postContainer}>
      <ProfileCard nome={nomeAutor} descricao={''} imagemUrl={urlAvatar} />

      <Image
        source={imageFailed ? require('../assets/images/react-logo.png') : { uri: imageUri }}
        style={styles.postImage}
        onError={() => setImageFailed(true)}
      />

      <View style={styles.postBody}>
        <Text style={styles.description}><Text style={styles.author}>{nomeAutor}</Text>  {descricao}</Text>
        <PostActions curtidasIniciais={curtidasIniciais} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  postBody: {
    padding: 12,
  },
  author: {
    fontWeight: '600',
    color: '#111',
    marginRight: 6,
  },
  description: {
    fontSize: 14,
    color: '#222',
    marginBottom: 8,
  },
});

export default Post;
