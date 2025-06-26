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

    const baconBurgerHeading = document.createElement("div");
    baconBurgerHeading.setAttribute("id", "baconBurgerHeading");
    baconBurgerHeading.textContent = "BBQ Bacon Burger";
    const baconBurgerIngredients = document.createElement("div");
    baconBurgerIngredients.setAttribute("id", "baconBurgerIngredients");
    baconBurgerIngredients.textContent = `JBeef patty, crispy bacon, onion
     rings, cheddar, and smoky BBQ sauce.`;
    const baconBurgerPrice = document.createElement("div");
    baconBurgerPrice.setAttribute("id", "baconBurgerPrice");
    baconBurgerPrice.textContent = "$10.49";

    baconBurger.appendChild(baconBurgerHeading);
    baconBurger.appendChild(baconBurgerIngredients);
    baconBurger.appendChild(baconBurgerPrice);

    const spicyBurger = document.createElement("div");
    spicyBurger.setAttribute("id", "spicyBurger");

    const spicyBurgerHeading = document.createElement("div");
    spicyBurgerHeading.setAttribute("id", "spicyBurgerHeading");
    spicyBurgerHeading.textContent = "Spicy Jalapeño Burger";
    const spicyBurgerIngredients = document.createElement("div");
    spicyBurgerIngredients.setAttribute("id", "spicyBurgerIngredients");
    spicyBurgerIngredients.textContent = `Beef patty, pepper jack cheese,
     jalapeños, chipotle mayo, and fresh greens.`;
    const spicyBurgerPrice = document.createElement("div");
    spicyBurgerPrice.setAttribute("id", "spicyBurgerPrice");
    spicyBurgerPrice.textContent = "$9.99";

    spicyBurger.appendChild(spicyBurgerHeading);
    spicyBurger.appendChild(spicyBurgerIngredients);
    spicyBurger.appendChild(spicyBurgerPrice);

    burgerMenu.appendChild(menuHeading);
    burgerMenu.appendChild(burgerHeading);
    burgerMenu.appendChild(cheeseBurger);
    burgerMenu.appendChild(baconBurger);
    burgerMenu.appendChild(spicyBurger);

    const friesMenu = document.createElement("div");
    friesMenu.setAttribute("id", "friesMenu");

    const friesHeading = document.createElement("div");
    friesHeading.setAttribute("id", "friesHeading");
    friesHeading.textContent = "Fries";

    const frenchFries = document.createElement("div");
    frenchFries.setAttribute("id", "frenchFries");

    const frenchFriesHeading = document.createElement("div");
    frenchFriesHeading.setAttribute("id", "frenchFriesHeading");
    frenchFriesHeading.textContent = "Classic French Fries";
    const frenchFriesIngredients = document.createElement("div");
    frenchFriesIngredients.setAttribute("id", "frenchFriesIngredients");
    frenchFriesIngredients.textContent = `Golden, crispy fries served 
    with ketchup or house-made aioli.`;
    const frenchFriesPrice = document.createElement("div");
    frenchFriesPrice.setAttribute("id", "frenchFriesPrice");
    frenchFriesPrice.textContent = "$3.49";

    frenchFries.appendChild(frenchFriesHeading);
    frenchFries.appendChild(frenchFriesIngredients);
    frenchFries.appendChild(frenchFriesPrice);

    const loadedFries = document.createElement("div");
    loadedFries.setAttribute("id", "loadedFries");

    const loadedFriesHeading = document.createElement("div");
    loadedFriesHeading.setAttribute("id", "loadedFriesHeading");
    loadedFriesHeading.textContent = "Loaded Fries";
    const loadedFriesIngredients = document.createElement("div");
    loadedFriesIngredients.setAttribute("id", "loadedFriesIngredients");
    loadedFriesIngredients.textContent = `Fries topped with cheese, bacon
     bits, and ranch drizzle.`;
    const loadedFriesPrice = document.createElement("div");
    loadedFriesPrice.setAttribute("id", "loadedFriesPrice");
    loadedFriesPrice.textContent = "$5.99";

    loadedFries.appendChild(loadedFriesHeading);
    loadedFries.appendChild(loadedFriesIngredients);
    loadedFries.appendChild(loadedFriesPrice);

    const spicyFries = document.createElement("div");
    spicyFries.setAttribute("id", "spicyFries");

    const spicyFriesHeading = document.createElement("div");
    spicyFriesHeading.setAttribute("id", "spicyFriesHeading");
    spicyFriesHeading.textContent = "Spicy Cajun Fries";
    const spicyFriesIngredients = document.createElement("div");
    spicyFriesIngredients.setAttribute("id", "spicyFriesIngredients");
    spicyFriesIngredients.textContent = `Fries tossed in our signature 
    Cajun seasoning blend.`;
    const spicyFriesPrice = document.createElement("div");
    spicyFriesPrice.setAttribute("id", "spicyFriesPrice");
    spicyFriesPrice.textContent = "$4.49";

    spicyFries.appendChild(spicyFriesHeading);
    spicyFries.appendChild(spicyFriesIngredients);
    spicyFries.appendChild(spicyFriesPrice);

    friesMenu.appendChild(friesHeading);
    friesMenu.appendChild(frenchFries);
    friesMenu.appendChild(loadedFries);
    friesMenu.appendChild(spicyFries);

    const wingsMenu = document.createElement("div");
    wingsMenu.setAttribute("id", "wingsMenu");

    contentDiv.appendChild(burgerMenu);
    contentDiv.appendChild(friesMenu);
    contentDiv.appendChild(wingsMenu);
}
export {menu};