import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import Logo from '../components/Logo';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <Screen style={styles.screen}>
            <Logo />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ errors, handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="envelope"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                        textContentType='emailAddress'
                        />
                        <ErrorMessage error={errors.email} />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="key"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <ErrorMessage error={errors.password} />
                        <Button 
                            name="Login" 
                            onPress={handleSubmit} 
                        />
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-end',
        padding: 20
    }
})

export default LoginScreen;