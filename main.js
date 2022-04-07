const dogImage = document.getElementById("dogImage");
const catImage = document.getElementById("catImage");


choosePet.style.display = "flex";
petUI.style.display = "none";


dogImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Spike_Dog.png";
})

catImage.addEventListener("click", () => {
    choosePet.style.display = "none";
    petUI.style.display = "flex";
    petImg.src = "images/Tom_Cat.webp";
})