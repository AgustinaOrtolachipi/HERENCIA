export default Rectangulo;


import { Forma } from "./Forma";

class Rectangulo extends Forma{
constructor(ancho: number, alto: number){
    super(ancho,alto);
}

public calcularArea(): number{
    let result = this.alto * this.ancho;
    return result;
}
}