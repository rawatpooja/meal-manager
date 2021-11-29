var arr=[]
var obj={
     meal:"",
     count:"",
    restaurant:"",
    dish:""
}
showReview();
function showReview(){
    var table=document.getElementById("table");
    var col="";
    arr=JSON.parse(localStorage.getItem("arr"));
    arr.map((value,i)=>{

        col +=`<td><tr>Meal:${value.meal}</tr><tr>< count:${value.count}</tr> <tr>${value.restaurant}</tr> <tr>${value.dish}</tr></td>`
    })
    document.getElementById('table').innerHTML=col;
    console.log(arr);
}
