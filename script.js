window.addEventListener("load",(e) => {
   const expAnd = document.getElementsByClassName("reihe");

    let ausWaShow=false;
    const cB =  document.getElementById("coolerBttn");
    cB.addEventListener("click",(e)=>{
        if(ausWaShow === false){
            document.getElementsByClassName("kategorien")[0].style.display="block";
            cB.childNodes[0].style.transform="rotate(90deg)";
            ausWaShow=true
        }else{
            document.getElementsByClassName("kategorien")[0].style.display="none";
            cB.childNodes[0].style.transform="rotate(0deg)";
            ausWaShow=false;
        }

    });


   for(const c of expAnd){
    c.addEventListener("click",(e)=>{
        if(c.getAttribute("aria-expanded")==="false"){
            c.nextElementSibling.style.display="block";
            c.setAttribute("aria-expanded","true");
            c.getElementsByClassName("button")[0].style.transform="rotate(90deg)";
        }else{
            c.setAttribute("aria-expanded","false");
            c.nextElementSibling.style.display="none";
            c.getElementsByClassName("button")[0].style.transform="rotate(0deg)";
        }
        });
   }

    const dropDowns = document.getElementsByClassName("kat");
    for(const c of dropDowns){
        console.log(c);
        if(c.getElementsByClassName("link")[0] != undefined){
            c.addEventListener("mouseover",function(e){
                c.getElementsByClassName("link")[0].style.visibility="visible";
            });
        
            c.addEventListener("mouseleave",function(e){
                c.getElementsByClassName("link")[0].style.visibility="collapse";
            });
        }
    }
});
