const toggleButton = document.getElementsByClassName('Navbar_togglebutton__1QohO')[0]
const navbarLinks = document.getElementsByClassName('Navbar_navlinks__3uAhe')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})