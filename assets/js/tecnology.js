async function changeData(selectedTecnology) {
    const response = await fetch("assets/json/tecnology.json")
    const json = await response.json();
    var data = json.filter(function (tecnology) {
        return tecnology.name == selectedTecnology
    });
    const tecnologyName = document.getElementById("tecnologyName")
    const tecnologyText = document.getElementById("tecnologyText")
    const tecnologyImage = document.getElementById("tecnologyImage")
    const tecnologyMobileImage = document.getElementById("tecnologyMobileImage")
    tecnologyName.textContent = data[0].name
    tecnologyText.textContent = data[0].text
    tecnologyImage.src = data[0].image
    tecnologyMobileImage.src = data[0].mobileImage
    tecnologyImage.alt = data[0].name
    tecnologyMobileImage.alt = data[0].name
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


