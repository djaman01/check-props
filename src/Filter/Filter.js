import { useState } from "react";
import { players } from "../players";
import './filter.css';
import Player from "../Player";

export default function Filter() {

  const[name, setName]= useState('');

  const updateName = (event) => setName(event.target.value);

  const filteredArray = players.filter((element,index)=>element.name.toLowerCase().includes(name.toLowerCase())) ;


  return (
    <>
    <input type="text" value={name} onChange={updateName}/>
    <div className="grid-filter">
      {filteredArray.map((e, i)=><Player {...e} key='i'/>)}
    </div>
    </>


  )
}
