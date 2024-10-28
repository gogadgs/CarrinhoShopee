 export class Item{
    constructor(nameItem,mountItem,valorUnitarioItem){
        this.nameItem = nameItem;
        this.mountItem = mountItem;
        this.valorUnitarioItem = valorUnitarioItem;
    };

   
    setItem(name){
        return this.name = name;

    }
    getItem(name){
        return this.name;

    }
    setMountItem(value){
       return this.mountItem = value;

    }
    getMountItem(){
       return this.mountItem;

    }
    setValorUnitarioItem(value){
       return this.valorUnitarioItem = value;

    }
    getValorUnitarioItem(){
       return this.valorUnitarioItem;

    }
    
    async createItem(){
        return{
            nameItem,
            mountItem,
            valorUnitarioItem,
            subtotal:() =>  mountItem * valorUnitarioItem,
        }
    }




}



    async function createItem(name,price,quantity){
            return {
                name,
                price,
                quantity,
                subTotal:()=>  price * quantity,
            };
            
    }   


    export default createItem;

