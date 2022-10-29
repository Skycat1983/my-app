import React, { useEffect, useState } from "react";
import MultipleInteractionCard from "./MultipleInteractionCard";

function Fetch() {

const [fetchData, setFetchData] = useState ("");
const [gameTitle, setGameTitle] = useState ("");
const [gamePic, setGamePic] = useState("");



const fetchN64 = async () => {
  const url = "";
  const response = await fetch(url)
  const result = await response.json()
  console.log("async results", result);
  setFetchData(result.results)
  setGameTitle(result.results.name)
}

// type: run once
useEffect (() => { 
  fetchN64()
},[])

return (
<>
  <div><MultipleInteractionCard games = {fetchData}/></div> 
</>
)
}


export default Fetch


// QUESTION: //? part 1: why does the code below not return what i want it to return when executed within the fetchN64 function?
//!   console.log(result.results.name);
//? part 2: what do i need to do in future so that i can access specific variables within 

// const [game, setGame] = useState ([]);


































// prop = variable a component can pass in to one of its children components //? Q. does it also work the other way? variables from child ton parent? if not, why not? 
// {} denotes referencing JS  

//! object destructuring:  props is an object with values inside of it.  destructuring is the act of taking items from within an object and making it its own variable. EXAMPLE:  
//? Component : <Employee firstName= "jack" lastName= "smith" />
//* const {firstName, lastName} = props; 
