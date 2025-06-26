function about(){
    const contentDiv = document.getElementById("content");

    const aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("id","aboutContainer");

    contentDiv.appendChild(aboutContainer);

    const aboutHeading = document.createElement("div");
    aboutHeading.setAttribute("id", "aboutHeading");
    aboutHeading.textContent = "About Us";

    const firstPara = document.createElement("div");
    firstPara.setAttribute("id","firstPara");
    firstPara.textContent = `Founded in 2010, Our Restaurant
     has been dedicated to serving fresh, delicious food made
     from locally sourced ingredients. Our passion for quality
     and community drives everything we do.`

    const secondPara = document.createElement("div");
    secondPara.setAttribute("id","secondPara");
    secondPara.textContent = `Our chefs combine traditional
     recipes with modern twists to bring you unique flavors 
     that satisfy every palate. We believe dining should be 
     an experience — one that brings people together in a warm
     and welcoming space. `;

    const thirdPara = document.createElement("div");
    thirdPara.setAttribute("id","thirdPara");
    thirdPara.textContent = `Thank you for choosing us. 
    We look forward to serving you soon! `;

    aboutContainer.appendChild(aboutHeading);
    aboutContainer.appendChild(firstPara);
    aboutContainer.appendChild(secondPara);
    aboutContainer.appendChild(thirdPara);
}
export {about};