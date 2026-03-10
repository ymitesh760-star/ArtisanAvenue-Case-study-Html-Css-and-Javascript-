function calculateLeadTime(){

let length=document.getElementById("length").value;
let width=document.getElementById("width").value;
let height=document.getElementById("height").value;

let volume=length*width*height;

let days=Math.ceil(volume/10);

document.getElementById("result").innerText="Estimated Time: "+days+" Days";

}