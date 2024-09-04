// Define an async function named fetchData
async function fetchData() {
    // Use the fetch method to send a GET request to the specified URL and wait for the response
      const response = await fetch('https://cnt-4cfff13b-6f6b-4753-ac25-a92b5df796b4.containerhub.tripleten-services.com/api/v1/warehouses');
      // Use the json method on the response object to extract the data from the response body and wait for it to be parsed
      const data = await response.json();    
      console.log(data);
  }
  
  // Call the fetchData function to execute it
  fetchData();