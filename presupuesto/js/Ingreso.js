// Define la clase Ingreso que extiende de la clase padre Dato
class Ingreso extends Dato {
    // Variable estática que pertenece a la clase y no al objeto, inicializada en 0
    static contadorIngresos = 0;

    // Constructor que recibe descripción y valor
    constructor(descripcion, valor) {
        // super() invoca al constructor de la clase padre pasándole los atributos
        super(descripcion, valor);
        
        // Se utiliza la variable estática con un preincremento (++variable) para asignar un ID único
        this._id = ++Ingreso.contadorIngresos;
    }

    // Método get que regresa el valor del ID. No hay set porque no debe modificarse
    get id() {
        return this._id;
    }
}