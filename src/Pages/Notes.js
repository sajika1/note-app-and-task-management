import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Container, Grid } from '@mui/material';
import NoteCart from '../Components/noteCart';

import Masonry from 'react-masonry-css';

function Notes() {
    
    const [data , setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/notes')
            .then(res => setData(res.data) )
    } , [])

    const deleteHandler = (id)=>{
        axios.delete('http://localhost:8000/notes/'+id);

        const newData = data.filter( item => item.id !== id );
        setData(newData);
    }

    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (     
        <Container sx={
            { marginTop: "100px" , paddingBottom:"40px" }    
        }>
            <Masonry 
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                data.map(item => (
                    <div key={item.id} item xs={12} md={6} lg={4}>
                        <NoteCart data={item} deleteHandler={deleteHandler}/>
                    </div>    
                ))
                }

            </Masonry>
        </Container>
    )
}

export default Notes
     
