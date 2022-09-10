class Point{
    x:number
    y:number

    coordonnees: number[][]


    // coork: number[][]


    CONSTANTE_POUR_POUVOIR_CENTRER = 47
    RADIUS = 15;
    POINTS_LEN = 16
    CANVAS_WIDTH = 950

    survol: boolean

    pos_x: number 
    pos_y: number

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

    draw(ctx: CanvasRenderingContext2D, canvasRef:React.RefObject<HTMLCanvasElement>){

        for(let i = 1; i < this.POINTS_LEN; i+=2){

            
            for(let j = 1; j < this.POINTS_LEN; j+=2){

                ctx.save();
                
                ctx.beginPath();

                
                ctx.arc(i*this.x, j*this.y, this.RADIUS, 0, 2 * Math.PI);
                ctx.fillStyle = "#140601"
                ctx.fill();
                
                this.coordonnees.push([i*(this.CONSTANTE_POUR_POUVOIR_CENTRER),j*(this.CONSTANTE_POUR_POUVOIR_CENTRER)])
                
                // this.coork.push([i*(this.CONSTANTE_POUR_POUVOIR_CENTRER),j*(this.CONSTANTE_POUR_POUVOIR_CENTRER)])
            }


        }
        

        // console.log(this.coordonnees)
        
        let canvas = canvasRef.current;

        if(!canvas )    return;

        canvas.addEventListener('mousemove', (e)=>{
                e.preventDefault();
                this.pos_x = Math.floor(e.clientX/100 + this.CONSTANTE_POUR_POUVOIR_CENTRER);
                this.pos_y = Math.floor(e.clientY/100 + this.CONSTANTE_POUR_POUVOIR_CENTRER);
                // let formuleX = 47 + 2*(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47;
                // let formuleY = 47 + 2*(this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47;

                let mouseX = e.clientX;

                let mouseY = e.clientY;


                let formuleX = 47 
                let formuleY = 47

              
                console.log(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)
        

            
                if(mouseX >= 10 && mouseX <= 90
                    
                    && mouseY >= 10 && mouseY <= 90){
                                        
                        ctx.restore();
                        ctx.beginPath();
                        
                        ctx.arc(formuleX,formuleY, this.RADIUS, 0, 2 * Math.PI);
                        ctx.fillStyle = "green"
                        // ctx.strokeStyle="#08401f"
                        
                        ctx.fill();
                        // ctx.stroke();


        
                    
                }else{
                    ctx.restore();
                    ctx.beginPath();
                    ctx.arc(formuleX,formuleY, this.RADIUS, 0, 2 * Math.PI);
                    ctx.fillStyle = "#140601"
                    
                    ctx.fill();
                }

               
        
        })

        


        
    }

    

}

export default Point