import {API} from "./backend"


export const bugReport = (message)=>{
    return fetch(`http://localhost:8000/api/bugReport`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(message)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const feedBack = (message)=>{
    return fetch(`http://localhost:8000/api/feedback`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(message)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}