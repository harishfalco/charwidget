import React ,{useState,useEffect} from 'react'
import { TextField ,Box , Button} from '@mui/material';
import { withStyles } from '@mui/styles';
import { feedBack } from '../Helper/apiCall';


const style = (theme)=>({
    text:{
        marginBottom:"30px",
        width:"350px"
    }
})



const Feedback = withStyles(style)(({classes}) => {

    const [values, setValues] = useState({
        email:" ",
        message:" "
    })

    const {email , message} = values;
    
    const handleChange = (name)=>(event)=>{
        const value = event.target.value;
        setValues({...values,[name]:value})
    
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        feedBack(values)
        .then( data => {
           setValues({
               email:" ",
               message:" "
           })
           console.log(data);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <TextField
                label="Email"
                placeholder="Enter your email"
                className={classes.text}
                value={email}
                onChange={handleChange("email")}
            />
            <TextField
                label="feedback"
                placeholder="Leave your feedback"
                multiline
                rows={4}
                cols={6}
                className={classes.text}
                value={message}
                onChange={handleChange("message")}
            />
            <Box textAlign='center' m={2}>
          <Button variant="contained" color="success" onClick={onSubmit} style={{justifyContent: 'center'}} >submit</Button>
            </Box>
        </div>
    )
})

export default Feedback
