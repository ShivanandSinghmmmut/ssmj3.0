var burger = document.getElementById("burger");
        var sidenav = document.getElementById("sidenav");
        sidenav.style.right = "-1000px";
        
        burger.onclick = function () {

            if (sidenav.style.right == "-1000px") {
                
                sidenav.style.right = "0";
                

            } else {
                sidenav.style.right = "-1000px";
                
            }
        }