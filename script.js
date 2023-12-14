window.addEventListener("load",(e) => {
   const expAnd = document.getElementsByClassName("reihe");

    let ausWaShow=false;
    document.getElementById("coolerBttn").addEventListener("click",(e)=>{
        if(ausWaShow === false){
            document.getElementsByClassName("kategorien")[0].style.display="block";
            ausWaShow=true
        }else{
            document.getElementsByClassName("kategorien")[0].style.display="none";
            ausWaShow=false;
        }

    });


   for(const c of expAnd){
    c.addEventListener("click",(e)=>{
        if(c.getAttribute("aria-expanded")==="false"){
            c.nextElementSibling.style.display="block";

            c.setAttribute("aria-expanded","true");
        }else{
            c.setAttribute("aria-expanded","false");
            c.nextElementSibling.style.display="none";
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
