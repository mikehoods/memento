import React from 'react'
import { useFormikContext } from 'formik';

import Button from '../Button';

function SubmitButton({ color, name }) {
    const { handleSubmit } = useFormikContext();

    return (
        <Button color={color} name={name} onPress={handleSubmit} />
    )
}

export default SubmitButton
