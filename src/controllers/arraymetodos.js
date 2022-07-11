let plato1={
    nombre:"Bandeja Paisa",
    precio:39900,
    descripcion:'Delicioso plato',
    foto:'na',
    categoria:1
}

let plato2={
    nombre:"Ajiaco",
    precio:35900,
    descripcion:'Delicioso plato',
    foto:'na',
    categoria:2
}

let plato3={
    nombre:"Mondongo",
    precio:35400,
    descripcion:'Delicioso plato',
    foto:'na',
    categoria:2
}

let plato4={
    nombre:"Lengua en Salsa Criolla",
    precio:29900,
    descripcion:'Delicioso plato',
    foto:'na',
    categoria:1
}

let plato5={
    nombre:"Sopa de Cura",
    precio:41900,
    descripcion:'Delicioso plato',
    foto:'na',
    categoria:3
}

let platos=Array(plato1,plato2,plato3,plato4,plato5)

// 1. forEach

platos.forEach(function(plato){
    console.log(plato.nombre)
})

// 2. filter

let resultado=platos.filter(function(plato){
    return(plato.categoria==2)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.precio>20000)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.categoria==1 || plato.categoria==3)
})
console.log(resultado)

// 3. find

let busqueda=platos.find(function(plato){
    return(plato.precio==41900)
})
console.log(busqueda)

// 4. map

let mapa=platos.map(function(plato){
    return(plato.categoria=100)
})
console.log(mapa)

// 5. push

let plato6={
    nombre:"Costillas de Cerdo B.B.Q",
    precio:28000,
    descripcion:"Delicioso plato de Costillas de Cerdo acompañado con salsa B.B.Q",
    foto:"na",
    categoria:3
}
platos.push(plato6)
console.log(plato6)

