// your code goes here.

const BASE_URL =`http://localhost:3000`

const getJobList = async () => {
  

    // that's going to fetch all the data
    const response = await fetch(`${BASE_URL}/jobs`, {
      method: "GET" 
    })
   
    const data = await response.json()
  
    return data
  }
  
  export { getJobList }