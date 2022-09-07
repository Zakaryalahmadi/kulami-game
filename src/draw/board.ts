const SQUAREFOURPOINTWIDTH = 180

let RECTTHREEPOINTWIDTH = 90

let RECTTWOPOINTWIDTH = 180

let RECTSIXPOINTWIDTH = 270

const board = (ctx: CanvasRenderingContext2D) => {
    

    const roundRect = (ctx: any ,x:number, y:number, w:number, h:number, r?:number) => {

        let radius = 25;
    
        ctx.beginPath();
        ctx.moveTo(x+ (r || radius), y);
        ctx.lineWidth = 5;
        ctx.arcTo(x+w, y, x+w, y+h, (r || radius)); // Top right radius 
        ctx.arcTo(x+w, y+h, x,   y+h, (r || radius));
        ctx.arcTo(x,   y+h, x,   y,   (r || radius));
        ctx.arcTo(x,   y,   x+w, y,   (r || radius));
        ctx.closePath();
        ctx.lineWidth=5;
        ctx.fillStyle="#BA8C63"
        ctx.fill()
        ctx.strokeStyle = "#260d03"
        ctx.stroke();
        
    }


    // valeur pas automatique faudra automatiser ces valeurs.
    

    roundRect(ctx, 5, 5, SQUAREFOURPOINTWIDTH, SQUAREFOURPOINTWIDTH)
    roundRect(ctx, 5, 2*95 + 5, SQUAREFOURPOINTWIDTH, SQUAREFOURPOINTWIDTH)
    roundRect(ctx, 3*95 + 5, 95 + 5, SQUAREFOURPOINTWIDTH, SQUAREFOURPOINTWIDTH)
    roundRect(ctx, 5*95 + 5, 4*95 + 5, SQUAREFOURPOINTWIDTH, SQUAREFOURPOINTWIDTH)
    roundRect(ctx, 6*95 + 5, 6*95 + 5, SQUAREFOURPOINTWIDTH, SQUAREFOURPOINTWIDTH)




    // rect 3 point

    

    roundRect(ctx, 190, 5, RECTTHREEPOINTWIDTH, RECTTHREEPOINTWIDTH*3)
    roundRect(ctx, 285 + 5, 5, RECTTHREEPOINTWIDTH*3, RECTTHREEPOINTWIDTH)
    roundRect(ctx, 5, 475 + 5, RECTTHREEPOINTWIDTH, RECTTHREEPOINTWIDTH*3)
    roundRect(ctx, 475 + 5, 285 + 5, RECTTHREEPOINTWIDTH*3, RECTTHREEPOINTWIDTH)

    //Rect 2 point

    

    roundRect(ctx, 5, 380, RECTTWOPOINTWIDTH, RECTTWOPOINTWIDTH/2)
    roundRect(ctx, 5*95, 95 + 5, RECTTWOPOINTWIDTH/2, RECTTWOPOINTWIDTH)
    roundRect(ctx, 3*95, 5*95 + 5, RECTTWOPOINTWIDTH, RECTTWOPOINTWIDTH/2)
    roundRect(ctx, 7*95, 4*95 + 5, RECTTWOPOINTWIDTH/2, RECTTWOPOINTWIDTH)

    //Rect 6point
    

    roundRect(ctx, 2*95 + 5, 3*95 + 5, RECTSIXPOINTWIDTH, RECTSIXPOINTWIDTH - 90)
    roundRect(ctx, 95 + 5, 5*95 + 5, RECTSIXPOINTWIDTH - 90, RECTSIXPOINTWIDTH)
    roundRect(ctx, 3*95 + 5, 6*95 + 5, RECTSIXPOINTWIDTH, RECTSIXPOINTWIDTH - 90)
    roundRect(ctx, 6*95 + 5, 5, RECTSIXPOINTWIDTH - 90, RECTSIXPOINTWIDTH)

    
}


export default board