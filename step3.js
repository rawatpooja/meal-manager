var arr =JSON.parse(localStorage.getItem("arr"));

var dishdata=dishes.filter(function(item){
 return item.restaurant==arr[1].restaurant
});
console.log(dishdata);
console.log(arr[1].restaurant);

showDish();
function showDish() {
  var dish = document.getElementById("dish_name");
  dishdata.map((value, i) => {
    dish.innerHTML += `<option value="${dishdata[i].name}">${dishdata[i].name}</option>`;
    console.log(dishdata[i].name);
  });
}

var obj={
    dish:""
}
function saveDish(){
var dish=document.getElementById("dish_name").value;
  // localStorage.setItem("arr",JSON.stringify(arr))
  arr = JSON.parse(localStorage.getItem("arr"));

arr.push({"dish":dish})
localStorage.setItem("arr", JSON.stringify(arr));
console.log(arr)
}
document.getElementById('next').addEventListener('click',()=>{
    window.location.href='review.html';
    saveDish();
})

/*var addmore=document.getElementById("add");
addmore.onclick=function(){
    var newField=document.createElement('input');
    newField.setAttribute('type','select');
    newField.setAttribute('type','select');
    dish_name.appendChild(newField);
    console.log(newField)
}*/

var countre=1;
function add_more(){
    countre +=1;
    html=` <div class="row" id="row'${countre}">
    <labal for="meal"></labal><br><br>
    <select id="dish_name" name="product'${countre}'">
        <option>Select</option>
        <option value=""></option>
        <option></option>
    </select>
     </div>`
     var form= document.getElementById('product_form');
     form.innerHTML +=html
     
}

/*var increBtn=document.getElementById('inc');
var descreBtn=document.getElementById('dec');
for(var i=1;i<10;i++){
  var button=increBtn[i];
button.addEventListener('click',function(){
      var buttonClicked =event.target;
      console.log(buttonClicked);
      var input=buttonClicked.parentElement.children[2];
      console.log(input)
      var inputValue=input.value
      console.log(inputValue);
      var newValue=parseInt(inputValue)+1;
      console.log(newValue);
      input .value=newValue;

    
  })
}*/

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


