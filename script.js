function init() {
  //  tasks 1
  document.getElementById("first").src = "flower2.png"; // Of course you can choose other file than flower2
  //  tasks 2
  document.getElementById("container").getElementsByTagName("img")[1].src = "flower1.png";
  //  tasks 3 
  document.getElementById("inner").innerHTML= "<div><p> You are great !</p></div>" ;
 // tasks 4
  let image = document.createElement("img");
  image.src="flower2.png";
  var src=document.getElementById("new_element");
  src.appendChild(image);
  //tasks 5
  let spans = document.getElementsByClassName("print"); // fill with proper code
  let colors = ["red", "orange","blue","brown","yellow","black","white"];

for (var i = spans.length - 1; i >= 0; i--) {
  spans[i].style.color = colors[i] ; // fill with proper code
  
}

  //tasks 6
  
  var changeSrc = function(event) {
    if (event.target.src) {
      event.target.src = "flower2.png";
      let filename = event.target.src.replace(/^.*[\\\/]*$/, '');
    }
  };
  
  document.getElementById("event").addEventListener("mouseover", changeSrc);



var changeSrc2 = function(event) {
    if (event.target.src) {
      event.target.src = "flower1.png";
      
    }
  };
document.getElementById("event").addEventListener("mouseout", changeSrc2);

  // adding elements

}

function addItem () {
  var ul = document.getElementById("values");
  var x = document.getElementById("input").value;
  var li = document.createElement("li");
  let text = document.createTextNode(x);
 li.appendChild(text);
 ul.appendChild(li);

  if(document.getElementById("important").checked){
    li.style.color ="red";
  } else if(document.getElementById("groceries").checked){
    li.style["text-decoration"] = "underline";
  } else {

  }
  
}

function removeItem(){
  var ul = document.getElementById("values");
  var index = document.getElementById("remove_input").value;
  ul.removeChild(ul.childNodes[index-1]);


 //ul.removeChild(ul[x]);



}
