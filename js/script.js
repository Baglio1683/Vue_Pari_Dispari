const {createApp} = Vue; 

createApp({

data(){

    return{

      num : "",    
      resultVer : "", 
      classColor : ""
    
    }

}, 

methods : {

    OddEven : function () {

        if(this.num % 2 === 0){
           this.resultVer = "pari"
           this.classColor = "red"
        }
        else{
          this.resultVer = "dispari"
          this.classColor = "blue"
        }
    }

}

}).mount("#app")

