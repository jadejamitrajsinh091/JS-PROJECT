async function Check() 
{
  let city = document.getElementById("input").value.trim();
  
  let result = document.getElementById("result");
  
  result.innerHTML = "";


  if (!city) 
  {
    result.innerHTML = "Please enter a city name.";
    return;
  }
  
  try {

    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b5e66cce44bf0850c3afcb5584c5a0a&units=metric`);
    
    let data = await api.json();
    
    if (data.cod !== 200)
    {
      throw new Error(data.message || "City Not Found");
    }
    
    result.innerHTML = `Temperature in ${data.name} : ${data.main.temp}°C 
    </br> 
    Wind speed : ${data.wind.speed}
    </br>
    Weather : ${data.weather[0].main}
    `;
    
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
}