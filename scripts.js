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
 

  
  