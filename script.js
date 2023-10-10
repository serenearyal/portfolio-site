const tabLinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-content")

function openTab(tab){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active");
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active");
    }
    document.getElementById(tab).classList.add('active');
    event.currentTarget.classList.add('active');
}


function closemenu(){
    closeIcon = document.getElementById("navbar");
    closeIcon.style.width= "0px";  

    closeMenu = document.getElementById("closeMenu");
    closeMenu.style.display = "none";

    aLinks = document.getElementsByClassName("menuLink");
    for (var i=0; i < aLinks.length; i++){
        aLinks[i].style.display = "none";
    }
}

function openmenu(){
    closeIcon = document.getElementById("navbar");
    closeIcon.style.width = "150px";
    closeMenu = document.getElementById("closeMenu");
    closeMenu.style.display = "block";

    aLinks = document.getElementsByClassName("menuLink");
    for (var i=0; i < aLinks.length; i++){
        aLinks[i].style.display = "block";
    }
}


//CONTACT FORM INTEGRATION

const scriptURL = 'https://script.google.com/macros/s/AKfycbwlwEuf1tVen450joSI9eeLeQzrLWDwAWtI04GxTchjrATco1M86Wp0goQLJI80og-V/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.style.color = "green"
        msg.innerHTML = "Your message has been sent!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset();
        console.log(response.message)
        
    })
    .catch(error => console.log("Error", error.message))
})