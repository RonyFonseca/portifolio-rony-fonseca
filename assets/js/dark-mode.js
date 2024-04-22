let linkCss = document.querySelector("#link-css")
let img = document.querySelector("#eu-img")
const chk = document.querySelector("#chk")

chk.addEventListener("change", () => {
    if(linkCss.getAttribute("href") == "assets/style/dark.css"){
        linkCss.setAttribute("href", "assets/style/style.css")
        img.setAttribute("src","assets/imgs/eu-sem-borda-azul.png")
    }else if (linkCss.getAttribute("href") == "assets/style/style.css"){
        linkCss.setAttribute("href", "assets/style/dark.css")
        img.setAttribute("src","assets/imgs/eu-black.png")
    }
})