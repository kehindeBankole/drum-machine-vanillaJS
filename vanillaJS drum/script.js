const sound = document.querySelectorAll("#aud")
const pads = document.querySelectorAll(".pads div")
const dis = document.querySelector("#dis")

pads.forEach((sel , index)=>{
sel.addEventListener("click" , ()=>{
sound[index].currentTime=0;
sound[index].play();
})
})
