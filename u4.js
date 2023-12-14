window.addEventListener("load",(e) => {
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
