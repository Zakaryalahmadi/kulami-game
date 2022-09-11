 import {Player} from './Player';
 export class Piece{
    width: number;  //dimension pour la fct draw 
    height : number ; //dimension pour la fct draw 
    x : number; 
    y : number; 
    size : number ; 
    // cases : number[][];
    owner : Player|any; // pour calculer le gagnant chaque piece appartient à l'un des joueurs
    
    constructor(x:number, y: number ,width:number,height: number,size : number , owner:string|Player = "null"){
        this.width = width ; 
        this.height = height;
        this.x = x ; 
        this.y = y ; 
        this.size = size ;
        this.owner = owner ;
        //six points
        // if (size === 6){
        //     let t = new Array(3);
        //     for (let i = 0; i < size; i++){
        //         t[i] = new Array(2);
        //     }
        //     this.cases =  t ; 
        // }
        // // 4 points 
        // if (size === 4){
        //     let t = new Array(3);
        //     for (let i = 0; i < size; i++){
        //         t[i] = new Array(2);
                
        //     }
        //     this.cases =  t ; 
        // }
        // // 3 points
        // if (size === 3){
        //     let t = new Array(3);
        //     this.cases =  t ; 

        // // 2 points
        // }else if (size === 2){
        //     let t = new Array(2);
        //     this.cases =  t ; 
        // }
        
        
    }
    draw(x:number, y:number){
        ctx.fillRect(x, y, this.width, this.height);
    }
    
}

