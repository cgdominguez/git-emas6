// declaracion de clases

class users{
     
};


// instancia de una clase

class usuario{};

const nuevoUsuario =  new usuario ("Gerardo" ); //esta es una instancia de una clase , 


//metodos en clases

class usuarito{
    //metodos
    saludoDesdeAca(){ //funcion
        return 'hello';
    }
};

const gndx= new usuarito(); // generando la instancia de una claselog
console.log(gndx.saludoDesdeAca()); // uso de un mmetodo de una instancia

const belepoer = new usuarito();   //herencia 
console.log(belepoer.saludoDesdeAca);// dos instancias distintas de la misma clase


// constructor

class usuarito{
    constructor(){ //constructor
        console.log('nuevo usuario');  // aqui nos devuelve este mensaje , dejando de lado el hello
    }
    saludoDesdeAca(){ //funcion
        return 'hello';
    }
}

const david= new usuarito();

// this   (hace referencia al elemento padre que lo contiene)

class user1{
    constructor(name){ // bloque. recive el valor de name 
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello ';
    }
    saludaso(){
        return `${this.speak()} ${this.name}`; //llamamos a la fuuncion speak y al valores name
    }
}
const ana = new user1("Anita")
console.log(ana.saludaso());


// setters and getters ( UNA FORMA DE OBTENER ELEMENTOS Y GUARDAR ELEMENTOS EN LA ESCRUSTURA)
class user{ 
    constructor (names, age, genero ) {
        this.name = names;
        this.age= age;
        this.genero= genero;
    }
        //metodos
        saludin (){
            return "hola"
        }

        hey(){
            return `${this.saludin()} ${this.names}`;
        }
        get uAge(){ // trael valor thi.age y se le asigna a uAge , se podria decir que es  una manera de cambiar nombre y  recibir los mismos valores 
            return this.age;

        }
        set uAge(n){
            this.age = n; // al darle un aparametro a uAge  this.name recibe el nuevo valor asi cambiando el valor inicial
        }
}


const nuevitoUsuario = new user("anitititita", 23);
console.log(nuevitoUsuario.uAge);
console.log(nuevitoUsuario.uAge = 20 );