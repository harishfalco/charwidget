import React,{useState} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Card , CardHeader , CardContent , CardActions ,Typography,AppBar,Tab,Tabs} from '@material-ui/core/'
import Feedback from "../Feedback/Feedback"
import "./Home.css"


const styles = theme =>({
    card:{
        maxWidth: 400
    },
    navbar:{
        background:'green',
        boxShadow:'none',
        color:"white"
    },
    activeTab:{
        borderRadius:'40px',
        background:"brown",
        margin:"10px",
        color:"white",
    },
    inactiveTab:{
        borderRadius:'50px',
        background:"white",
        margin:"10px",
        color:"black"
    }
})


const Home = withStyles(styles)(({ classes }) => {
    
    const [value,setValue] = useState([
        {
            active:true,
            label:"feedback",
            content:<Feedback />
        },
        {
            active:false,
            label:"FAQ",
            content:"faq"
        },
        {
            active:false,
            label:"bug-report",
            content:"Bug report"
        },
        {
            active:false,
            label:"feature-report",
            content:"feature report"
        },
        {
            active:false,
            label:"contact",
            content:"contact"
        },
    ]);

    const onChange = (e,value)=>{
        setValue(
            value
            .map(tab => ({...tab,active:false}))
            .map((tab,index) => ({...tab,active:index === value}))
        );
    }

    const active = value.findIndex(tab => tab.active);
    console.log(active +" is avtive")
    const content = value[active].content;
     
    
    return (

       <div className="home-layout">
        <Card 
            className={classes.card}
        >
            <CardHeader
            title="Hey there"
            style={{"background":"green", "color":"black"}}
            />
                <AppBar position="static" className={classes.navbar}>
                  <Tabs 
                    value={active} 
                    onChange={onChange} 
                    variant="scrollable"
                    scrollButtons="auto" 
                    allowScrollButtonsMobile //present in mobile with regular width
                  >
                    {
                        value.map((tab)=>(
                            <Tab
                              key={tab.label}
                              label={tab.label}
                              className={active ? classes.activeTab : classes.inactiveTab}
                             />
                        ))
                    }

                </Tabs>
                </AppBar>
                <CardContent>
                    {content}
                </CardContent>  
        </Card>
      </div>
    )
})

export default Home
