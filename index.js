function getFirstSelector(selector){
  return document.querySelector(selector)
}

<<<<<<< HEAD
function nestedTarget(){
  return document.getElementById("nested").querySelector('div.target')
}

function increaseRankBy(n) {
  const ranked = document.getElementById("app").querySelectorAll("ul.ranked-list");
  
  for (let i = 0; i<ranked.length; i++){
    ranked[i].innerHTML = (i*n).toString();
  }
}

function deepestChild() {
  return document.querySelector("div#grand-node div div div div")
}
=======
nestedTarget()
>>>>>>> ed0a386b2761b2ff9361d8df39c04f70e26b3c92
