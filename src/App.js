// import React,{useState,useEffect} from "react";
// import { fetchData } from "./api";

// const App=()=>{
//   const[data,setData]=useState([]);

//   const[loading,setLoading]=useState(true);

//   const[error,setError]=useState(null);

//   useEffect(()=>{
//     const getData= async()=>{
//       try{
//         const result=await fetchData();
//         setData(result)
//       }
//       catch(err){
//         setError("Failed to Fetch Data");
//       }
//       finally{
//         setLoading(false)
//       }
//     };
//     getData();
//   },[])
//   if(loading) return <div>Loading .....</div>
//   if(error) return <div>{error}</div>

//   return(
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {data.map((item)=>(
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default App;

import React, { useState, useEffect } from "react";
import { fetchDatawithHeaders } from "./api";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDatawithHeaders();
        setData(result);
      } catch (err) {
        setError("Failed to Fetch Data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <div>Loading .....</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Display Pokémon names
        ))}
      </ul>
    </div>
  );
};

export default App;
