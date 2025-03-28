function changeBackground(element) {
switch (element) {
case "normal":
document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(49, 49, 49) 0%, #ffffff 100%)";
break;
case "fire":
document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(240, 145, 81) 0%, #ffffff 100%)";
break;
case "water":
document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(59, 158, 175) 0%, #ffffff 100%)";
break;
case "grass":
document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(95, 163, 63) 0%, #ffffff 100%)";
break;
case "flying":
document.getElementById("center").style.background =
"linear-gradient(180deg, rgb(199, 239, 247) 0%, #ffffff 100%)";
break;
case "fighting":
document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(131, 45, 45) 0%, #ffffff 100%)";
break;
case "poison":
document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(106, 44, 156) 0%, #ffffff 100%)";
    break;
case "electric":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(255, 240, 76) 0%, #ffffff 100%)";
    break;
case "ground":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(102, 48, 17) 0%, #ffffff 100%)";
    break;
case "rock":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(43, 41, 40) 0%, #ffffff 100%)";
    break;
case "psychic":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(250, 158, 193) 0%, #ffffff 100%)";
    break;
case "ice":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(154, 255, 242) 0%, #ffffff 100%)";
    break;
case "bug":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(165, 255, 157) 0%, #ffffff 100%)";
    break;
case "ghost":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(233, 220, 255) 0%, #ffffff 100%)";
    break;
case "steel":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(85, 85, 85) 0%, #ffffff 100%)";
    break;
case "dragon":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(22, 10, 126) 0%, #ffffff 100%)";
    break;
case "dark":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(12, 6, 37) 0%, #ffffff 100%)";
    break;
case "fairy":
    document.getElementById("center").style.background =
    "linear-gradient(180deg, rgb(255, 133, 239) 0%, #ffffff 100%)";
    break;
default:
}
}