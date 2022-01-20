import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';

function AppTextInput({ icon, placeholder, ...otherprops }) {
    return (
        <View style={styles.container}>
            {icon && <FontAwesome5 
                color={defaultStyles.colors.secondary} 
                name={icon} 
                size={20}
                style={styles.icon}
            />}
            <TextInput
                {...otherprops}
                placeholder={placeholder}
                style={defaultStyles.text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 12,
        padding: 12,
        width: '100%'
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput