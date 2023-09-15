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