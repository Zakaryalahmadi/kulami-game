import React, {useRef, useEffect} from 'react'


type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, 
    HTMLCanvasElement
> & {drawGrid: (canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void
     drawPoints:(ctx: CanvasRenderingContext2D) => void
    };

const Canvas: React.FC<CanvasProps> = ({drawPoints,drawGrid , ...props}) =>{
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const roundRect = (ctx: any ,x:number, y:number, w:number, h:number, r?:number) => {

        let radius = 25;
   
        ctx.beginPath();
        ctx.moveTo(x+ (r || radius), y);
        ctx.lineWidth = 5;
        ctx.arcTo(x+w, y,   x+w, y+h, (r || radius)); // Top right radius 
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

    

    useEffect(()=>{
        // console.log(props.width)
        const canvas = canvasRef.current;

        if(!canvas) return;

        const ctx = canvas.getContext('2d');

        if(!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
                
        

        // Square 4 point
        let squareFourPointWidth = 180

    

        roundRect(ctx, 5, 5, squareFourPointWidth, squareFourPointWidth)
        roundRect(ctx, 5, 2*95 + 5, squareFourPointWidth, squareFourPointWidth)
        roundRect(ctx, 3*95 + 5, 95 + 5, squareFourPointWidth, squareFourPointWidth)
        roundRect(ctx, 5*95 + 5, 4*95 + 5, squareFourPointWidth, squareFourPointWidth)
        roundRect(ctx, 6*95 + 5, 6*95 + 5, squareFourPointWidth, squareFourPointWidth)


    

        // rect 3 point

        let rectThreePointWidth = 90

        roundRect(ctx, 190, 5, rectThreePointWidth, rectThreePointWidth*3)
        roundRect(ctx, 285 + 5, 5, rectThreePointWidth*3, rectThreePointWidth)
        roundRect(ctx, 5, 475 + 5, rectThreePointWidth, rectThreePointWidth*3)
        roundRect(ctx, 475 + 5, 285 + 5, rectThreePointWidth*3, rectThreePointWidth)

        //Rect 2 point

        let rectTwoPointWidth = 180

        roundRect(ctx, 5, 380, rectTwoPointWidth, rectTwoPointWidth/2)
        roundRect(ctx, 5*95, 95 + 5, rectTwoPointWidth/2, rectTwoPointWidth)
        roundRect(ctx, 3*95, 5*95 + 5, rectTwoPointWidth, rectTwoPointWidth/2)
        roundRect(ctx, 7*95, 4*95 + 5, rectTwoPointWidth/2, rectTwoPointWidth)

        //Rect 6point
        let rectSixPointWidth = 270
        roundRect(ctx, 2*95 + 5, 3*95 + 5, rectSixPointWidth, rectSixPointWidth - 90)
        roundRect(ctx, 95 + 5, 5*95 + 5, rectSixPointWidth - 90, rectSixPointWidth)
        roundRect(ctx, 3*95 + 5, 6*95 + 5, rectSixPointWidth, rectSixPointWidth - 90)
        roundRect(ctx, 6*95 + 5, 5, rectSixPointWidth - 90, rectSixPointWidth)


           

        //Points
        drawPoints(ctx)

        //Grid
        drawGrid(canvas, ctx)
        

        
    },[drawGrid, drawPoints])

    return (
    <canvas width={props.width} height={props.height} ref={canvasRef}></canvas>
  )
}

export default Canvas
