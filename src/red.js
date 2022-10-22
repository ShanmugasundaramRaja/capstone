export default function red(){
    const red=document.getElementsByClassName("red")
    for(let i=0;i<red.length;i++){
        red[i].classList.toggle("like")
    }

   
}