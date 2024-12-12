let skills = document.querySelector("#info_skills");
let education = document.querySelector("#education");
let personal = document.querySelector("#personalInfo");

let skillsSec = document.querySelector(".skillsSec");
let educationSec = document.querySelector(".educationSec");
let personalSec = document.querySelector(".personalSec");

let menu_icon = document.querySelector(".menu-icon");
let menu_content = document.querySelector(".hamburger-menu-content");

education.addEventListener("click",()=>{
    educationSec.style.display="block";
    skillsSec.style.display="none";
    personalSec.style.display="none";
    education.style.borderBottom = "4px solid red";
    skills.style.borderBottom = "none";
    personal.style.borderBottom = "none";

});

personal.addEventListener("click",()=>{
    personalSec.style.display="block";
    skillsSec.style.display="none";
    educationSec.style.display="none";
    personal.style.borderBottom = "4px solid red";
    skills.style.borderBottom = "none";
    education.style.borderBottom = "none";
});

skills.addEventListener("click",()=>{
    skillsSec.style.display="block";
    educationSec.style.display="none";
    personalSec.style.display="none";
    skills.style.borderBottom = "4px solid red";
    education.style.borderBottom = "none";
    personal.style.borderBottom = "none";

});

menu_icon.addEventListener("click",()=>{
    if(menu_content.style.display=="block"){
        menu_content.style.display="none";
    }
    else{
        menu_content.style.display="block";
    }
})


