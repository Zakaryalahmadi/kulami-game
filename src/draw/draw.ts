import board from './board';
import points from './points';


interface DrawArgs{
    ctx: CanvasRenderingContext2D;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

const draw = ({ctx, canvasRef}: DrawArgs) =>{

    board(ctx)
    points(ctx, canvasRef)
    
    
}


export default draw