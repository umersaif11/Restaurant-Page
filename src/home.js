import backimage from "./bgimg.png";
function home(){
    const contentDiv = document.getElementById("content");
    
    const introDiv = document.createElement("div");
    introDiv.setAttribute("id", "introDiv");

    const bgImage = document.createElement("img");
    bgImage.setAttribute("id", "bg-image");
    bgImage.setAttribute("src", backimage);
    introDiv.appendChild(bgImage);

    const restaurantIntroDiv = document.createElement("div");
    restaurantIntroDiv.setAttribute("id", "restaurantIntroDiv");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.setAttribute("id", "welcomeDiv");
    welcomeDiv.textContent = "Welcome to Urban Bites'";

    const paraDiv = document.createElement("div");
    paraDiv.setAttribute("id", "paraDiv");
    paraDiv.textContent = `Experience the best flavors and 
    freshest ingredients in a warm, friendly atmosphere. Whether 
    you’re craving a classic burger or our famous spicy wings, we’ve 
    got something for everyone. `

    const paraTwoDiv = document.createElement("div");
    paraTwoDiv.setAttribute("id", "paraTwoDiv");
    paraTwoDiv.textContent = `Visit us today and enjoy great food, great 
    company, and great memories! `;

    restaurantIntroDiv.appendChild(welcomeDiv);
    restaurantIntroDiv.appendChild(paraDiv);
    restaurantIntroDiv.appendChild(paraTwoDiv);

    const hourAndInfoDiv = document.createElement("div");
    hourAndInfoDiv.setAttribute("id", "hourAndInfoDiv");

    const hourDiv = document.createElement("div");
    hourDiv.setAttribute("id", "hourDiv");

    const infoDiv = document.createElement("id", "infoDiv");
    infoDiv.setAttribute("id", "infoDiv");

    hourAndInfoDiv.appendChild(hourDiv);
    hourAndInfoDiv.appendChild(infoDiv);

    contentDiv.appendChild(introDiv);
    contentDiv.appendChild(restaurantIntroDiv);
    contentDiv.appendChild(hourAndInfoDiv);
}


export {home};