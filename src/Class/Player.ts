export class Player{
    name : string ; 
    lastPlay : number[ ]= new Array(2); // on peut le changer en couple 
    score: number ; 
    constructor(name : string){
        this.name = name;
        this.score = 0 ;
    }
}