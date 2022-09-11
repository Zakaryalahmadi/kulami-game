export class Board{
    Piece = [];


    GRID_SIZE = 80

    GAP = 5
    SQUAREFOURPOINTWIDTH = this.GRID_SIZE*2 - this.GAP*2

    RECTTHREEPOINTWIDTH = this.GRID_SIZE - this.GAP*2
    RECTTHREEPOINTHEIGH = this.GRID_SIZE*3 - this.GAP*2

    RECTTWOPOINTWIDTH = this.SQUAREFOURPOINTWIDTH
    RECTTWOPOINTHEIGHT = this.RECTTHREEPOINTWIDTH

    RECTSIXPOINTWIDTH = this.GRID_SIZE*3 - this.GAP*2
    RECTSIXPOINTHEIGHT = this.SQUAREFOURPOINTWIDTH

    constructor(){

    }


    roundRect(ctx: any ,x:number, y:number, w:number, h:number, r?:number){

        let radius = 20;
    
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


    sixPointRect(ctx:CanvasRenderingContext2D){
        this.roundRect(ctx, 2*this.GRID_SIZE + this.GAP, 3*this.GRID_SIZE + this.GAP, this.RECTSIXPOINTWIDTH, this.RECTSIXPOINTHEIGHT)
        this.roundRect(ctx, this.GRID_SIZE + this.GAP, 5*this.GRID_SIZE + this.GAP, this.RECTSIXPOINTHEIGHT, this.RECTSIXPOINTWIDTH)
        this.roundRect(ctx, 3*this.GRID_SIZE + this.GAP, 6*this.GRID_SIZE + this.GAP, this.RECTSIXPOINTWIDTH, this.RECTSIXPOINTHEIGHT)
        this.roundRect(ctx, 6*this.GRID_SIZE + this.GAP, this.GAP, this.RECTSIXPOINTHEIGHT, this.RECTSIXPOINTWIDTH)
    }

    foorPointRect(ctx:CanvasRenderingContext2D){
        this.roundRect(ctx, this.GAP, this.GAP, this.SQUAREFOURPOINTWIDTH, this.SQUAREFOURPOINTWIDTH)
        this.roundRect(ctx, this.GAP, 2*this.GRID_SIZE + this.GAP, this.SQUAREFOURPOINTWIDTH, this.SQUAREFOURPOINTWIDTH)
        this.roundRect(ctx, 3*this.GRID_SIZE + this.GAP, this.GRID_SIZE + this.GAP, this.SQUAREFOURPOINTWIDTH, this.SQUAREFOURPOINTWIDTH)
        this.roundRect(ctx, 5*this.GRID_SIZE + 5, 4*this.GRID_SIZE + 5, this.SQUAREFOURPOINTWIDTH, this.SQUAREFOURPOINTWIDTH)
        this.roundRect(ctx, 6*this.GRID_SIZE + 5, 6*this.GRID_SIZE + 5, this.SQUAREFOURPOINTWIDTH, this.SQUAREFOURPOINTWIDTH)
    }

    threePointRect(ctx:CanvasRenderingContext2D){
        this.roundRect(ctx, 2 * this.GRID_SIZE + this.GAP, this.GAP, this.RECTTHREEPOINTWIDTH, this.RECTTHREEPOINTHEIGH)
        this.roundRect(ctx,  this.GRID_SIZE*3 + this.GAP, 5, this.RECTTHREEPOINTHEIGH, this.RECTTHREEPOINTWIDTH)
        this.roundRect(ctx, this.GAP, 5*this.GRID_SIZE+ this.GAP, this.RECTTHREEPOINTWIDTH, this.RECTTHREEPOINTHEIGH)
        this.roundRect(ctx, 5*this.GRID_SIZE + this.GAP, 3*this.GRID_SIZE + this.GAP, this.RECTTHREEPOINTHEIGH, this.RECTTHREEPOINTWIDTH)

    }

    twoPointRect(ctx:CanvasRenderingContext2D){
        this.roundRect(ctx, this.GAP, 4*this.GRID_SIZE + this.GAP, this.RECTTWOPOINTWIDTH, this.RECTTWOPOINTHEIGHT)
        this.roundRect(ctx, 5*this.GRID_SIZE + this.GAP, this.GRID_SIZE + this.GAP, this.RECTTWOPOINTHEIGHT, this.RECTTWOPOINTWIDTH)
        this.roundRect(ctx, 3*this.GRID_SIZE + this.GAP, 5*this.GRID_SIZE + +this.GAP, this.RECTTWOPOINTWIDTH, this.RECTTWOPOINTHEIGHT)
        this.roundRect(ctx, 7*this.GRID_SIZE + this.GAP, 4*this.GRID_SIZE + this.GAP, this.RECTTWOPOINTHEIGHT, this.RECTTWOPOINTWIDTH)
    }


    

    draw(ctx:CanvasRenderingContext2D){
        this.foorPointRect(ctx)
        this.threePointRect(ctx)
        this.twoPointRect(ctx)
        this.sixPointRect(ctx)
    }

}


export default Board