const APPkey = "a8e75072cafbdeb1e4142039e44d882c";
const val=document.getElementById('input')

const form = document.querySelector(".top-banner form");
const value=(e)=> {console.log(e.target.value)}

 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = val.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${APPkey}&units=metric`

  
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data)

    const head=document.getElementById('head')
    head.innerText=`${data.name} weather is ${Math.round(data.main.temp)} C and is ${data.weather[0].main}`

    })
    .catch(() => {
     console.log("Error");
    });
  
});

 
 