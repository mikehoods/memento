import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function PostItem({ body, image, onPress, time, title }) {
  return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.postContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.time}>{time}</Text>
                <Text numberOfLines={3} style={styles.body}>{body}</Text>
            </View>
            <Image 
                source={image} 
                style={styles.image} 
            />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 8,
        height: 80,
        width: 80
    },
    postContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
        width: '100%'
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

export default PostItem;