function selectScreen(index) {

    for (let i=0; i<screens.children.length; i++) {
        if (i == index) screens.children[i].hidden = false;
        else screens.children[i].hidden = true;
    }
    

}

//const menuScreen = document.getElementById('menu-screen')

menu.onclick = function (event) {
    if (event.target.tagName != "BUTTON") return;

    for (let i = 0; i<menu.children.length; i++) {
        if (menu.children[i] == event.target.parentElement) {
            selectScreen(i);
            break
        }
    }
}