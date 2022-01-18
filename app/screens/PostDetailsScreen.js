import React, { useEffect } from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';

import colors from '../config/colors';

function PostDetails({ route }) {
  const post = route.params;

  useEffect(() => {
    console.log(route)
  }, [route])

  return (
    <View>
        <ScrollView>
            <View style={styles.postContainer}>
                <Image  resizeMode={'cover'} source={post.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.time}>{post.time}</Text>
                    <Text style={styles.body}>{post.body}</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 10
  },
  iconContainer: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%'
  },
  image: {
      height: 225,
      width: '100%'
  },
  postContainer: {

  },
  textContainer: {
      marginBottom: 20,
      marginTop: 20,
      padding: 10
  },
  time: {
    fontWeight: 'bold',
    marginBottom: 2
  },
  title: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6
  }
});

export default PostDetails;