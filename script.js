var coll = document.getElementsByClassName("collapse");
var i;

for(i = 0; i < coll.length; i++)
{
    coll[i].addEventListener("click",function(){
        var content = this.nextElementSibling;
        var butt = this.querySelector(".expand");    
        if(content.style.display == "block")
        {
            content.style.display = "none";
            butt.src="images/icon-plus.svg";
        }
        else{
            content.style.display = "block";
            butt.src="images/icon-minus.svg"
        }
    });
}