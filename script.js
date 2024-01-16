//dark mode :D

function toggle() {
    let element = document.body;
    element.classList.toggle('dark-mode');
}

//navigation :D

function openNav() {
    document.getElementById('navigation').style.width = '250px';
}

function closeNav() {
    document.getElementById('navigation').style.width = '0';
}