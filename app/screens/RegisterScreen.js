import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colors from '../config/colors';
import Logo from '../components/Logo';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.screen}>
            <Logo />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="envelope"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="key"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton color={colors.secondary} name="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        padding: 20
    }
})

export default RegisterScreen;