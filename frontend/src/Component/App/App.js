import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import Home from "../Home/Home"
import "./App.css"


const App = () => {
    const [openHome , setOpenHome] = useState(false)

    return (
        <div>
            
            <button 
              className="chatbot-icon-btn"
              onClick={()=>setOpenHome(!openHome)}
            >
                <Icon icon="simple-icons:chatbot" color="black" style={{fontSize:'64px'}} className="chatbot-icon" />
            </button>
            {
                openHome && <Home />
            }

        </div>
    )
}

export default App
