import createItem from "./services/item.js";
import { Carrinho } from "./services/carrinho.js";
import * as C from "./services/carrinho.js";

const myCarrinho = [];
const mywhishList= [];
const myCarrinho2=[]

console.log("---classe myCarrinho----")
const item = new Carrinho("gel",1,3);
const item4 = new Carrinho("escova",6,3.99);
item.addItem(myCarrinho2,await item.getValorSubTotal())
item.addItem(myCarrinho2,await item4.getValorSubTotal())

console.log(await item.totalItensCarrinho(myCarrinho2,item));



console.log("Bem vindo ao seu carrinho da Shopee");


const item1 = await createItem("sorvete",20.87,2);
const item2 = await createItem("balcao",169.87,4);
const item3 = await createItem("panela",169.87,1);


await C.addItem(myCarrinho,item1);
await C.addItem(myCarrinho,item2);
await C.addItem(myCarrinho,item3);
await C.addItem(mywhishList,item2);

/* await C.removeItemIndex(myCarrinho,1); */

await C.removeItem(myCarrinho,item1);
await C.displayCarrinho(myCarrinho);


console.log("\n---- total do Carrinho------\n")
console.log(`-------${ item1.subTotal()}----- \n`);
console.log(`------ ${ item2.subTotal()}----- \n`);
console.log(`------ ${ item3.subTotal()}----- \n`);
console.log(await C.calculateTotal(myCarrinho));