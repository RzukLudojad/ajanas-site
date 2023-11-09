var colors = {
    "UX (IA)" : "#2d5487",
    "UI" : "#229145",
    "User Research" : "#b8276b",
    "Service Design" : "#799b37",
    "Mobile" : "#bf7822",
    "Web" : "#40a689",
    "UX Writing" : "#3a38a0",
    "UTesting" : "#a03082",
    "Facilitation" : "#8b8622",
    "Management" : "#973333", 
};

const pills = document.getElementsByClassName("pill");
for (let i = 0; i < pills.length; i++){
    let pill = pills[i];
    let pillText = pill.innerHTML;
    pill.style.backgroundColor = colors[pillText]};