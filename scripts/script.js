function changePtoColor(color = "black") {
    let allP = document.querySelectorAll("p");
    for (let i = 0; i < allP.length; i++) {
        allP[i].style.color = color
    }
}