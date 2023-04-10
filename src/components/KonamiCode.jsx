function KonamiCode(){
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
  let konamiPos = 0;
  var audio = new Audio("../tetris.mp3");
    window.addEventListener("keydown", (event) => {
      let nextKey = konamiCode[konamiPos];
      if (event.key.toLowerCase() == nextKey.toLowerCase()){
        konamiPos+=1;
        if (konamiPos == konamiCode.length){
          window.alert("You got the easter egg!")
          konamiPos = 0;
        }
      }
      else{
        konamiPos = 0;
      }
      })
}

export default KonamiCode;