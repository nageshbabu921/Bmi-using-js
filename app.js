window.onload= function (){
    //Your entire JS code here
    var w=document.getElementById("weight");
    var  h=document.getElementById("height");

    let btn=document.querySelector('#btn');
    btn.addEventListener('click',ok)
    function ok(event){
        var n=parseFloat(w)+parseFloat(h);
        
       if(!isNaN(n)){
         return document.getElementById("input3").value=n;

       }
    }
    }
