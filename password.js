class Password{
  //The first part of the class.
  constructor(pu,pr){
    this.publickey = pu;
    this.privatekey = pr;
  }


  //Instance functions below this comment.
  validPublicKey(){
    for(let i=0;i<this.publickey.length;i++){
      if(this.publickey.length<8){
        return false;
      }
      else if(this.publickey.length>25;){
        return false;
      }
      else if(this.publickey.length>=8){
        return true;
      }
      else if(this.publickey.length<=25){
        return true
      }
      }
    }
  }
  validPrivateKey(){

  }
  //Static function below this comment.
  static.makePrivateKey(){

  }
}
