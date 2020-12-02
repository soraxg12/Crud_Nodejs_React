import { useState } from 'react';
import "./styles.css";

function Items(props){
    const[edit,setEdit]=useState(false)
    const[n,setName]=useState('')
    const[p,setPrice]=useState('')
    const[des,setDescripition]=useState('')
    const[dat,setDate]=useState('')

    function Delete(id){
        fetch('http://localhost:3333/delete/' + id, {
        method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        .then(()=>document.location.reload(true))

    } 
    
    function Update(id){
    const name = n||props.name
    const price = p||props.price
    const description = des||props.description
    const date = dat||props.date

    fetch('http://localhost:3333/update/' + id, {
    method: "PUT",
    body: JSON.stringify(
        {name,price,description,date}
    ),
    headers:new Headers( {
    "Content-type" : "application/json; charset=UTF-8"
    })
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(()=>document.location.reload(true))
    }

    return(
        <div key={props.id} className="items-content">
             <div className='item-model'>
                {edit ?
                    <>
                        <input  defaultValue={props.name}
                         value={n||props.name} type='text'
                         onChange={(e)=>{ setName(e.target.value) }}
                        />

                        <input  defaultValue={props.price}
                        value={p||props.price} type='text'
                        onChange={(e)=>{ setPrice(e.target.value) }}
                        />

                        <input defaultValue={props.description}
                        value={des||props.description} type='text'
                        onChange={(e)=>{ setDescripition(e.target.value) }}
                        />

                        <input  defaultValue={props.date}
                         value={dat||props.date} type='text'
                         onChange={(e)=>{ setDate(e.target.value) }}
                        />
                    </>
                :
                    <>
                        <p>
                        {props.name}
                        </p>
                        <p>
                            {props.price}
                        </p >
                        <p >
                            {props.description}
                        </p>
                        <p >
                            {props.date}
                        </p>
                    </>
                }
             
                <div className='buttons-cotent'>
                  {edit?
                    <button type="submit" className="button-Confirm" onClick={()=>Update(props.id)}>atualizar</button>:
                    <button className="button-delete" onClick={()=>Delete(props.id)}>Delete</button>
                  }
                  
                  <button className="button-edit" onClick={()=>setEdit(!edit)}>{edit?"Cancel":"Edit"}</button>
                  
                </div>
            </div>
        </div>
    )
}

export default Items;