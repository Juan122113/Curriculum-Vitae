document.getElementById("hamburguer").onclick = function () {
  
  document.getElementById("nav").style.display = "contents";
  
  }

document.getElementById("content").onclick = function () {
  
    document.getElementById("nav").style.display = "none";
    
    }

const collection = document.getElementsByClassName("subtitle");

    for (let  i = 0; i < collection.length; i++) {
    
    collection[i].style.backgroundColor = "aliceblue";
    
    }
 
function bigImg(x) {
      x.style.height = "500px";
      x.style.width = "450px";
    }
    
function normalImg(x) {
      x.style.height = "300px";
      x.style.width = "250px";
    }

  
  