function EasterEgg(){
    let wp = 0;
    window.onload = () => {
        document.getElementById("easteregg").addEventListener("click", () => {
            if (wp == 0)
            {
                document.body.style.backgroundImage = "url(./wallhaven-4ywpyk2.jpg)";
                wp = 1;
            }
            else{
                document.body.style.backgroundImage = "url(./wallhaven-4y51vl.jpg)";
                wp = 0;
            }
        })
    }
  }
  
  EasterEgg();