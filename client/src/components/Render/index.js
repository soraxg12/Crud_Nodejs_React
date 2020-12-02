import {useEffect,useState} from 'react';
import AddItem from "../AddItem/addItems";
import Items from "../Items";
import "./styles.css";

function Render(props){
    const[items,setItems]=useState([])

    useEffect(()=>{
        GetItems()
    },[])

    function GetItems(){
        fetch("http://localhost:3333/index")
        .then(res=>res.json())
        .then(data => setItems(data))
        console.log(items)
        items.map(a=>console.log(a.price))
    }

    return(
        <div className="Render-Items">
            <div className='render-items-title'>
                <p>
                    name
                </p>
                <p>
                    price
                </p>
                <p>
                    description
                </p>
                <p>
                    data
                </p>
                <p>
                    actions
                </p>
            </div>

            {props.new&&
                <AddItem/>
            }

            
            {items.map(item=>{
                return(
                <Items id={item._id} name={item.name} price={item.price} description={item.description} date={item.date}/>
                )
            })}
            
        </div>
    )
}

export default Render;