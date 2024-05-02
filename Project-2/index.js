//TEXT CHANGER//

let changer = document.getElementById("text-editor");
let colorinput = document.getElementById("my-color")
let fontsizer = document.getElementById("size-slider");
let invert = document.getElementById("invbutton")

//CHANGE THE TEXT//
function changetext(id) {
    let paragraph = document.getElementById(id)
    paragraph.innerHTML = changer.value;
}

changer.oninput= function (){
    changetext("font1")
    changetext("font2")
    changetext("font3")
    changetext("font4")
    changetext("font5")
    changetext("font6")
}

//CHANGE THE COLOR//
function changecolor (id) {
let colorchanging = document.getElementById(id)
colorchanging.style.backgroundColor = colorinput.value;
}

colorinput.oninput = function (){
    changecolor("font1")
    changecolor("font2")
    changecolor("font3")
    changecolor("font4")
    changecolor("font5")
    changecolor("font6")
}


//TEXT SIZE CHANGER//
function scale(id) {
    let backbox = document.getElementById(id)
    backbox.style.fontSize = fontsizer.value + "px";
    }

fontsizer.oninput = function (){
    scale("font1")
    scale("font2")
    scale("font3")
    scale("font4")
    scale("font5")
    scale("font6")
}





console.log(fontsizer.value);



document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });


  function changeColor(id) {
    var text = document.getElementById(id);
    if (text.style.color === "black") {
      text.style.color = "white";
    } else {
      text.style.color = "black";
    }
}
invert.onclick = function () {
    changeColor("font1")
    changeColor("font2")
    changeColor("font3")
    changeColor("font4")
    changeColor("font5")
    changeColor("font6")
}

