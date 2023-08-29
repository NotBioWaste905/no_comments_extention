// var comms = document.getElementsByClassName("replies_wrap");
const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBtn");
hideBtn.addEventListener("click",() => {
    const elements = document.querySelectorAll("answers");
    elements.forEach(element => {
    element.style.display = "none";
    });
    alert(elements.length)
})
showBtn.addEventListener("click",() => {
    var commsList = [].slice.call(comms)
    commsList.forEach(element => {
       element.style.display = ''; 
    });
})