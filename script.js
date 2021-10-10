//will flip and unflip the round photo upon mouseover/mouseout
const   img1 = document.getElementById("img1"),
        img2 = document.getElementById("img2");

        img1.addEventListener("mouseover", function(e) {
            img1.style.display = "none";
            img2.style.display = "block";
          });
        img1.onmouseover = function(e){

        };
        onmouseover;

        img1.addEventListener("mouseout", function(e) {
            img2.style.display = "none";
            img1.style.display = "block";
        });
        img1.onmouseout = function (e) {

        }          
        onmouseout;


        
//show text based on button selection

      
        const button1 = document.getElementById("button1"),
        button2 = document.getElementById("button2"),
        aboutTitle = document.getElementById ("aboutTitle"),
        aboutText = document.getElementById("aboutText");
        socialTitle = document.getElementById("socialTitle");
        socialText =document.getElementById("socialText");
        

        button1.addEventListener("click", function(e){
            aboutTitle.style.visibility = "visible",
            aboutText.style.visibility = "visible"
            socialTitle.style.visibility = "hidden",
            socialText.style.visibility = "hidden"
        });

        button1.click = function (e){

        };

        button2.addEventListener("click", function(e){
            socialTitle.style.visibility = "visible",
            socialText.style.visibility = "visible"
            aboutTitle.style.visibility = "hidden",
            aboutText.style.visibility = "hidden"
            
        });

        button2.click = function (e){

        };