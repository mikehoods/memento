import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    body: Yup.string().required().label("Body")
})

function AddPostScreen(props) {
    return (
        <Screen style={styles.screen}>
            <AppForm
                initialValues={{ title: '', body: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autocorrect={false}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    autocorrect={false}
                    multiline
                    name="body"
                    placeholder="Body"
                />
                <SubmitButton name="+" />
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

export default AddPostScreen;