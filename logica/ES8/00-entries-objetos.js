//metodo de entries
// un objeto al q se le proporciona el metodo entries
const paises= {
    MX:"mexico",
    CO:"colombia",     //ELEMENTOS CON VALORES
    AR:"ARGENTINA",
    PE:"PERÚ"
};


console.log(Object.entries(paises)); //Object con mayuscula (.punto) entries es el metodo
/* nos devuelve un array de array
[
    [ 'MX', 'mexico' ],
    [ 'CO', 'colombia' ],
    [ 'AR', 'ARGENTINA' ],
    [ 'PE', 'PERÚ' ]
  ]*/