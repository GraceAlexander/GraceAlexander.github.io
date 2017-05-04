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
        white = green
        var minx;
        var maxx;
        var miny;
        var maxy;

        // G
        garray=[[60, 23],
                [52, 21],
                [45, 20],
                [37, 21],
                [30, 24],

                [26, 30],
                [25, 35],
                [25, 42],
                [25, 50],
                [26, 57],
                [30, 65],

                [37, 68],
                [45, 70],
                [52, 68],
                [60, 65],
                [60, 60],
                [60, 55],

                [60, 50],
                [55, 50],
                [50, 50]]
        
        for (i = 0; i < garray.length; i++) { 
            
            elem=garray[i]
            //element offset
            elem[1]=elem[1]-10
            balls.push(new Ball(elem[0], elem[1], 0, 0, white));
            
            j=0;
            while(j!=15){
              console.log(elem)
              minx = Math.ceil(elem[0]-3);
              maxx = Math.floor(elem[0]+3);
              x=(Math.random() * (maxx - minx)) + minx;

              miny = Math.ceil(elem[1]-3);
              maxy = Math.floor(elem[1]+3);
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
        radd = 20
        rarray= [
                [65 + radd, 38],
                [70 + radd, 37],
                [75 + radd, 36],
                [80 + radd, 37],
                [85 + radd, 38],

                [60 + radd, 60],
                [60 + radd, 55],
                [60 + radd, 50],
                [60 + radd, 45],
                [60 + radd, 40],
                // [210, 81],
                // [200,85],
                // [195, 80], 

                // [196, 90], 
                // [196, 98], 
                // [196, 106], 
                // [196, 112], 
                // [196, 120], 
                // [196, 128], 

                // [237, 86], 
                // [225, 81]
                ]       
        for (i = 0; i < rarray.length; i++) { 
            elem=rarray[i]
            balls.push(new Ball(elem[0], elem[1], 0, 0, white));
            
            j=0;
            while(j!=10){
              console.log(elem)
              minx = Math.ceil(elem[0]-3);
              maxx = Math.floor(elem[0]+3);
              x=(Math.random() * (maxx - minx)) + minx;

              miny = Math.ceil(elem[1]-3);
              maxy = Math.floor(elem[1]+3);
              y=(Math.random() * (maxy - miny)) + miny;
              balls.push(new Ball(x, y, 0, 0, white));
              j++
            }
            
        }

        aadd = 55
        aarray= [
                [65 + aadd, 38],
                [70 + aadd, 37],
                [75 + aadd, 36],
                [80 + aadd, 37],
                [85 + aadd, 38],

                [60 + aadd, 60],
                [59 + aadd, 55],
                [58 + aadd, 50],
                [59 + aadd, 45],
                [60 + aadd, 40],

                [65 + aadd, 61],
                [70 + aadd, 62],
                [75 + aadd, 63],
                [80 + aadd, 62],
                [85 + aadd, 61],

                [84 + aadd, 60],
                [85 + aadd, 55],
                [86 + aadd, 50],
                [85 + aadd, 45],
                [84 + aadd, 40],

                [58 + aadd + 30, 62],
                [58 + aadd + 30, 65],


                // [210, 81],
                // [200,85],
                // [195, 80], 

                // [196, 90], 
                // [196, 98], 
                // [196, 106], 
                // [196, 112], 
                // [196, 120], 
                // [196, 128], 

                // [237, 86], 
                // [225, 81]
                ]       
        for (i = 0; i < aarray.length; i++) { 
            elem=aarray[i]
            balls.push(new Ball(elem[0], elem[1], 0, 0, white));
            
            j=0;
            while(j!=10){
              console.log(elem)
              minx = Math.ceil(elem[0]-3);
              maxx = Math.floor(elem[0]+3);
              x=(Math.random() * (maxx - minx)) + minx;

              miny = Math.ceil(elem[1]-3);
              maxy = Math.floor(elem[1]+3);
              y=(Math.random() * (maxy - miny)) + miny;
              balls.push(new Ball(x, y, 0, 0, white));
              j++
            }
            
        }
        cadd = 95
        carray= [
                [65 + cadd, 38],
                [70 + cadd, 37],
                [75 + cadd, 36],
                [80 + cadd, 37],
                [85 + cadd, 38],

                [60 + cadd, 60],
                [59 + cadd, 55],
                [58 + cadd, 50],
                [59 + cadd, 45],
                [60 + cadd, 40],

                [65 + cadd, 60],
                [70 + cadd, 62],
                [75 + cadd, 63],
                [80 + cadd, 62],
                [85 + cadd, 60],

                


                // [210, 81],
                // [200,85],
                // [195, 80], 

                // [196, 90], 
                // [196, 98], 
                // [196, 106], 
                // [196, 112], 
                // [196, 120], 
                // [196, 128], 

                // [237, 86], 
                // [225, 81]
                ]       
        for (i = 0; i < carray.length; i++) { 
            elem=carray[i]
            balls.push(new Ball(elem[0], elem[1], 0, 0, white));
            
            j=0;
            while(j!=10){
              console.log(elem)
              minx = Math.ceil(elem[0]-3);
              maxx = Math.floor(elem[0]+3);
              x=(Math.random() * (maxx - minx)) + minx;

              miny = Math.ceil(elem[1]-3);
              maxy = Math.floor(elem[1]+3);
              y=(Math.random() * (maxy - miny)) + miny;
              balls.push(new Ball(x, y, 0, 0, white));
              j++
            }
            
        }

        eadd = 135
        earray= [
                [65 + eadd, 38],
                [70 + eadd, 37],
                [75 + eadd, 36],
                [80 + eadd, 37],
                [85 + eadd, 38],

                [60 + eadd, 60],
                [59 + eadd, 55],
                [58 + eadd, 50],
                [59 + eadd, 45],
                [60 + eadd, 40],

                [65 + eadd, 61],
                [70 + eadd, 62],
                [75 + eadd, 63],
                [80 + eadd, 62],
                [85 + eadd, 61],

                
                [85 + eadd, 45],
                [80 + eadd, 48],
                [75 + eadd, 48],
                [70 + eadd, 48],
                [65 + eadd, 48],
            


                // [210, 81],
                // [200,85],
                // [195, 80], 

                // [196, 90], 
                // [196, 98], 
                // [196, 106], 
                // [196, 112], 
                // [196, 120], 
                // [196, 128], 

                // [237, 86], 
                // [225, 81]
                ]       
        for (i = 0; i < earray.length; i++) { 
            elem=earray[i]
            balls.push(new Ball(elem[0], elem[1], 0, 0, white));
            
            j=0;
            while(j!=10){
              console.log(elem)
              minx = Math.ceil(elem[0]-3);
              maxx = Math.floor(elem[0]+3);
              x=(Math.random() * (maxx - minx)) + minx;

              miny = Math.ceil(elem[1]-3);
              maxy = Math.floor(elem[1]+3);
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
        // while(obj.tagName != 'BODY') {
          top += obj.offsetTop;
          left += obj.offsetLeft;
          obj = obj.offsetParent;
        // }

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

      