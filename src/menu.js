function menu(){
    const contentDiv = document.getElementById("content");

    const burgerMenu = document.createElement("div");
    burgerMenu.setAttribute("id", "burgerMenu");

    const menuHeading = document.createElement("div");
    menuHeading.setAttribute("id", "menuHeading");
    menuHeading.textContent = "Our Menu";
    const burgerHeading = document.createElement("div");
    burgerHeading.setAttribute("id", "burgerHeading");
    burgerHeading.textContent = "Burgers";

    const cheeseBurger = document.createElement("div");
    cheeseBurger.setAttribute("id", "cheeseBurger");

    const cheeseBurgerHeading = document.createElement("div");
    cheeseBurgerHeading.setAttribute("id", "cheeseBurgerHeading");
    cheeseBurgerHeading.textContent = "Classic CheeseBurger";
    const cheeseBurgerIngredients = document.createElement("div");
    cheeseBurgerIngredients.setAttribute("id", "cheeseBurgerIngredients");
    cheeseBurgerIngredients.textContent = `Juicy beef patty, cheddar cheese,
    lettuce, tomato, onion, and house sauce on a toasted bun.`;
    const cheeseBurgerPrice = document.createElement("div");
    cheeseBurgerPrice.setAttribute("id", "cheeseBurgerPrice");
    cheeseBurgerPrice.textContent = "$8.99";

    cheeseBurger.appendChild(cheeseBurgerHeading);
    cheeseBurger.appendChild(cheeseBurgerIngredients);
    cheeseBurger.appendChild(cheeseBurgerPrice);

    const baconBurger = document.createElement("div");
    baconBurger.setAttribute("id", "baconBurger");

    const spicyBurger = document.createElement("div");
    spicyBurger.setAttribute("id", "spicyBurger");

    burgerMenu.appendChild(menuHeading);
    burgerMenu.appendChild(burgerHeading);
    burgerMenu.appendChild(cheeseBurger);
    burgerMenu.appendChild(baconBurger);
    burgerMenu.appendChild(spicyBurger);

    const friesMenu = document.createElement("div");
    friesMenu.setAttribute("id", "friesMenu");

    const wingsMenu = document.createElement("div");
    wingsMenu.setAttribute("id", "wingsMenu");

    contentDiv.appendChild(burgerMenu);
    contentDiv.appendChild(friesMenu);
    contentDiv.appendChild(wingsMenu);
}
export {menu};