//w3schools was a big help for me
class Password{
  //The first part of the class.
  constructor(pu,pr){
    this.publickey = pu;
    this.privatekey = pr;
  }


  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length >= 8 && this.publickey.length <=25 ){
        return true;
      }
    else{
      return false;
    }
  }
  validPrivateKey(){
    if(this.privatekey[4] == "-" && this.privatekey[9] == "-"){
      for(let i=0;i<this.privatekey.length;i++){
        this.privatekey[i].isNan(i);
      }
      return false;
    }
    else{
      return true;
    }
  }
  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
      for(let i=0;i<limit;i++){
      if(i == 4 || i == 9){
        key = key + "-";
      }
      else{
        let number = math.random();
        number = math.floor(number*10)
        number = string(number)
        key = key + number;
      }
    }
    return key;
  }
}
