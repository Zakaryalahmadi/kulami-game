import { Piece } from "./Piece";

export class Six extends Piece{
    cases: any []; // status des cases (vide/blanche/noir)
    
    
    constructor(width:number,height:number,size : number , owner:any = "null"){
        super(270,6,owner);
        let t = new Array(size);
        for (let i = 0; i < size; i++){
            t[i] = new Array(2);
        }
        this.cases = t ;

    }
}