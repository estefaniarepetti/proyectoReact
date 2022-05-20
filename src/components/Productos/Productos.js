
const producto = [
  {
    id: 1,
    name: "Funco Marvel",
    stock: 12,
    description: "ARS 6700",
    img: "images/product/funco1.png",
    categoryId: "1"
  },
  {
    id: 2,
    name: "Funco Thanos",
    stock: 4,
    description: "ARS 6304",
    img: "images/product/funco2.png",
    categoryId: "1"

  },
  {
    id: 3,
    name: "Funco Bart Simpsons",  
    stock: 15,
    description: "ARS 7100",
    img:"images/product/funco3.png",
    categoryId: "2"

  },
  {
    id: 4,
    name: "Funco Spider Man ",
    stock: 9,
    description: "ARS 5999",
    img: "images/product/funco4.png",
    categoryId: "1"

  },
  {
    id: 5,
    name: "Funco Marvel",
    stock: 6,
    description: "ARS 7700",
    img: "images/product/funco1.png",
    categoryId: "1"
  },
  {
    id: 6,
    name: "Funco Simpsons",
    stock: 3,
    price: "ARS 6900",
    img: "images/product/funco1.png",
    categoryId: "2"

  },
{
  id: 7,
    name: "Funco Spider Man ",
    stock: 9,
    description: "ARS 5999",
    img: "images/product/funco4.png",
    categoryId: "1"
},
{
    id: 8,
    name: "Funco Spider Man ",
    stock: 9,
    description: "ARS 5999",
    img: "images/product/funco4.png",
    categoryId: "2"
},

]

export const traerProd = new Promise ((resolve, reject ) => {

  //acciones
  let condition = true
  setTimeout(()=> {
    if(condition){
      resolve(producto)
    }else{
      reject('Salio mal :(')
    }
  }, 3000)
})