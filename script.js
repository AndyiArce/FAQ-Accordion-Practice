var coll = document.getElementsByClassName("collapse");
var i;

for(i = 0; i < coll.length; i++)
{
    // adds an event listener to ea. current collapse button
    coll[i].addEventListener("click",function(){
        // in each event listener we check if the nextSibling (the content text next to the button)
        // has the style of display set to block or hidden and set it to the oppisite.
        var content = this.nextElementSibling;
        // this butt variable just holds the object for our +/- image
        // so we can update the image to the other.
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