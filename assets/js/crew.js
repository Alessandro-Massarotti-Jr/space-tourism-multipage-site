async function changeData(selectedCrew) {
    const response = await fetch("assets/json/crew.json")
    const json = await response.json();
    var data = json.filter(function (crew) {
        return crew.name == selectedCrew
    });
    const crewName = document.getElementById("crewName")
    const crewOffice = document.getElementById("crewOffice")
    const crewDescription = document.getElementById("crewDescription")
    const crewImage = document.getElementById("crewImage")
    crewName.textContent = data[0].name
    crewOffice.textContent = data[0].office
    crewDescription.textContent = data[0].description
    crewImage.src = data[0].image
    crewImage.alt = data[0].name
}

const menus = document.querySelectorAll(".menu-item")

menus.forEach(menu => {
    menu.addEventListener('click', () => {

        const menuValue = menu.getAttribute("value")
        document.querySelector(".menu-item.active").classList.remove("active")
        menu.classList.add("active")
        changeData(menuValue)
    })
})


