  var active = true;

  window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  function initBalls() {
    balls = [];

    var blue = '#3A5BCD';
    var red = '#EF2B36';
    var yellow = '#FFC636';
    var green = '#02A817';
    var white = '#ffffff';
    var minx;
    var maxx;
    var miny;
    var maxy;

    // G
    garray=[[163, 63],[148, 53],[133, 52],[120, 53],[107, 58],[100, 70],[92, 82],[94, 96],[95, 107],[100, 120],[114, 130],[129, 136],[142, 136],[156, 136],[164, 127],[169, 110],[156, 109],[146, 110]]
    
    for (i = 0; i < garray.length; i++) { 
        
        elem=garray[i]
        //element offset
        elem[1]=elem[1]-10
        balls.push(new Ball(elem[0], elem[1], 0, 0, white));
        
        j=0;
        while(j!=25){
          minx = Math.ceil(elem[0]-7);
          maxx = Math.floor(elem[0]+7);
          x=(Math.random() * (maxx - minx)) + minx;

          miny = Math.ceil(elem[1]-7);
          maxy = Math.floor(elem[1]+7);
          y=(Math.random() * (maxy - miny)) + miny;
          balls.push(new Ball(x, y, 0, 0, white));
          j++
        }
        
    }
 

    // balls.push(new Ball(163, 63, 0, 0, white));
    // balls.push(new Ball(148, 53, 0, 0, white));
    // balls.push(new Ball(133, 52, 0, 0, white));
    // balls.push(new Ball(120, 53, 0, 0, white));
    // balls.push(new Ball(107, 58, 0, 0, white));
    // balls.push(new Ball(100, 70, 0, 0, white));
    // balls.push(new Ball(92, 82, 0, 0, white));
    // balls.push(new Ball(94, 96, 0, 0, white));
    // balls.push(new Ball(95, 107, 0, 0, white));
    // balls.push(new Ball(100, 120, 0, 0, white));
    // balls.push(new Ball(114, 130, 0, 0, white));
    // balls.push(new Ball(129, 136, 0, 0, white));
    // balls.push(new Ball(142, 136, 0, 0, white));
    // balls.push(new Ball(156, 136, 0, 0, white));
    // balls.push(new Ball(164, 127, 0, 0, white));
    // balls.push(new Ball(169, 110, 0, 0, white));
    // balls.push(new Ball(156, 109, 0, 0, white));
    // balls.push(new Ball(146, 110, 0, 0, white));

    // r
    rarray= [[210, 81],[200,85],[195, 80], 

    [196, 90], [196, 98], [196, 106], 
    [196, 112], [196, 120], [196, 128], 

    [237, 86, ], [225, 81]]       
    for (i = 0; i < rarray.length; i++) { 
        elem=rarray[i]
        balls.push(new Ball(elem[0], elem[1], 0, 0, white));
        
        j=0;
        while(j!=20){
          minx = Math.ceil(elem[0]-7);
          maxx = Math.floor(elem[0]+7);
          x=(Math.random() * (maxx - minx)) + minx;

          miny = Math.ceil(elem[1]-7);
          maxy = Math.floor(elem[1]+7);
          y=(Math.random() * (maxy - miny)) + miny;
          balls.push(new Ball(x, y, 0, 0, white));
          j++
        }
        
    }





    // balls.push(new Ball(210, 81, 0, 0, white));
    // balls.push(new Ball(202, 85, 0, 0, white));
    // balls.push(new Ball(195, 80, 0, 0, white));


    // balls.push(new Ball(196, 90, 0, 0, white));
    // balls.push(new Ball(196, 98, 0, 0, white));
    // balls.push(new Ball(196, 106, 0, 0, white));
    // balls.push(new Ball(196, 112, 0, 0, white));
    // balls.push(new Ball(196, 120, 0, 0, white));
    // balls.push(new Ball(196, 128, 0, 0, white));

    // balls.push(new Ball(237, 86, 0, 0, white));
    // balls.push(new Ball(225, 81, 0, 0, white));

    // a


    var oOffset = 67;
    balls.push(new Ball(oOffset + 210, 81, 0, 0, white));
    balls.push(new Ball(oOffset + 197, 91, 0, 0, white));
    balls.push(new Ball(oOffset + 196, 103, 0, 0, white));
    balls.push(new Ball(oOffset + 200, 116, 0, 0, white));
    balls.push(new Ball(oOffset + 209, 127, 0, 0, white));
    balls.push(new Ball(oOffset + 223, 130, 0, 0, white));
    balls.push(new Ball(oOffset + 237, 127, 0, 0, white));
    balls.push(new Ball(oOffset + 250, 130, 0, 0, white));

    balls.push(new Ball(oOffset + 244, 114, 0, 0, white));
    balls.push(new Ball(oOffset + 242, 98, 0, 0, white));
    balls.push(new Ball(oOffset + 237, 86, 0, 0, white));
    balls.push(new Ball(oOffset + 225, 81, 0, 0, white));

    // c
    balls.push(new Ball(380, 80, 0, 0, white));
    balls.push(new Ball(368, 76, 0, 0, white));
    balls.push(new Ball(356, 79, 0, 0, white));
    balls.push(new Ball(345, 84, 0, 0, white));
    balls.push(new Ball(340, 98, 0, 0, white));
    balls.push(new Ball(340, 110, 0, 0, white));

    balls.push(new Ball(345, 120, 0, 0, white));

    balls.push(new Ball(358, 128, 0, 0, white));
    
    balls.push(new Ball(370, 130, 0, 0, white));
    balls.push(new Ball(380, 128, 0, 0, white));
    // balls.push(new Ball(380, 128, 0, 0, white));

    
    // E
    balls.push(new Ball(426, 101, 0, 0, white));
    balls.push(new Ball(436, 98, 0, 0, white));
    balls.push(new Ball(451, 95, 0, 0, white));
    balls.push(new Ball(449, 83, 0, 0, white));
    balls.push(new Ball(443, 78, 0, 0, white));
    balls.push(new Ball(430, 77, 0, 0, white));
    balls.push(new Ball(418, 82, 0, 0, white));
    balls.push(new Ball(414, 93, 0, 0, white));
    balls.push(new Ball(412, 108, 0, 0, white));
    balls.push(new Ball(420, 120, 0, 0, white));
    balls.push(new Ball(430, 127, 0, 0, white));
    balls.push(new Ball(442, 130, 0, 0, white));
    balls.push(new Ball(450, 125, 0, 0, white));

    return balls;
  }
  function getMousePos(canvas, evt) {
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;
    while(obj.tagName != 'BODY') {
      top += obj.offsetTop;
      left += obj.offsetLeft;
      obj = obj.offsetParent;
    }

    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
      x: mouseX,
      y: mouseY
    };
  }
  function updateBalls(canvas, balls, timeDiff, mousePos) {
    var context = canvas.getContext('2d');

    var collisionDamper = 1;
    var floorFriction = 0.001 * timeDiff;
    var mouseForceMultiplier = .2 * timeDiff;
    var restoreForce = timeDiff/800;

    // var collisionDamper = 0.3;
    // var floorFriction = 0.0005 * timeDiff;
    // var mouseForceMultiplier = 1 * timeDiff;
    // var restoreForce = 0.002 * timeDiff;


    for(var n = 0; n < balls.length; n++) {
      var ball = balls[n];
      // set ball position based on velocity
      ball.y += 4*ball.vy;
      ball.x += 4*ball.vx;

      // restore forces
      if(ball.x > ball.origX) {
        ball.vx -= restoreForce;
      }
      else {
        ball.vx += restoreForce;
      }
      if(ball.y > ball.origY) {
        ball.vy -= restoreForce;
      }
      else {
        ball.vy += restoreForce;
      }

      // mouse forces
      var mouseX = mousePos.x;
      var mouseY = mousePos.y;

      var distX = ball.x - mouseX;
      var distY = ball.y - mouseY;

      var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

      var totalDist = Math.abs(distX) + Math.abs(distY);

      var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
      var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

      if(distX > 0) {// mouse is left of ball
        ball.vx += forceX;
      }
      else {
        ball.vx -= forceX;
      }
      if(distY > 0) {// mouse is on top of ball
        ball.vy += forceY;
      }
      else {
        ball.vy -= forceY;
      }

      // floor friction
      if(ball.vx > 0) {
        ball.vx -= floorFriction;
      }
      else if(ball.vx < 0) {
        ball.vx += floorFriction;
      }
      if(ball.vy > 0) {
        ball.vy -= floorFriction;
      }
      else if(ball.vy < 0) {
        ball.vy += floorFriction;
      }

      // floor condition
      if(ball.y > (canvas.height - ball.radius)) {
        ball.y = canvas.height - ball.radius - 2;
        ball.vy *= -1;
        ball.vy *= (1 - collisionDamper);
      }

      // ceiling condition
      if(ball.y < (ball.radius)) {
        ball.y = ball.radius + 2;
        ball.vy *= -1;
        ball.vy *= (1 - collisionDamper);
      }

      // right wall condition
      if(ball.x > (canvas.width - ball.radius)) {
        ball.x = canvas.width - ball.radius - 2;
        ball.vx *= -1;
        ball.vx *= (1 - collisionDamper);
      }

      // left wall condition
      if(ball.x < (ball.radius)) {
        ball.x = ball.radius + 2;
        ball.vx *= -1;
        ball.vx *= (1 - collisionDamper);
      }
    }
  }
  function Ball(x, y, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.origX = x;
    this.origY = y;
    this.radius = 1;
  }
  function animate(canvas, balls, lastTime, mousePos) {

    var context = canvas.getContext('2d');

    // update
    var date = new Date();
    var time = date.getTime();
    var timeDiff = (time - lastTime) % 100;
   
    updateBalls(canvas, balls, timeDiff, mousePos);
    

    lastTime = time;

    context.clearRect(0, 0, canvas.width, canvas.height);

       
    // render
    for(var n = 0; n < balls.length; n++) {
      var ball = balls[n];
      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
      context.fillStyle = ball.color;
      context.fill();
    }

    // request new frame
    requestAnimFrame(function() {
      animate(canvas, balls, lastTime, mousePos);
    });
  }
  var canvas = document.getElementById('myCanvas');
  console.log(canvas)
  var balls = initBalls();
  var date = new Date();
  var time = date.getTime();
  /*
   * set mouse position really far away
   * so the mouse forces are nearly obsolete
   */
  var mousePos = {
    x: 9999,
    y: 9999
  };

  canvas.addEventListener('mousemove', function(evt) {
    var pos = getMousePos(canvas, evt);
    mousePos.x = pos.x;
    mousePos.y = pos.y;
  });

  canvas.addEventListener('mouseout', function(evt) {
    mousePos.x = 9999;
    mousePos.y = 9999;
  });
  animate(canvas, balls, time, mousePos);