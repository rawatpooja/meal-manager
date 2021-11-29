/*document.getElementById('lunch_meal').addEventListener('click',()=>{
    lunchone();
})*/

/*function lunchone() {
    lunch1=document.getElementById('lunch_meal').value;
  localStorage.setItem('dishes' , JSON.stringify(dishes));
  const newArray= JSON.parse(localStorage.getItem('dishes'));
  console.log(dishes);
  var arr=dishes.filter(function(value){
        return (value.availableMeals=="lunch");

  });

  localStorage.setItem('arr',JSON.stringify(arr));
  arr=JSON.parse(localStorage.getItem('arr'));
    console.log(arr);
}*/

 var arr=[]
  var obj= {
     meal:"",count:""
   }
 
 function saveData(){
   var meal=document.getElementById('meal_name').value;
   var counts=document.getElementById('qtybox').value;
   localStorage.setItem('arr',JSON.stringify(arr));

   arr=JSON.parse(localStorage.getItem('arr'));
   arr.push({"meal":meal,"counts":counts});
   localStorage.setItem('arr',JSON.stringify(arr));
  console.log(arr);
   console.log(localStorage);
}


document.getElementById("next").addEventListener('click',()=>{
window.location.href='step2.html';
 saveData();
})

//var increBtn=document.getElementByClassName('inc');
//var descreBtn=documnet.getElementByClassName('des');
//for(var i=0;i<increBtn.length;i++){
 // var button=increBtn[i];
  //button.addEventListener('click',function(){
    
  //})
//}
let addBtn=document.querySelector('#add');
let subBtn= document.querySelector('#sub');
let qty=document.querySelector('#qtybox');
console.log(addBtn);
addBtn.addEventListener('click',()=>{
    if(qty.value>=10){
        qty.value=10;
    }else{
    qty.value=parseInt(qty.value)+1;
    }
});
subBtn.addEventListener('click',()=>{
    if(qty.value<=1){
        qty.value= 1;
    }else{
        qty.value=parseInt(qty.value)-1;

    }
});

  
