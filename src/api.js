import axios from 'axios'
const Base_Url ="https://jsonplaceholder.typicode.com";

    export const fetchData=async()=>{
        try{
            const response = await axios.get(`${Base_Url}/todos`)
            return response.data
        }
        catch(error){
            console.error("Error fetching data:",error);
            return error;
        }

    }

