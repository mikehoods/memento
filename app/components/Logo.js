import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import colors from '../config/colors';

export default function Logo() {
    return (
        <View style={styles.logoContainer}>
            <FontAwesome5 color={colors.primary} name='book' size={50} />
            <Text style={styles.appName}>Memento</Text>
       </View>
    )
}

styles = StyleSheet.create({
    appName: {
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 28,
        fontWeight: '700',
        marginLeft: 12
    },
    logoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 37,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingHorizontal: 18,
        paddingVertical: 12,
        position: 'absolute',
        top: 200
    }
})
