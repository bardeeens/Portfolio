var myPhotos =["koreanstreet.jpg","thaistatue.jpg"];
var button = document.getElementById("randomButton")
button.addEventListener("click", generate)
console.log(myPhotos);
console.log(Math.floor(Math.random()*myPhotos.length));

function generate(){
let randomIndex = Math.floor(Math.random()*(myPhotos.length+1));
let randomPhoto = myPhotos[randomIndex];
const img = document.getElementById("img");

if (randomIndex < myPhotos.length){
    img.setAttribute("style", "visibility: visible")
    img.setAttribute("src", `assets/css/${randomPhoto}`)
} else {
    img.setAttribute("style", "visibility: hidden")
}


}