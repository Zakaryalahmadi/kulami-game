const CONSTANTE_POUR_POUVOIR_CENTRER = 47.5
const RADIUS = 15;
const POINTS_LEN = 16

const points = (ctx: CanvasRenderingContext2D, canvasRef:React.RefObject<HTMLCanvasElement>) =>{
    let coordonnees: number[][] = [];

    for(let i = 1; i < POINTS_LEN; i+=2){

        
        for(let j = 1; j < POINTS_LEN; j+=2){
            
            ctx.beginPath();
            ctx.arc(i*CONSTANTE_POUR_POUVOIR_CENTRER, j*CONSTANTE_POUR_POUVOIR_CENTRER, RADIUS, 0, 2 * Math.PI);
            ctx.fillStyle = "#140601"
            ctx.fill();
            
            coordonnees.push([Math.floor(i*CONSTANTE_POUR_POUVOIR_CENTRER/100),Math.floor(j*CONSTANTE_POUR_POUVOIR_CENTRER/100)])
            
            
        }


    }

    // console.log(canvasRef.current)

    console.log(coordonnees[0])

    let canvas = canvasRef.current;

    if(!canvas) return;

    // for(let i = 0; i < )

    // canvas.addEventListener('click', (e)=>{
    //     let pos_x = Math.floor(e.clientX/100);
    //     let pos_y = Math.floor(e.clientY/100);

    //     if(coordonnees.includes([0,0])){
    //         console.log('ok')
    //     }

    // })

    

    // console.table(coordonnees)
    
}

export default points