    var active = true;
    var timeDiff;

    window.mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    var mobile=mobilecheck()
    console.log(mobile)

    if(mobile){
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      var img=document.getElementById("name");
      ctx.drawImage(img,10,10);
      document.getElementById("myCanvas").style.display = "none";
    }
    else{
      document.getElementById("name").style.display = "none";

    }
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
      
