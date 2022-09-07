const CONSTANTE_POUR_POUVOIR_CENTRER = 47.5
const RADIUS = 15;
const POINTS_LEN = 16

const points = (ctx: CanvasRenderingContext2D, canvasRef:React.RefObject<HTMLCanvasElement>) =>{
    let coordonnees: number[][] = [];


    let coork: number[][] = [];

    for(let i = 1; i < POINTS_LEN; i+=2){

        
        for(let j = 1; j < POINTS_LEN; j+=2){
            
            ctx.beginPath();
            ctx.arc(i*CONSTANTE_POUR_POUVOIR_CENTRER, j*CONSTANTE_POUR_POUVOIR_CENTRER, RADIUS, 0, 2 * Math.PI);
            ctx.fillStyle = "#140601"
            ctx.fill();
            
            coordonnees.push([Math.floor(i*CONSTANTE_POUR_POUVOIR_CENTRER/100),Math.floor(j*CONSTANTE_POUR_POUVOIR_CENTRER/100)])
            
            coork.push([i*CONSTANTE_POUR_POUVOIR_CENTRER,j*CONSTANTE_POUR_POUVOIR_CENTRER])
        }


    }

    
    function includesPerso(tab: number[][], x:number,y:number){
        for(let i = 0; i < tab.length; i++){
            if(tab[i].includes(x) && tab[i].includes(y)){
                return true
            }
        }

        return false
    }


    // coordonnees.push([0,0], [0,1], [0,2], [1,2])

    // console.log(canvasRef.current)

    // console.log(includesPerso(coordonnees, 1 ,2))

    let canvas = canvasRef.current;

    if(!canvas) return;

    // for(let i = 0; i < )

    console.log(coork)
   

    canvas.addEventListener('click', (e)=>{
        e.preventDefault();
        let pos_x = Math.floor(e.clientX/100);
        let pos_y = Math.floor(e.clientY/100);


        if(includesPerso(coordonnees, pos_x, pos_y)){
            // alert('la position que vous avez:' + pos_x + ' ' + pos_y)
            console.log("pos =" ,pos_x, pos_y)
            

            
            ctx.beginPath();
            // for(let i = 0; i < coork.length; i++){
            //     for(let j = 0; j < coork.length; j++){
                    
            //     }
            // }

            // ctx.arc((1+pos_x)*coork[pos_x][pos_y],coork[pos_x][pos_y], RADIUS, 0, 2 * Math.PI);

            ctx.fillStyle = "green"
            ctx.fill();
        }
        

    })

    

    // console.table(coordonnees)
    
}

export default points