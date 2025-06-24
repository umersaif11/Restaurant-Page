import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";


home();
const headClick = document.getElementById("head");
const contentDiv = document.getElementById("content");
headClick.addEventListener("click", (e) => {
    console.log(e.target.id);
    if(e.target.id === "home"){
        contentDiv.innerHTML = "";
        home();
    }
    if(e.target.id === "menu"){
        contentDiv.innerHTML = "";
        menu();
    }
});
console.log("Hello Odinite!");