import React, { useEffect, useState } from "react";
import MultipleInteractionCard from "./MultipleInteractionCard";

function Fetch() {

const [fetchData, setFetchData] = useState ("");
const []

const fetchN64 = async () => {
  const url = "";
  const response = await fetch(url)
  const result = await response.json()
  console.log("async rsults", result);
  setFetchData(result.results)
}

// type: run once
useEffect (() => { 
  fetchN64()
},[])

return (
  <div><MultipleInteractionCard /></div>
)

}


export default Fetch
































// prop = variable a component can pass in to one of its children components //? Q. does it also work the other way? variables from child ton parent? if not, why not? 
// {} denotes referencing JS  

//! object destructuring:  props is an object with values inside of it.  destructuring is the act of taking items from within an object and making it its own variable. EXAMPLE:  
//? Component : <Employee firstName= "jack" lastName= "smith" />
//* const {firstName, lastName} = props; 
