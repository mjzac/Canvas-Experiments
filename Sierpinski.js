<script>
var vertex1 = [0,300];
var vertex2 = [500,300];
var vertex3 = [250,0];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath;
ctx.moveTo(250,0);
ctx.lineTo(500,300);
ctx.stroke();
ctx.moveTo(250,0);
ctx.lineTo(0,300);
ctx.stroke();
ctx.moveTo(0,300);
ctx.lineTo(500,300);
ctx.stroke();
var point = [150,50];
(function myLoop (i) {
 setTimeout(function () {
            var vertex = Math.random();
            var dest = [];
            if(vertex<0.333){
            dest = vertex1;
            }else if(vertex<0.666){
            dest = vertex2;
            }else{
            dest = vertex3;
            }
            var x = Math.floor((point[0]+dest[0])/2);
            var y = Math.floor((point[1]+dest[1])/2);
            ctx.fillRect(x,y,1,1);
            
            point[0] = x;
            point[1] = y;
            if (--i) myLoop(i);
            }, 1)
 })(60000);

</script>
