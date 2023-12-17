import { TextField, Button } from '@mui/material'
import "./Todo.css"
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

function Todo() {
    const validationSchema = Yup.object({
        title: Yup.string('Enter your title').required('Title is required'),
        description: Yup.string('Enter your description').required('Description is required'),
    });
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            axios.put('http://localhost:3000/',values).then(
                (res)=>{
                    console.log("Data puted")
                }
            )
        },
    })
    return (
        <>
            <div className="input-container">
                <form className='form' onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="Title"
                        type="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        type="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <Button type='submit' variant="contained" color='success'>Add</Button>
                </form>
            </div>
        </>
    )
}
export default Todo