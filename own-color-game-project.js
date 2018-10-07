var newColors = document.querySelector("#new-colors")
var hardButton = document.querySelector("#hard")
var easyButton = document.querySelector("#easy")
var colorBox = "<span class=\"color-box\"> </span>"
var colorCode = document.querySelector(".right-color-code")
var guessColor = "";
var colorLists = [];
var colorBoxes;
var heading = document.querySelector(".headings")
var text = document.querySelector(".hidden")

randomBoxColor()

newColors.addEventListener('click', function () {
    randomBoxColor()
})
function randomColor() {
    return Math.floor(Math.random() * 255)
}
// document.querySelector(".color-box").style.background = rgb;

hardButton.addEventListener('click', function () {
    document.querySelector(".color-box-container").innerHTML = colorBox.repeat(6);
    randomBoxColor()
    this.classList.add("active")
    easyButton.classList.remove("active")

})
easyButton.addEventListener('click', function () {
    document.querySelector(".color-box-container").innerHTML = colorBox.repeat(3);
    randomBoxColor()    
    this.classList.add("active")
    hardButton.classList.remove("active")

})


function randomBoxColor() {
    colorBoxes = document.querySelectorAll('.color-box');
    var colorList = []
    for (var i = 0; i < colorBoxes.length; i++) {
    var r = randomColor();
    var g = randomColor();
    var b = randomColor();
    var rgb = "rgb(" + r + ", "+ g + ", "+ b + ")"
    colorBoxes[i].style.background = rgb;
    colorList.push(rgb)
}
guessColor = colorList[Math.floor(Math.random() * colorBoxes.length )]
colorCode.innerHTML = guessColor
colorLists = colorList
for (var i = 0 ; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener('click', function() {
        if (guessColor == this.style.background) {
            console.log("Right Answer")
            heading.style.background = guessColor
            for (var i = 0 ; i < colorBoxes.length; i++) {
                colorBoxes[i].style.background = guessColor
                colorBoxes[i].style.opacity = 1;
            }
            text.innerHTML = "You Win"
            text.style.visibility = 'visible'
        }
        else {
            this.classList.add("hide");
            text.innerHTML = "Please Choose Again! "
            text.style.visibility = 'visible'
        }
        
    })
}
}

// random select one

