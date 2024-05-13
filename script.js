
const imgs= document.querySelectorAll(".body-section ul img");
const prvBtn = document.querySelector(".pre-btn");
const nxtBtn = document.querySelector(".nxt-btn");
let n=0;
function nextImages(){
    for (let i = 0; i < imgs.length; i++) {
       imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block"
}
nextImages();
prvBtn.addEventListener("click",(e)=>{
    if (n>0) {
        n--;
    } else {
        n= imgs.length-1
    } 
    nextImages();
})
nxtBtn.addEventListener("click",()=>{
    if(n < imgs.length -1) {
        n ++ ;
    }else{
        n= 0;
    }
    nextImages();
})
document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the class down-list-name
    var downList = document.querySelector('.down-list-name');

    // Add click event listener to trigger the ul
    downList.addEventListener('click', function() {
        var ul = this.querySelector('ul'); // Select the ul inside down-list-name
        ul.style.display = 'block'; // Toggle visibility
    });
});