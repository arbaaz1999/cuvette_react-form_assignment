import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../App.css';

const skillOptions = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'ReactJS', label: 'ReactJS' },
    { value: 'ExpressJS', label: 'ExpressJS' },
    { value: 'NodeJS', label: 'NodeJS' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'Django', label: 'Django' },
    { value: 'Springboot', label: 'Springboot' },
    { value: 'AWS', label: 'AWS' },
    { value: 'Google Cloud', label: 'Google Cloud' },
    { value: 'Azure', label: 'Azure' },
];

const Form = () => {
    const [fieldValues, setFieldValues] = useState({
        "yourName": '',
        "email": '',
        "password": '',
    })
    const [isActive, setIsActive] = useState(false)
    const [message, setMessage] = useState('Try it free 7 days then ₹ 180/mo, thereafter')
    const [skills, setSkills] = useState([])

    const checkValidation = () => {
        for (const value in fieldValues) {
            if (fieldValues[value].length === 0) {
                return false
            }
        }
        return true
    }

    useEffect(() => {
        let isFormValid = checkValidation();
        if (isFormValid && skills.length > 0) {
            setIsActive(true)
        }
        // eslint-disable-next-line
    }, [fieldValues, skills])

    const handleInputChange = (e) => {
        setFieldValues({
            ...fieldValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSkillChange = (e) => {
        setSkills([...e])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('You have successfully subscribed to our plan ✔')
        setFieldValues({
            "yourName": '',
            "email": '',
            "password": ''
        });
        setSkills([]);
        setIsActive(false)
        setTimeout(() => {
            setMessage('Try it free 7 days then ₹ 180/mo, thereafter')
        }, 2000)

    }
    return (
        <>
            <Alert icon={false} variant='filled' sx={{
                width: '103%',
                margin: '10px auto',
                fontSize: '20px',
                justifyContent: 'center',
                background: '#F00000'
            }}>{message}</Alert>
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    padding: '20px 30px',
                    background: '#ffffff',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '7px',
                }}>
                <TextField
                    value={fieldValues.yourName}
                    onChange={handleInputChange}
                    name='yourName'
                    variant='outlined'
                    fullWidth
                    type='text'
                    label='Name'
                    placeholder='Enter your name'
                    margin='normal'
                />
                <TextField
                    value={fieldValues.email}
                    onChange={handleInputChange}
                    name='email'
                    variant='outlined'
                    fullWidth
                    type='email'
                    label='Email Address'
                    placeholder='example@email.com'
                    margin='normal'
                />
                <TextField
                    value={fieldValues.password}
                    onChange={handleInputChange}
                    name='password'
                    variant='outlined'
                    fullWidth
                    type='password'
                    label='Password'
                    placeholder='********'
                    margin='normal'
                />
                <Select
                    options={skillOptions}
                    onChange={handleSkillChange}
                    isMulti
                    placeholder='Choose your skills...'
                    value={skills}
                    isSearchable
                    className='form-select'
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ background: '#37CC8A', marginTop: '15px' }}
                    disabled={isActive ? false : true}
                    size='large'
                >
                    Claim your free trial
                </Button>
                <Typography variant='caption' sx={{ textAlign: 'center', display: 'block', width: '100%' }} mt={2}>
                    By clicking the button you are agreeing to our <strong style={{ fontWeight: '600', color: 'red' }}>Terms and Services</strong>
                </Typography>

            </Box>
        </>
    )
}

export default Form