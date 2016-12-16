class Cart{
  //What is the first part of every class? Type it below.
  constructor(i,q){
    this.itemList = i;
    this.itemQuantity = q;
  }


  //Type the instance functions below this comment.
  additem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalcart(){
    let total = 0;

    for(let i=0;i<this.itemQuantity.length;i++){
      total += this.itemList[i].price*this.itemQuantity[i].price;
      return total;
    }
  }
  subcart(days){
    let subCart = new Cart([],[]);
    for(let i=0;i < this.itemList.length;i++){
      if(this.itemList[i].shipping == days){
        subcart.push([i]);
      }
      return subcart;
    }
  }
}
