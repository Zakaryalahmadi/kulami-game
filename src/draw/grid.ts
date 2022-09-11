const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 800

const grid = (ctx: CanvasRenderingContext2D) =>{
    
    let ecart = 80
    
        for(let i = ecart; i < CANVAS_WIDTH; i += ecart){
            ctx.beginPath();
            ctx.moveTo(0,i)
            ctx.lineTo(CANVAS_WIDTH, i);
            ctx.lineWidth=1;
            ctx.strokeStyle ="black"
            ctx.stroke();
        }

        for(let i = ecart; i < CANVAS_HEIGHT; i += ecart){
            ctx.beginPath();
            ctx.moveTo(i,0)
            ctx.lineTo(i, CANVAS_HEIGHT);
            ctx.stroke();
        }
}


export default grid