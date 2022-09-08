// const CONSTANTE_POUR_POUVOIR_CENTRER = 47
// const RADIUS = 15;
// const POINTS_LEN = 16

// const points = (ctx: CanvasRenderingContext2D, canvasRef:React.RefObject<HTMLCanvasElement>) =>{
//     let coordonnees: number[][] = [];


//     let coork: number[][] = [];

//     for(let i = 1; i < POINTS_LEN; i+=2){

        
//         for(let j = 1; j < POINTS_LEN; j+=2){
            
//             ctx.beginPath();
//             ctx.arc(i*CONSTANTE_POUR_POUVOIR_CENTRER, j*CONSTANTE_POUR_POUVOIR_CENTRER, RADIUS, 0, 2 * Math.PI);
//             ctx.fillStyle = "#140601"
//             ctx.fill();
            
//             coordonnees.push([Math.floor(i*(CONSTANTE_POUR_POUVOIR_CENTRER+0.5)/100 + CONSTANTE_POUR_POUVOIR_CENTRER),Math.floor(j*(CONSTANTE_POUR_POUVOIR_CENTRER+0.5)/100 + CONSTANTE_POUR_POUVOIR_CENTRER) ])
            
//             coork.push([i*(CONSTANTE_POUR_POUVOIR_CENTRER),j*(CONSTANTE_POUR_POUVOIR_CENTRER)])
//         }


//     }

    
//     function includesPerso(tab: number[][], x:number,y:number){
//         for(let i = 0; i < tab.length; i++){
//             if(tab[i].includes(x) && tab[i].includes(y)){
//                 return true
//             }
//         }

//         return false
//     }



//     let canvas = canvasRef.current;

//     if(!canvas) return;

   

//     canvas.addEventListener('mousemove', (e)=>{
//         e.preventDefault();
//         let pos_x = Math.floor(e.clientX/100 + CONSTANTE_POUR_POUVOIR_CENTRER);
//         let pos_y = Math.floor(e.clientY/100 + CONSTANTE_POUR_POUVOIR_CENTRER);


//         if(includesPerso(coordonnees, pos_x, pos_y)){
           
            
//             ctx.beginPath();
//             ctx.arc(47 + 2*(pos_x - CONSTANTE_POUR_POUVOIR_CENTRER)*47,47 + 2*(pos_y - CONSTANTE_POUR_POUVOIR_CENTRER)*47, RADIUS + 10, 0, 2 * Math.PI);

//             ctx.fillStyle = "green"
//             ctx.fill();

            
//         }
        

//     })

    
// }

// export default points



class Point{
    x:number
    y:number

    coordonnees: number[][]


    coork: number[][]


    CONSTANTE_POUR_POUVOIR_CENTRER = 47
    RADIUS = 15;
    POINTS_LEN = 16
    CANVAS_WIDTH = 950

    survol: boolean

    pos_x: number 
    pos_y: number

    constructor() {
        this.x = 47.5
        this.y = 47.5
        this.coordonnees = []
        this.coork = []
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
        

        // console.log(this.coordonnees)
        
        let canvas = canvasRef.current;

        if(!canvas )    return;

        canvas.addEventListener('click', (e)=>{
                e.preventDefault();
                this.pos_x = Math.floor(e.clientX/100 + this.CONSTANTE_POUR_POUVOIR_CENTRER);
                this.pos_y = Math.floor(e.clientY/100 + this.CONSTANTE_POUR_POUVOIR_CENTRER);
        
                console.log(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER, this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)
        
                if(this.includesPerso(this.coordonnees, 47 + 2*(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47, 47 + 2*(this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47)){
                    
                    // formule = 47 + 2*(pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47
                    
                        // this.survol = true;
                        // ctx.beginPath();
                        // ctx.strokeStyle = "#8393eb"
                        // ctx.moveTo(47 + 2*(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47, 0);
                        // ctx.lineTo(47 + 2*(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47, this.CANVAS_WIDTH);
                        // ctx.stroke();
            
                                    
                                    
                        // ctx.moveTo(0,47 + 2*(this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47);
                        // ctx.lineTo(this.CANVAS_WIDTH,47 + 2*(this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47);
                        // ctx.stroke();
                    
                    
                        ctx.beginPath();
                        ctx.arc(47 + 2*(this.pos_x - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47,47 + 2*(this.pos_y - this.CONSTANTE_POUR_POUVOIR_CENTRER)*47, this.RADIUS + 10, 0, 2 * Math.PI);
                        ctx.fillStyle = "green"
                        ctx.strokeStyle="#08401f"
                        
                        ctx.fill();
                        ctx.stroke();


                        
                        

                        
                    
        
                    
                }

               
        
        })

        

       

        for(let i = 1; i < this.POINTS_LEN; i+=2){

            
            for(let j = 1; j < this.POINTS_LEN; j+=2){
                
                ctx.beginPath();
                ctx.arc(i*this.x, j*this.y, this.RADIUS, 0, 2 * Math.PI);
                ctx.fillStyle = "#140601"
                ctx.fill();
                
                this.coordonnees.push([i*(this.CONSTANTE_POUR_POUVOIR_CENTRER),j*(this.CONSTANTE_POUR_POUVOIR_CENTRER)])
                
                this.coork.push([i*(this.CONSTANTE_POUR_POUVOIR_CENTRER),j*(this.CONSTANTE_POUR_POUVOIR_CENTRER)])
            }


        }

        
    }

    

}

export default Point