const getWords = async () => {
    console.log('In getWords');

    const apiUrl = 'https://ee98qt6an2.execute-api.us-east-2.amazonaws.com/test';
    const apiKey = 'AHq559oDgvajhtXir2lYU4R8oDb57tlB7oP8EZUV'

    fetch(apiUrl, {
      headers: {
        'Content-Type': 'Application/json',
        'Authorization':  'Bearer ${apiKey}'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:',   error));

}

export default getWords;

