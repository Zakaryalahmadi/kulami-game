import { Piece } from '../Class/Piece';
import { Six } from '../Class/Six';
import Board from './board';
import grid from './grid';
import Point from './points';


interface DrawArgs{
    ctx: CanvasRenderingContext2D;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

const draw = ({ctx, canvasRef}: DrawArgs) =>{
    let board = new Board()
    board.draw(ctx);
    grid(ctx);
    let points = new Point()
    points.draw(ctx, canvasRef)
    let piece = new Piece(270,4);
    console.log(piece.width);
    piece.test();
    
    
    
    
}


export default draw