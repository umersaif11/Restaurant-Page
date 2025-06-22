import bgimage from "./bgimg.png";
function home(){
    const contentDiv = document.getElementById("content");
    
    const introDiv = document.createElement("div");
    introDiv.setAttribute("id", "introDiv");

    const bgImage = document.createElement("img");
    bgImage.setAttribute("id", "bg-image");
    bgImage.setAttribute("src", bgimage);
    introDiv.appendChild(bgImage);

    contentDiv.appendChild(introDiv);
}


export {home};