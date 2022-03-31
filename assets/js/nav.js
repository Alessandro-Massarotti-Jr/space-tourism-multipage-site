const openBtn = document.querySelector(".openBtn")
const closeBtn = document.querySelector(".closeBtn")
const mobileNav = document.querySelector(".mobileMenu nav")
openBtn.addEventListener("click", () => {
    mobileNav.classList.add("active")
    openBtn.classList.remove("active")
    closeBtn.classList.add("active")
})
closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    closeBtn.classList.remove("active")
    openBtn.classList.add("active")
})