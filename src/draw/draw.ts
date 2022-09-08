import board from './board';
import grid from './grid';
import Point from './points';



interface DrawArgs{
    ctx: CanvasRenderingContext2D;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

const draw = ({ctx, canvasRef}: DrawArgs) =>{
    
    board(ctx)
    // grid(ctx)
    let points = new Point()
    points.draw(ctx, canvasRef)
    
}


export default draw