import { useState } from 'react'
import "./styles.css";

function AddItem(){
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescripition]=useState('')
    const[date,setDate]=useState('')

    function addNewItem(){
       fetch("http://localhost:3333/create",{
           method:'POST',
           body:JSON.stringify({name,price,description}),
           headers:new Headers({
               'Content-Type':'application/json',
               'Accept':'application/json'
           })
        })
    .then(response => response.json()) 

    .then(json => console.log(json))
    .then(()=>document.location.reload(true))
    }

    return(
        <div className="add-new-items">
            <input placeholder={'name'} 
            value={name} type='text'
            onChange={(e)=>{ setName(e.target.value) }}/>

            <input placeholder={'price'} 
            value={price} type='text'
            onChange={(e)=>{ setPrice(e.target.value) }}/>

            <input placeholder={'descripition'}
            value={description} type='text'
            onChange={(e)=>{ setDescripition(e.target.value) }}/>

            <input
            placeholder={'date'}
            value={date} type='date'
            onChange={(e)=>{ setDate(e.target.value) }}/>

            <button type='submit' onClick={addNewItem}>adicionar</button>
        </div>
    )
}

export default AddItem;