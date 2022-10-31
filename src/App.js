import logo from "./logo.svg";
import Home from "./views/Home";
import "./App.css";

function App() {
  const person = {
    name: "raul",
    secondName: "hernandez",
  };

  const array = ["raul", "hernandez"];
  const { name, secondName } = person;
  // console.log(secondName)
  console.log(array[0]);
  const [test1, test2] = array;

  console.log(test2);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// QUESTIONS

// Q how can i override styles from framework?

// Q. what is happening when the prop is received looking like an object? for example, instead of: 'function MultipleInteractionCard(props)', we have function MultipleInteractionCard({props, otherthing})

// Q. part a): why does the code below not return what i want it to return when executed within the fetchN64 function?
//!   console.log(result.results.name);
// NOTE: i think it's something to do with the fact that it is reult.results, then an index number . name?
// part b)|: what do i need to do in future so that i can access specific variables within

// Q. inside the Fetch component i had this code:
//*  const [fetchData, setFetchData] = useState ("");
// and then inside the nested fetchN64 function i have this code:
//!   console.log("fetch", fetchData)
// ... why does this SOMETIMES work? see console log

// Q. this heart import thing and subheading spacing is not working can't figure out why

// Q. when does the jsx return get read? what is the meaming or implication of nested returns in the jsx section?

// Q. the following code was in MultipleIjnteractionCard component:
// useEffect(() => { //! this part of code returns 'useEffect is not defined'. this code was featured in supplementary 'when does useeffect run' picture. the intention was to check that re-renders only runs when props is updated
//   console.count("re-renders:") //? should the jsx code also be within this?
//   }, [props]);

// problem! dont create state in component that calls child
//! 4 react best practices. 4:30 make components for specific logic types?
//no sibling elements when returning from function or conditional. use <> instead of div where possible because this creates no node in dom
// proptypes
