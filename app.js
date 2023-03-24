window.onload=function(){
    const canvas=document.querySelector("canvas");
    
    if(canvas && canvas.getContext){
        ctx=canvas.getContext("2d");
        if(ctx){
            //valeur initiale

            ctx.lineWidth="20";
            ctx.strokeStyle="white";

            //le trait

            ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(350,50);
            ctx.stroke();

            ctx.strokeStyle="blue";
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(350,100);
            ctx.stroke();

            ctx.strokeStyle="orange";
            ctx.beginPath();
            ctx.moveTo(50,150);
            ctx.lineTo(350,150);
            ctx.stroke();

            ctx.strokeStyle="red";
            ctx.beginPath();
            ctx.moveTo(0,0)
            ctx.lineTo(350,200);
            ctx.stroke()

            ctx.strokeStyle="purple";
            ctx.beginPath();
            ctx.moveTo(0,250);
            ctx.lineTo(350,450);
            ctx.stroke();

            ctx.fillStyle="red";
            ctx.fillRect(500,200,100,100);

            ctx.lineWidth="1"
            ctx.strokeStyle="white";
            ctx.strokeRect(500,400,100,50);

            ctx.strokeStyle="purple";
            ctx.lineWidth="20"
            ctx.beginPath();
            ctx.moveTo(300,50);
            ctx.lineTo(800,50);
            ctx.stroke();

            ctx.strokeStyle="white";
            ctx.beginPath();
            ctx.moveTo(300,150);
            ctx.lineTo(800,150);
            ctx.stroke();

            ctx.fillStyle="white";
            ctx.fillRect(780,250,50,50);
            

        }
    }
    else{
        alert("Votre navigateur ne supporte pas les canvas");
    }
}