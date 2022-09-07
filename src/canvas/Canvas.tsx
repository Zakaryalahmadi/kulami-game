import React, {useRef, useEffect, forwardRef} from 'react'
import * as S from './Canvas.styles'

// Un type qui va nous permettre d'acceder au props du composant
type CanvasProps =  React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>,  HTMLCanvasElement> &{
    draw : (ctx : CanvasRenderingContext2D) => void;
} 


const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
    ({draw, ...props}, canvasRef ) =>{

        

        useEffect(()=>{
            

            if(!canvasRef) return;

            const canvas = (canvasRef as React.RefObject<HTMLCanvasElement>).current;
            if(!canvas) return
            
            canvas.addEventListener('click', (e)=>{
                console.log()
            })
            
            const context = canvas.getContext('2d');
            if(!context) return

            draw(context)

        }, [draw,canvasRef])

        if(!canvasRef) return null;

        return (<S.Canvas width={950} height={950} ref={canvasRef as any} {...props}/>);
    }
)

export default Canvas