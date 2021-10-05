import React from 'react'
import { TextField ,Box } from '@mui/material';
import { withStyles } from '@mui/styles';

const style = (theme)=>({
    text:{
        marginBottom:"30px",
        width:"350px"
    }
})

const FeatureReport = withStyles(style)(({classes}) => {
    return (
        <div>
            <TextField
                label="Email"
                placeholder="What is the feature you would like to see?"
                className={classes.text}
            />
            <TextField
                label="feedback"
                placeholder="Provide description of the feature"
                multiline
                rows={4}
                cols={6}
                className={classes.text}
            />
        </div>
    )
})

export default FeatureReport
