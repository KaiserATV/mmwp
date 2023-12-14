window.addEventListener("load",(e) => {
   const expAnd = document.getElementsByClassName("expand");

    let ausWaShow=false;
    document.getElementsByClassName("coolerBttn")[0].addEventListener("mousedown",(e)=>{
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
        if(c.getElementsByClassName("unter")[0].style.display === ("none")){
            c.getElementsByClassName("unter")[0].style.display="block";
        }else{
            c.getElementsByClassName("unter")[0].style.display="none";
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
