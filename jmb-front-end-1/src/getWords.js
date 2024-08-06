const getWords = async () => {
    console.log('In getWords');

    const apiUrl = 'https://ee98qt6an2.execute-api.us-east-2.amazonaws.com/test';
    const apiKey = 'AHq559oDgvajhtXir2lYU4R8oDb57tlB7oP8EZUV'

    const wordMap = new Map();
    try{
      const apiResponse = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'Application/json',
          'Authorization':  'Bearer ${apiKey}'
        }
      });
      const jsonData = await apiResponse.json();
      const data_type = typeof jsonData;
      console.log('Data type is ' + data_type);
      if(jsonData) {
        for (const key in jsonData) {
          const item = jsonData[key];
          wordMap.set(item.jumbled_word, item.Word);
        }
      }
      else {
        console.error('api Response failed to return an object');
      }
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }

    if(wordMap.size > 0) {
      console.log ('Returning from getWords ' + wordMap.keys + ' ' + wordMap.values);
      wordMap.forEach(element => {
        console.log(element);
      });
    }
    else {
      console.log ('Returning empty list');
    }

    return wordMap;
}

export default getWords;


