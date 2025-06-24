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

    const hourHeading = document.createElement("div");
    hourHeading.setAttribute("id", "hourHeading");
    hourHeading.textContent = "Our Hours";
    const monToFriDiv = document.createElement("div");
    monToFriDiv.setAttribute("id", "monToFriDiv");
    monToFriDiv.textContent = "Monday – Friday: 11:00 AM – 10:00 PM";
    const satDiv = document.createElement("div");
    satDiv.setAttribute("id", "satDiv");
    satDiv.textContent = "Saturday: 12:00 PM – 11:00 PM";
    const sunDiv = document.createElement("div");
    sunDiv.setAttribute("id", "sunDiv");
    sunDiv.textContent = "Sunday: 12:00 PM – 9:00 PM";

    hourDiv.appendChild(hourHeading);
    hourDiv.appendChild(monToFriDiv);
    hourDiv.appendChild(satDiv);
    hourDiv.appendChild(sunDiv);

    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("id", "infoDiv");

    const infoHeadingDiv = document.createElement("div");
    infoHeadingDiv.setAttribute("id", "infoHeadingDiv");
    infoHeadingDiv.textContent = "Information";
    const infoAddressDiv = document.createElement("div");
    infoAddressDiv.setAttribute("id", "infoAddressDiv");
    infoAddressDiv.textContent = "123 Flavor Street, Foodville, FV 45678";
    const infoPhoneDiv = document.createElement("div");
    infoPhoneDiv.setAttribute("id", "infoPhoneDiv");
    infoPhoneDiv.textContent = "Phone: (555) 123-4567";
    const infoEmailDiv = document.createElement("div");
    infoEmailDiv.setAttribute("id", "infoEmailDiv");
    infoEmailDiv.textContent = "Email: contact@ourrestaurant.com";
    const infoReserveDiv = document.createElement("div");
    infoReserveDiv.setAttribute("id", "infoReserveDiv");
    infoReserveDiv.textContent = "Reservations: (555) 765-4321";

    infoDiv.appendChild(infoHeadingDiv);
    infoDiv.appendChild(infoAddressDiv);
    infoDiv.appendChild(infoPhoneDiv);
    infoDiv.appendChild(infoEmailDiv);
    infoDiv.appendChild(infoReserveDiv);


    hourAndInfoDiv.appendChild(hourDiv);
    hourAndInfoDiv.appendChild(infoDiv);

    contentDiv.appendChild(introDiv);
    contentDiv.appendChild(restaurantIntroDiv);
    contentDiv.appendChild(hourAndInfoDiv);
}


export {home};