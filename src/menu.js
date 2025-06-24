function menu(){
    const contentDiv = document.getElementById("content");

    const burgerMenu = document.createElement("div");
    burgerMenu.setAttribute("id", "burgerMenu");

    const friesMenu = document.createElement("div");
    friesMenu.setAttribute("id", "friesMenu");

    const wingsMenu = document.createElement("div");
    wingsMenu.setAttribute("id", "wingsMenu");

    contentDiv.appendChild(burgerMenu);
    contentDiv.appendChild(friesMenu);
    contentDiv.appendChild(wingsMenu);
}
export {menu};