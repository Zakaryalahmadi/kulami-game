class Point{
    private x:number
    private y:number

    private coordonnees: number[][]

    private playerOnePlayed = false
    private colorPlayerOne = "red";
    private colorPlayerTwo = "grey"

    DEVMODE = true

    GRID_SIZE = 80


    // coork: number[][]


    CONSTANTE_POUR_POUVOIR_CENTRER = 40
    RADIUS = 15;
    POINTS_LEN = 16
    CANVAS_WIDTH = 800

    survol: boolean

    private pos_x: number 
    private pos_y: number

    constructor() {
        this.x = 47
        this.y = 47
        this.coordonnees = []
        // this.coork = []
        this.survol = false
        this.pos_x = 0
        this.pos_y = 0 
    }


    includesPerso(tab: number[][], x:number,y:number){
        for(let i = 0; i < tab.length; i++){
            if((tab[i].includes(x) && tab[i].includes(y))
            || (tab[i].includes(y) && tab[i].includes(x))){
                return true
            }
        }

        return false
    }


    drawCercle(ctx:CanvasRenderingContext2D){
        for(let i = 1; i < this.POINTS_LEN; i+=2){

            
            for(let j = 1; j < this.POINTS_LEN; j+=2){
                
                ctx.beginPath();
                ctx.arc(i*this.CONSTANTE_POUR_POUVOIR_CENTRER, j*this.CONSTANTE_POUR_POUVOIR_CENTRER, this.RADIUS, 0, 2 * Math.PI);
                ctx.fillStyle = "#140601"
                ctx.fill();
                
                this.coordonnees.push([i*(this.CONSTANTE_POUR_POUVOIR_CENTRER),j*(this.CONSTANTE_POUR_POUVOIR_CENTRER)])
                
                // this.coork.push([i*(this.CONSTANTE_POUR_POUVOIR_CENTRER),j*(this.CONSTANTE_POUR_POUVOIR_CENTRER)])
            }


        }
    }

    draw(ctx: CanvasRenderingContext2D, canvasRef:React.RefObject<HTMLCanvasElement>){


        this.drawCercle(ctx)
        
        

        // console.log(this.coordonnees)
        
        let canvas = canvasRef.current;

        if(!canvas ) return;

        const rect = canvas.getBoundingClientRect();



        canvas.addEventListener('click', (e)=>{

            

            // console.log(this.coordonnees)
            this.pos_x = Math.floor((e.clientX - rect.left)/this.GRID_SIZE);
            this.pos_y = Math.floor((e.clientY - rect.top)/this.GRID_SIZE);


            // let formuleX = this.CONSTANTE_POUR_POUVOIR_CENTRER + 2*(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*this.CONSTANTE_POUR_POUVOIR_CENTRER;
            // let formuleY = this.CONSTANTE_POUR_POUVOIR_CENTRER + 2*(this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)*this.CONSTANTE_POUR_POUVOIR_CENTRER;
    
            

            // console.log(this.pos_x, this.pos_y)
            console.log(this.coordonnees)
            


            // if(this.DEVMODE){
            //     ctx.fillText("Hello World!", , );
            //     ctx.font = "2px Georgia";
            // }
            
               
        
        })

        

           
   
        

       

        


        
    }

    

}

export default Point