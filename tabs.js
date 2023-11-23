//tutorial I followed: https://youtu.be/fI9VM5zzpu8?si=H5LZSBthYQ--4LDO

const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabsList.setAttribute("role", "tablist"); //screen readers tell user they're on a tablist

tabsList.querySelectorAll("li").forEach((listitem) => {
    listitem.setAttribute("role", "presentation") //screen reader doesn't read li items (only <a> tags inside them)
});

tabButtons.forEach((tab, index) => {
    tab.setAttribute("role", "tab"); //we have to add it, because we deleted <li> role
    if (index === 0) {
        tab.setAttribute("aria-selected", "true"); //adds selected attribute for a selected tab
    } else {
        tab.setAttribute("tabindex", "-1"); //you better have a good reason when you do this, here it is used so you can't tab through them (you have to navigate them using keys instead)
        tabPanels[index].setAttribute("hidden",""); 
    }
});

tabPanels.forEach((panel) => {
    panel.setAttribute("tabIndex", "0"); //set so users (using assistive technology) can select the tab content
    panel.setAttribute("role", "tabpanel");
});

tabsContainer.addEventListener("click", (e) =>{
    const clickedTab = e.target.closest("a"); //looks for a closest link to where we clicked
    if(!clickedTab) return; //if clickedTab === null, stop executing the function
    e.preventDefault(); //prevent default event from happening (e is the event itself)
    switchTab(clickedTab);
});

tabsContainer.addEventListener("keydown", (e) => {
    console.log(e);
    switch (e.key) {
        case "ArrowLeft":
            e.preventDefault();
            moveLeft();
            break;
        case "ArrowRight":
            e.preventDefault(); 
            moveRight();
            break;
        case "Home":
            e.preventDefault(); //stops the page from scrolling
            switchTab(tabButtons[0]);
            break;
        case "End":
            e.preventDefault();
            switchTab(tabButtons[tabButtons.length - 1]);
            break;
    }
});

function moveLeft() {
    const currentTab = document.activeElement; //we'll only use this function when we're inside tab-contianer
    if (!currentTab.parentElement.previousElementSibling) { 
       switchTab(tabButtons[tabButtons.length - 1]); //switching to the last tab, if we're on the first one
    } 
    else {
    switchTab(currentTab.parentElement.previousElementSibling.querySelector("a"));
    }
}

function moveRight() {
    const currentTab = document.activeElement; //we'll only use this function when we're inside tab-contianer
    if (!currentTab.parentElement.nextElementSibling) { 
       switchTab(tabButtons[0]);
    } 
    else {
    switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
    }
}

function switchTab(newTab) {
    const activePanelID = newTab.getAttribute('href');
    const activePanel = tabsContainer.querySelector(activePanelID);
    tabButtons.forEach((button) => {
        button.setAttribute("aria-selected", false);
        button.setAttribute("tabindex", "-1");
    })
    
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden", false);

    newTab.setAttribute("aria-selected", true); //adds selected attribute to a button, when clicked
    newTab.setAttribute("tabindex", "0");
    newTab.focus();
};