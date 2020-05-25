import React,{useEffect, useState} from 'react';

import {BrowserRouter,Link} from 'react-router-dom';

import Axios from 'axios';
import '../styles/Items.css';

export default function Items(props){

    const [items, setItems] = useState("None");

    useEffect(()=>{
        window.scrollTo(0,0);
        let items;
        Axios.get('/categories').then((result)=>{
            console.log(result)
            if(result.status === 200){
                items = result.data.map((i,index)=>{
                    return(
                        <Link to={"/purchase/"+i._id} className="item" key={i.title}>
                            <img src={"images/titlepictures/"+i.titlePicture} />
                            <h3>{i.title}</h3>
                            <h4>&euro;{i.price}</h4>
                            {/* <h4>{i.category.toUpperCase()}</h4> */}
                        </Link>);
                    })
                
                
                console.log(items)
                
            }
    
            setItems(items);
        });
    },[]);

    return(
        <section id="item-container">
            <h1>Featured Items : </h1>
            {items}
        </section>
    );
}