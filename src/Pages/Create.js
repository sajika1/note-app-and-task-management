import React, { useState } from 'react';

import { Button, Container, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const fieldStyle = {
        marginBottom: '20px',
    };


function Create() {

    //? input values state
    const [note , setNote] = useState('')
    const [details , setDetails] = useState('')
    const [categories , setCategories] = useState('todos')
    
    //! this states to handle empty input error  
    const [noteError , setNoteError] = useState(false)
    const [detailsError , setDetailsError] = useState(false)


    const [data , setData] = useState({ })


    const submitHandler = (e)=>{
        e.preventDefault();
        
        setNoteError(false)
        setDetailsError(false)

        if (note === '') {
            setNoteError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        if (note && details && categories) {
            setData({ note, details, categories })
        }
    }

    return (
        <Container>  
            <Typography
                style={{margin:'20px 0'}}
                component= 'h2'
                gutterBottom
                variant='h6'
                color='textSecondary'
            > Create New Note
            </Typography>
            <form noValidate autoComplete='off' onSubmit={submitHandler}>
                <TextField 
                   style={fieldStyle}
                    value={note} 
                    onChange={(e)=> setNote(e.target.value)}
                    label='Note Title'
                    fullWidth
                    color='secondary'
                    required
                    error={noteError}
                />
                <TextField 
                    style={fieldStyle}
                    value={details}
                    onChange={(e)=>setDetails(e.target.value)}  
                    label='Details'
                    fullWidth
                    color='secondary'
                    required
                    multiline
                    rows={4}
                    error={detailsError}
                />

                <RadioGroup style={fieldStyle} value={categories} onChange={(e)=>setCategories(e.target.value)}>
                    <FormControlLabel value='money' control={<Radio color='secondary'/>} label='Money'/>
                    <FormControlLabel value='todos' control={<Radio color='secondary'/>} label='Todos'/>
                    <FormControlLabel value='reminders' control={<Radio color='secondary'/>} label='Reminders'/>
                    <FormControlLabel value='work' control={<Radio color='secondary'/>} label='Work'/>
                </RadioGroup>

                <Button 
                    type='submit'
                    disableElevation
                    variant='contained'
                    color = 'secondary'
                    endIcon = {<KeyboardArrowRightIcon/>}
                >Submit
                </Button>
            </form>
        </Container>
    )
}

export default Create;
