// import axios from 'axios'
// const Base_Url ="https://jsonplaceholder.typicode.com";

//     export const fetchData=async()=>{
//         try{
//             const response = await axios.get(`${Base_Url}/todos`)
//             return response.data
//         }
//         catch(error){
//             console.error("Error fetching data:",error);
//             return error;
//         }

//     }

import axios from 'axios';

const Base_Url = "https://pokeapi.co/api/v2";

export const fetchDatawithHeaders = async () => {
  try {
    const headers = {
      'Authorization': 'Bearer your-token-here',
      'Content-Type': 'application/json'
    };
    
    // Pass headers as part of the configuration object, not in the URL
    const response = await axios.get(`${Base_Url}/pokemon`, { headers }); // Correct API endpoint here

    return response.data.results; // Return only the results array
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};
