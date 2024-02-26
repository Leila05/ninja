class Ninja{
    constructor(nombre){
        this.velocidad = 3;
        this.fuerza = 3;
        this.nombre = nombre;
        this.salud = 0;
    }

    sayName(){
        console.log("Nombre del ninja:", this.nombre);
    }

    showStats(){
        this.drinkSake();
        console.log("El ninja se llama:", this.nombre, ".Tiene una velocidad de:", this.velocidad, 
        "y una fuerza de:", this.fuerza, ".Su salud es:", this.salud);
    }

    drinkSake(){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();