import React from 'react';
import { View, StyleSheet } from 'react-native';

function ListItemSeparator(props) {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'lightgrey',
      height: 1,
      width: '100%'
  }
});

export default ListItemSeparator;