window.onload = function(){

  
  var arrow = document.getElementById("arrow");
  var n = 9;

  // first loop
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      console.log("delay function " + i);
      console.log("delay function " + n);
      arrow.style.opacity = n/10;
      n--;
    }, 100 * i);
  };
  
  var o = 1;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = o/10;
      o++;
    }, 1000 + (100 * i));
  };
  
  // second loop
  
  var p = 9;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = p/10;
      p--;
    }, 2000 + (100 * i));
  };

  var q = 1;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = q/10;
      q++;
    }, 3000 + (100 * i));
  };
  
  // third loop
  
  var r = 9;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = r/10;
      r--;
    }, 4000 + (100 * i));
  };
  
  var s = 1;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = s/10;
      s++;
    }, 5000 + (100 * i));
  };
  
  // fourth loop
  
  
  var t = 9;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = t/10;
      t--;
    }, 6000 + (100 * i));
  };
  
  var u = 1;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = u/10;
      u++;
    }, 7000 + (100 * i));
  };
  
  // fade out completely
  
  var v = 9;
  
  for (i = 1; i <=10; i++) {
    setTimeout(function(){
      arrow.style.opacity = v/10;
      v--;
    }, 8000 + (100 * i));
  };
  

};