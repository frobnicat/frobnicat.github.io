document.addEventListener('keydown', logKey);

let heroX = 100;
let heroY = 50;

function logKey(e) {
  keylog.textContent = ` ${e.code}`;
  //document.getElementById("hero").style.left = "200px";
  
  if ( e.code=="ArrowRight" )
  {
    heroX += 10;
    hero.style.left = `${heroX}px`;
  }

  if ( e.code=="ArrowLeft" )
  {
    heroX -= 10;
    hero.style.left = `${heroX}px`;
  }

  if ( e.code=="ArrowDown" )
  {
    heroY += 10;
    hero.style.top = `${heroY}px`;
  }

  if ( e.code=="ArrowUp" )
  {
    heroY -= 10;
    hero.style.top = `${heroY}px`;
  }
}
