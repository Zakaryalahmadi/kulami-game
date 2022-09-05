import React from 'react'
import Canvas from './Canvas'

const WIDTH = 950;
const HEIGHT = 950


const Map = () => {

    let ecart = 95;

    const grid = (canvas: HTMLCanvasElement,ctx: CanvasRenderingContext2D) =>{
        for(let i = ecart; i < canvas.width; i += ecart){
            ctx.beginPath();
            ctx.moveTo(0,i)
            ctx.lineTo(canvas.width, i);
            ctx.lineWidth=1;
            ctx.strokeStyle ="black"
            ctx.stroke();
        }

        for(let i = ecart; i < canvas.height; i += ecart){
            ctx.beginPath();
            ctx.moveTo(i,0)
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
    }

    const cerclePoints = (ctx:CanvasRenderingContext2D) => {
        //cercle
        for(let i = 1; i < 16; i+=2){
            for(let j = 1; j < 16; j+=2){
                ctx.beginPath();
                ctx.arc(i*47.5, j*47.5, 15, 0, 2 * Math.PI);
                ctx.fillStyle = "#140601"
                ctx.fill();
            }
        }
    }


    return (
        <div>
        <Canvas drawPoints={cerclePoints} drawGrid={grid} width={WIDTH} height={HEIGHT}></Canvas>
        </div>
    )
}

export default Map
