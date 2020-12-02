import { useState } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header/header';
import Render from '../../components/Render';
import "./styles.css";

function Crud(){
    const[newItem,setNewItem]=useState(false)
    


    return(
        <div>
            <Header/>
            <div className="content-page-crud">
                <h1>Itens</h1>
                <button onClick={()=>setNewItem(!newItem)}>{newItem?"Cancelar":"+ New Item"}</button>
            </div>
            <Render new={newItem}/>
            <Footer/>
        </div>
    )
}

export default Crud;