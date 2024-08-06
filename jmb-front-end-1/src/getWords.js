const getWords = async () => {
    console.log('In getWords');

    const apiUrl = 'https://ee98qt6an2.execute-api.us-east-2.amazonaws.com/test';
    //const apiKey = 'AHq559oDgvajhtXir2lYU4R8oDb57tlB7oP8EZUV'

    let jsonData = {};

    await fetch(apiUrl, {
        headers: {
          'Content-Type': 'Application/json',
          'Authorization':  'Bearer ${apiKey}'
        }
    })
    .then((response) => response.json())
    .then ((data) => {
      if (data.statusCode === 200) {
        jsonData = data.body;
       // console.log("****");
        //console.log(jsonData);
       // console.log("****");   
      }
      else {
        console.log("API call failed");
      }
     })
    .catch(console.error);
  

    console.log ('Returning: ' + jsonData);
    return jsonData;
}



export default getWords;


