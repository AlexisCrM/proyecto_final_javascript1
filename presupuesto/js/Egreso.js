// Crea la clase Egreso, que es hija de la clase Dato
class Egreso extends Dato {
    // Variable estática inicializada en 0 para llevar el conteo de los egresos
    static contadorEgresos = 0;

    // Constructor que recibe los valores de descripcion y valor
    constructor(descripcion, valor) {
        // Inicializa el objeto de la clase padre (Dato)
        super(descripcion, valor);
        
        // Preincremento a la variable estática para asegurar que el primer ID inicie en 1
        this._id = ++Egreso.contadorEgresos;
    }

    // Método get para retornar el valor del ID. Sin método set para proteger la variable
    get id() {
        return this._id;
    }
}