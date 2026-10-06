// Define la clase Ingreso que extiende de la clase padre Dato[cite: 23]
class Ingreso extends Dato {
    // Variable estática que pertenece a la clase y no al objeto, inicializada en 0[cite: 23]
    static contadorIngresos = 0;

    // Constructor que recibe descripción y valor[cite: 23]
    constructor(descripcion, valor) {
        // super() invoca al constructor de la clase padre pasándole los atributos[cite: 23]
        super(descripcion, valor);
        
        // Se utiliza la variable estática con un preincremento (++variable) para asignar un ID único[cite: 23]
        this._id = ++Ingreso.contadorIngresos;
    }

    // Método get que regresa el valor del ID. No hay set porque no debe modificarse[cite: 23]
    get id() {
        return this._id;
    }
}