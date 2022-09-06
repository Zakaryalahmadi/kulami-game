import React, { useRef } from 'react'
import Canvas from '../canvas/Canvas'
import draw from '../draw/draw'


interface GameProps{}

const Game: React.FC<GameProps> = ({}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // console.log(canvasRef.current)

    const drawGame = (ctx: CanvasRenderingContext2D)=>{
        draw({ctx, canvasRef})
    }

    return (
        <Canvas ref={canvasRef} draw={drawGame}/>
    )
}

export default Game
