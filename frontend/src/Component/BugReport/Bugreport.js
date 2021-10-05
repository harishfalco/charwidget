import React ,{useState,useEffect} from 'react'
import { TextField , Button} from '@mui/material'
import { withStyles } from '@mui/styles'
import { bugReport } from '../Helper/apiCall'


const styles  = (theme)=>({
    text:{
        margin:"10px",
        width:"350px",
    },
})


const Bugreport = withStyles(styles)(({classes}) => {

   const [value, setValue] = useState({
        bug:" ",
        email:" ",
        steps:" ",
        error:" ",
        loading:false
   })

   const {bug , email , steps } = value;

   const handleChange = (name)=>event=>{
       const values = event.target.value;
       setValue({...value,[name]:values})
   }

   const onSubmit = (event)=>{
       event.preventDefault();
       setValue({...value,error:" ",loading:true})
       bugReport(value)
       .then(
           (data)=>{
            //    if(data.error){
            //     setValue({...value,error:data.error})
            //    }else{
            //        setValue({
            //         bug:" ",
            //         email:" ",
            //         steps:" ",
            //         error:" ",
            //         loading:false
            //        })
            //    }
            console.log(data);
           }
       )
       .catch(e => console.log(e))
   }
    return (
        <div>
            <TextField
                label="Bug"
                placeholder="what's the bug"
                className={classes.text}
                value={bug}
                onChange={handleChange("bug")}
            />
            <TextField
                label="Email"
                placeholder="Email"
                value={email}
                onChange={handleChange("email")}
            />
            <TextField 
                label="Steps to reproduce the bug"
                placeholder="Breif the steps"
                className={classes.text}
                value={steps}
                onChange={handleChange("steps")}
            />
            <Button variant="contained" color="success" onClick={onSubmit}>submit</Button>
        </div>
    )
})


export default Bugreport
