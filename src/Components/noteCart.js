import React, { useState } from 'react'
import {makeStyles} from "@mui/styles"
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { red , yellow , blue , green, pink } from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/Delete';

//? this function set background color for each avatar card filtered by categories
const useStyles = (categories) => {
    if (categories == "money") {
        return {
            bgcolor : green[500]
        }
    }
    if (categories == "reminders") {
        return {
            bgcolor : blue[500]
        }
    }
    if (categories == "todos") {
        return {
            bgcolor : pink[500]
        }
    }
    if (categories == "work") {
        return {
            bgcolor : yellow[700]
        }
    }
}

function NoteCart({data , deleteHandler }) {

    return (
        <Card >
            <CardHeader
            avatar={
                <Avatar sx={useStyles(data.categories)} aria-label="recipe">
                    {data.categories[0].toUpperCase()}
                </Avatar>
            }
            action={
            <IconButton aria-label="settings" onClick={() => deleteHandler(data.id)}>
                <DeleteIcon />
            </IconButton>
            }
            title={data.note}
            subheader={data.categories}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary" noWrap={false}>
                    {data.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCart
