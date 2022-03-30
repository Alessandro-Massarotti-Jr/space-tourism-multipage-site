// fetch("assets/json/destination.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));

async function changeData(selectedPlanet){
    const response = await fetch("assets/json/destination.json")
    const json = await response.json();
    var data = json.filter(function (planet) {
        return planet.name == selectedPlanet
      });
      const planetName = document.getElementById("planetName")
      const planetText = document.getElementById("planetText")
      const planetDistance = document.getElementById("planetDistance")
      const planetTravelTime = document.getElementById("planetTravelTime")
      const planetImage = document.getElementById("planetImage")
      planetName.textContent = data[0].name
      planetText.textContent = data[0].text
      planetDistance.textContent = data[0].distance
      planetTravelTime.textContent = data[0].travelTime
      planetImage.src = data[0].image
      planetImage.alt = data[0].name
}

const menus = document.querySelectorAll(".menu-item")

menus.forEach(menu =>{
    menu.addEventListener('click', () =>{

        const menuValue = menu.getAttribute("value")
        document.querySelector(".menu-item.active").classList.remove("active")
        menu.classList.add("active")
        changeData(menuValue)
    })})


