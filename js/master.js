//Check if There's Local Storge Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

    //Removwe Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");
        //Add Active  Class On Element With Data Color === Local Storge Item
        if(element.dataset.color === mainColors) {

            //Add Class Active 
            element.classList.add("active");
        }

    });


}

//Random Background Option
let backgroundOption = true;

//variable To Controle The Interval
let backgroundInterval;

//check if there is Local Storge Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

//Check if Random Background Local Storge is not Empty
if (backgroundLocalItem !== null ) {

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;

    } else {

        backgroundOption = false
    }

    //Remove Active Class From Spans
    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".random-background .yes").classList.add("active");

    } else {

        document.querySelector(".random-background .no").classList.add("active");

    }
}

//toggle Spin Class for Icon
document.querySelector(".set-icon .fa-cog").onclick = function () {

    //Animate Icon
    this.classList.toggle("fa-spin");

    //Open Settings Box
    document.querySelector(".set-box").classList.toggle("open");

};

//Switch Colors

const ColorsLi = document.querySelectorAll(".colors-list li");

//Loop On All List Items
ColorsLi.forEach(li =>{

    //Click On Every List Items
    li.addEventListener("click", (e) => {

        //Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //Set Color On Local Storge
        localStorage.setItem("color_option", e.target.dataset.color);

        //Removwe Active Class From All children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

        });

        //Add Active Class Onself
        e.target.classList.add("active");

    });

});

//Switch Random Background Opition

const randomBackEl = document.querySelectorAll(".random-background span");

//Loop On All Spans
randomBackEl.forEach(span =>{

    //Click On Every List Items
    span.addEventListener("click", (e) => {

        //Removwe Active Class From All children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

        });

        //Add Active Class Onself
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {
            
            backgroundOption = true;

            randomizImgs();

            localStorage.setItem("background_option", true);

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }

    });

});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//get Array of Imgs
let imgsArray = ["12.jpg", "13.jpg", "14.jpg", "15.jpg"];

//Function To Randomize Imgs
function randomizImgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            //get random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            //change background Image url
            landingPage.style.backgroundImage = 'url("image/' + imgsArray[randomNumber] + '")';
        }, 1000);

    }
}

randomizImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    //skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;

    //window scroll top
    let windowScrollTop = this.pageYOffest;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        this.console.log('section reached');

        let allSkills = document.querySelectorAll(".skill-box .skill-prog span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });
    }

};

// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        //Creat Overlay Element
        let overlay = document.createElement("div");

        //Add Class to Overlay
        overlay.className = 'popup-overlay';

        //Append Overlay TO The body
        document.body.appendChild(overlay);

        //Creat Popup 
        let popupBox = document.createElement("div");

        //Add Class to The Popup Box
        popupBox.className = 'popup-box';

        if  (img.alt !== null) {

            //Creat Heading
            let imgHeading = document.createElement("h3");

            //Creat Text For Heading
            let imgText = document.createTextNode(img.alt);

            //Append The Text to The Heading
            imgHeading.appendChild(imgText);

            //Appened the Heading To The Popup Box
            popupBox.appendChild(imgHeading);
            
        }

        //Creat The Image
        let popupImage = document.createElement("img");

        //Set Image Source 
        popupImage.src = img.src;

        //Add Image To Popup Box
        popupBox.appendChild(popupImage);

        //Append The Popup Box to Body
        document.body.appendChild(popupBox);

        //Creat The Close Spane
        let closeButton = document.createElement("span");

        //Creat The Close Button Text 
        let closeButtonText = document.createTextNode("×");

        //Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        //Add Class To Close Button
        closeButton.className = 'close-button';

        //Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);
    });

});

//Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        //Remove The Current Popup
        e.target.parentNode.remove();

        //Remove Overlay
        document.querySelector(".popup-overlay").remove();


    }
})

//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

//Select All Linkes Menu
const allLinks = document.querySelectorAll(".links a");

function scrollSections(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
            });
    
        });
    
    });

}

scrollSections(allBullets);
scrollSections(allLinks);

//Handle Active State
function handleActive(ev) {

    //Remove Activ class from all childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove(".zctive");

    });

    //Add active cladd onself
    ev.target.classList.add(".active");

}

//handleActive(e); هستخدمها مكان الاكواد اللي هستخدم فيها اكتيف زي صندوق التعديلات ع الموقع