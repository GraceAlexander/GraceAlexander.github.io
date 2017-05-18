    var active = true;
    var timeDiff;

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
        timeDiff = "first";
        // G
        xoffset = -50
        yoffset = 0
        garray=[[163 + xoffset, 63 + yoffset],[148 + xoffset, 53 + yoffset],
                [133 + xoffset, 52 + yoffset],[120 + xoffset, 53 + yoffset],
                [107 + xoffset, 58 + yoffset],[100 + xoffset, 70 + yoffset],
                [92 + xoffset, 82 + yoffset],[94 + xoffset, 96 + yoffset],
                [95 + xoffset, 107 + yoffset],[100 + xoffset, 120 + yoffset],
                [114 + xoffset, 130 + yoffset],[129 + xoffset, 136 + yoffset],
                [142 + xoffset, 136 + yoffset],[156 + xoffset, 136 + yoffset],
                [164 + xoffset, 127 + yoffset],[169 + xoffset, 110 + yoffset],
                [156 + xoffset, 109 + yoffset],[146 + xoffset, 110 +yoffset]]
        
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
        rarray= [[210 + xoffset, 81 + yoffset],[200 +xoffset,85 + yoffset],
                  [195 + xoffset, 80 + yoffset],[196 + xoffset, 90 + yoffset],
                  [196 + xoffset, 98 + yoffset],[196 + xoffset, 106 + yoffset], 
                 [196 + xoffset, 112 + yoffset],[196 + xoffset, 120 + yoffset],
                 [196 + xoffset, 128 + yoffset], [237 + xoffset, 86 + yoffset],
                 [225 +xoffset, 81 + yoffset]]       
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


        var oOffset = 67 -50;
        oarray= [[oOffset + 210, 81 + yoffset],
                [oOffset + 197, 91 + yoffset],
                [oOffset + 196, 103 + yoffset],
                [oOffset + 200, 116 + yoffset],
                [oOffset + 209, 127 + yoffset],
                [oOffset + 223, 130 + yoffset],
                [oOffset + 237, 127 + yoffset],
                [oOffset + 250, 130 + yoffset],
                [oOffset + 244, 114 + yoffset],
                [oOffset + 242, 98 + yoffset],
                [oOffset + 237, 86 + yoffset],
                [oOffset + 225, 81 + yoffset]]


        for (i = 0; i < oarray.length; i++) { 
            elem=oarray[i]
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

        // c
        carray=
        [[380 + xoffset, 80 + yoffset],
        [368 + xoffset, 76 + yoffset],
        [356 + xoffset, 79 + yoffset],
        [345 + xoffset, 84 + yoffset],
        [340 + xoffset, 98 + yoffset],
        [340 + xoffset, 110 + yoffset],

        [345 + xoffset, 120 + yoffset],

        [358 + xoffset, 128 + yoffset],
        
        [370 + xoffset, 130 + yoffset],
        [380 + xoffset, 128 + yoffset]]
        // balls.push(new Ball(380, 128, 0, 0, white));
        for (i = 0; i < carray.length; i++) { 
            elem=carray[i]
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
        
        // E
        earray=
        [[426 +xoffset, 101 + yoffset],
        [436 +xoffset, 98 + yoffset],
        [451 +xoffset, 95 + yoffset],
        [449 +xoffset, 83 + yoffset],
        [443 +xoffset, 78 + yoffset],
        [430 +xoffset, 77 + yoffset],
        [418 +xoffset, 82 + yoffset],
        [414 +xoffset, 93 + yoffset],
        [412 +xoffset, 108 + yoffset],
        [420 +xoffset, 120 + yoffset],
        [430 +xoffset, 127 + yoffset],
        [442 +xoffset, 130 + yoffset],
        [450 +xoffset, 125 + yoffset]]

        for (i = 0; i < earray.length; i++) { 
            elem=earray[i]
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
        var restoreForce = timeDiff/600;

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
        if(timeDiff!="first"){
          timeDiff = (time - lastTime) % 100;
        }else{
          timeDiff=5000;
        }
        
       
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
      
      function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }
      
