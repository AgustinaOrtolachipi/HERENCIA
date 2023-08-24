import { Forma } from "./Forma";

class Triangulo extends Forma{
constructor(ancho: number, alto: number){
    super(ancho,alto);
}

public calcularArea(): number{
    let result = (this.ancho * this.alto) / 2;
    return result;
}
}