function getFirstSelector(selector){
  return document.querySelector(selector)
}

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