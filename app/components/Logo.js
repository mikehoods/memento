import React from 'react'
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

export default function Logo({ style }) {
    return (
        <View style={[styles.logoContainer, style]}>
            <FontAwesome5 color={colors.primary} name='book' size={50} />
            <AppText style={styles.appName}>Memento</AppText>
       </View>
    )
}

styles = StyleSheet.create({
    appName: {
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 10
    },
    logoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 37,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: 'absolute',
        top: 125
    }
})
