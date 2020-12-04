function isTouching(ob1,ob2){
    if((ob1.x-ob2.x < ob1.width/2+ob2.width/2) && (ob2.x-ob1.x < ob1.width/2+ob2.width/2)
    && (ob1.y-ob2.y < ob1.height/2+ob2.height/2) && (ob2.y-ob1.y < ob1.height/2+ob2.height/2)){
      return true;
    }
     else
    {
      return false;
    }
    }
    function bounceOff(m,f){
      if (m.x - f.x < f.width/2 + m.width/2
        && f.x - m.x < f.width/2 + m.width/2) {
      m.velocityX = m.velocityX * (-1);
      f.velocityX = f.velocityX * (-1);
    }
    if (m.y - f.y < f.height/2 + m.height/2
      && f.y - m.y < f.height/2 + m.height/2){
      m.velocityY = m.velocityY * (-1);
      f.velocityY = f.velocityY * (-1);
    }
    }