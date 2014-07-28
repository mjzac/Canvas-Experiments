<script>

/**
 *
 *  Create a html5 canvas  with id 'myCanvas'
 *
 **/

//vertices of an equilateral triangle
var vertex1 = [0,300];
var vertex2 = [400,300];
var vertex3 = [200,22.51126];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath;

//Recursive implementation for 3 iteration
(function myLoop (i,vertex1,vertex2,vertex3) {
 setTimeout(function () {
            
            //Find center of current vertices
            var point = [(vertex1[0]+vertex2[0]+vertex3[0])/3,(vertex1[1]+vertex2[1]+vertex3[1])/3];
            
            // Find new vertices for sub triangles
            var newVertex1 = [(vertex1[0]+vertex2[0])/2,(vertex1[1]+vertex2[1])/2];
            var newVertex2 = [(vertex2[0]+vertex3[0])/2,(vertex2[1]+vertex3[1])/2];
            var newVertex3 = [(vertex1[0]+vertex3[0])/2,(vertex1[1]+vertex3[1])/2];
            
            //Draw from current center(point) to centers of sub triangles
            var center = [(newVertex1[0]+newVertex3[0]+vertex1[0])/3,(newVertex1[1]+newVertex3[1]+vertex1[1])/3];
            ctx.moveTo(point[0],point[1]);
            ctx.lineTo(center[0],center[1]);
            ctx.stroke();
            
            center = [(newVertex1[0]+newVertex2[0]+vertex2[0])/3,(newVertex1[1]+newVertex2[1]+vertex2[1])/3];
            ctx.moveTo(point[0],point[1]);
            ctx.lineTo(center[0],center[1]);
            ctx.stroke();
            
            center = [(newVertex2[0]+newVertex3[0]+vertex3[0])/3,(newVertex2[1]+newVertex3[1]+vertex3[1])/3];
            ctx.moveTo(point[0],point[1]);
            ctx.lineTo(center[0],center[1]);
            ctx.stroke();
            if (i--){
            // Recursion for sub triangles
            myLoop(i,vertex1,newVertex1,newVertex3);
            myLoop(i,newVertex1,vertex2,newVertex2);
            myLoop(i,newVertex2,newVertex3,vertex3);
            myLoop(i,newVertex1,newVertex2,newVertex3);
            }
            }, 1000)
 })(3,vertex1,vertex2,vertex3);

</script>