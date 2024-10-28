import { Item } from "./item.js";

export class Carrinho extends Item{
    constructor(name,quantidade,valorUnitario){
        super();
        this.nameItem = name;
        this.mountItem = quantidade;
        this.valorUnitarioItem = valorUnitario;
        
    }
    addItem(carrinho,item){
        carrinho.push(item);

    };
    deleteItem(carrinho,name){
        const index = carrinho.findIndex((item)=>item.name === name);
        if(index !==-1){
            carrinho.splice(index,1);
        }
    };
    
       async totalItensCarrinho(carrinho){
        return await  carrinho.reduce((total,item)=> total + item ,0)
    

    };
    async removeItemIndex(userCarrinho, index){
        if(index >= 0 && index< userCarrinho.length){
            userCarrinho.splice(index,1);
    }
 };  
    

    async getValorSubTotal(){
     let result = this.getMountItem() * this.getValorUnitarioItem();
     return parseFloat(result.toFixed(2));
    }

}


    export async function addItem(userCarrinho,item){
            userCarrinho.push(item);
    }

    export async function deleteItem(userCarrinho,nameItem){
        const index = userCarrinho.findIndex((item)=>item.name === nameItem);
        if(index !== -1){
            userCarrinho.splice(index,1);
        }
        
            
    }

    export async function removeItemIndex(userCarrinho,index){
        const deleteIndex = index - 1;
            if(index >= 0 && index< userCarrinho.length){
                    userCarrinho.splice(deleteIndex,1);
                    calculateTotal(userCarrinho); 
            }
    }

    export async function removeItem(userCarrinho,item){
            const indexFound = userCarrinho.findIndex((p)=>p.name === item.name);
           if(indexFound == -1){
                console.warn("item não encontrado");
                return;
           };

           if(userCarrinho[indexFound].quantity > 1){
                userCarrinho[indexFound].quantity -= 1;
                userCarrinho[indexFound].subtotal = () => userCarrinho[indexFound].price * userCarrinho[indexFound].quantity;
                return;
           }

           if(userCarrinho[indexFound].quantity === 1){
             userCarrinho.splice(indexFound,1);
             return;
           }
           await calculateTotal(userCarrinho);
    }

    export async function calculateTotal(userCarrinho){
       const result =  userCarrinho.reduce((total,item)=> total + item.subTotal(),0);
       console.log(`💵 Total atualizado: R$${result.toFixed(2)}`);
    }
    export async function displayCarrinho(userCarrinho){
        console.log("\n----- produtos dentro da lista do carrinho--------\n");
        userCarrinho.forEach((item , index)=>{
                console.log(`${index + 1} - ${item.name} - ${item.quantity}x -  R$${item.price} -  ${item.subTotal()}\n`);
                
        });
       
    }