import { useState, useEffect } from "react";
import { players } from "../players";
import './filter.css';
import Player from "../Player";

export default function Filter() {

  const[name, setName]= useState('');

  const updateName = (event) => setName(event.target.value);

  const filteredArray = players.filter((element,index)=>element.name.toLowerCase().includes(name.toLowerCase())) ;

  //using the useEffect hook to perform action after the component has rendered or when certain dependencies have changed
  //A dependecy is the state variable that the sideEffect function relies on to be executed

  //Le 1er parametre de useEffect est la function qui provoque/handle l'effet
  //Le 2eme parametre est une array: si vide, alors le side effect aura lieu on the first render and that's all
  //If we add state variable inside the array, we call them dependencies, and the useEffect will happen on the first render and when there will be a change on the state

  useEffect(()=>{document.title= `Players page`},[])

  return (
    <>
    <input type="text" value={name} onChange={updateName}/>
    <div className="grid-filter">
      {filteredArray.map((e, i)=><Player {...e} key='i'/>)}
    </div>
    </>


  )
}
