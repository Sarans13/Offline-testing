const apiKey = 'fb-uB-1b1DQ7MQdb3V7euCyTGGYiU_7PMa6mMg8QaYQ'; // Replace with your actual API key

// Get user's current location
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  // Make a request to the HERE Places API to find nearby places
  const url = `https://places.ls.hereapi.com/places/v1/discover/around?at=${latitude},${longitude}&q=restaurant&apiKey=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Display the list of nearby places in the console
      console.log(data.results.items);
    })
    .catch(error => {
      console.error(error);
    });
}, error => {
  console.error(error);
});
