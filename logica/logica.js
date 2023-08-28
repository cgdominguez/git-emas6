var lastName= "david";
lastName= "alberto";
console.log(lastName);

let num = 5 ;

function suare(num) {
    return num + num;
}
suare();
console.log(suare());

const suma = () => {
    
    return num + num
}
suma();
console.log(suma());   

let hola =  "hola";
let mundo = "mundo";
let frace= hola +" "+ mundo +"!";

console.log(frace);
// TEMPLATE LITERALS
let saludo= `${hola} ${mundo}`;
let otroSaludo= "esto debe funcionar " + `${hola} ${mundo}`+" si sale bien";
console.log(saludo);
console.log(otroSaludo);

let otroSaludo2=`esto debe funcionar ${hola} ${mundo} si sale bien`;
console.log(otroSaludo2);

// MULTI LINE STRINGS

let lorem= "esto es una linea \n" + "esto esun salto de linea string de una variable ";
console.log(lorem);

let lineas = `esta es otra linea 
este es un salto de linea `
console.log(lineas);

// || nos permite poner valores por defecto


function newUser(name,age,countries) {
    var name = name || "oscar";
    var age = age || 34;
    var countries = countries|| "argentina"; 
    console.log(name,age,countries);
}
newUser();

newUser("david", 20 , "Bolivia")
// esta es otra manera de poner valores por defectos

function newAdmin(name="oscar", age = 32 , countries= "Jamaica") {
    console.log(name, age, countries);

}
newAdmin();
newAdmin("Cristian", 44, "Canada");    


// array destructurig

let fruta =["manzana", "banana"]
let [a,b]= fruta ;
console.log (a,b);     // nos devuelve los string 
console.log(fruta);    // nos devuelve el array 
console.log(a,fruta[1])// nos devuelve el string y el array indicado

// destructuracion de un OBJETO

let user = { userName: "oscar", age : 32} // queda en memoria

let {userName, age} = user;  // se lee , quiero traer userName y age = de tal lugar user

console.log(userName,age);
console.log(user.age);

// spreed operator

let person = {name :"oscar", age:28 }
let city= "mx";

let data = {...person, city} // ... destructuracion con operador de propagacion

// objetos literales

function nuevoUsuari( user, age, country) {
    return{
        user: user,
        age: age,
        country: country
    }    
}
nuevoUsuari()

//                          ES LO MISMO DECIR 

function newUser(user,age,country,uid) {
    return{
        user,
        age,
        country,         // este tipo de codigo se usa al siempre y cuando los parametros y las asignaciones sean las mismas
        id:uid,         // este espacio uid pasa a ser id , ya  este ultimo recibe como asignacion a uid
    }
    
}

