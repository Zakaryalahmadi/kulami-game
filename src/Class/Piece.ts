 import {Player} from './Player';
 export class Piece{
    width: number;  //dimension pour la fct draw 
    //height : number ; //dimension pour la fct draw 
    cases: [[number | string | boolean]]; // status des cases (vide/blanche/noir)
    size : number ; 
    owner : Player|any; // pour calculer le gagnant chaque piece appartient à l'un des joueurs
    
    constructor(width:number,size : number , owner:any = "null"){
        this.width = width ; 
        this.size = size ;
        this.owner = owner ;
         
    }
}