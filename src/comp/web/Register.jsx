import React from 'react'
import Input from '../inputs/Input'
import { useFormik } from 'formik';
import { registerSchema } from './auth';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';



export default function Register() {
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        image: null,
    }
    const onSubmit = async users=> {
        const formData = new FormData();
        formData.append("userName", users.userName);
        formData.append("email", users.email);
        formData.append("password", users.password);
        formData.append("image", users.image);
   
        const { data } = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
        
        if (data.message=='success') {
            formik.resetForm();
            toast('Account created successfully',
                {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }
            )
        }
    }



    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: registerSchema,
    }
    )
    const changeValueImage = (event)=> {
        formik.setFieldValue('image',event.target.files[0])
    }
    const inputs = [
        {
            title: 'user name',
            id: 'username',
            type: 'text',
            name: 'userName',
            value: formik.values.userName,
        },
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'user email',
            value: formik.values.email,


        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'user password',
            value: formik.values.password,


        },
        {
            id: 'image',
            type: 'file',
            name: 'image',
            title: 'user image',
            onChange:changeValueImage,
        }
    ];
    const renderInputs = inputs.map((input, index) =>
        <Input type={input.type} id={input.id} 
        name={input.name}
         title={input.title} 
         value={input.value} 
        errors={formik.errors}
         onChange={input.onChange || formik.handleChange} 
        touched={formik.touched} 
        onBlur={formik.handleBlur} key={index} />
    )
    return (
        <div className='container'>
            <h2 className='text-center'>Register</h2>
            <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className=' d-flex flex-column align-items-center'>
                {renderInputs}

                <button type='submit' disabled={!formik.isValid} className=' mt-5 text-white bg-dark py-3 w-25 text-uppercase'>sign up</button>
            </form>
        </div>
    )
}
