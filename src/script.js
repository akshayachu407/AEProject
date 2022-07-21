function newDisplay(){
var list=document.getElementById("name");

console.log(list);

document.getElementById('display').innerText="new";
}
newFooter();


function newFooter(){
    document.getElementById("footer").innerHTML="hello Akshay";
}