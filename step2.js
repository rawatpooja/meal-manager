//var arr = JSON.parse(localStorage.getItem("arr"));
//    console.log (dishes)
/*var temp = arr.map((item) =>
item.meal);
console.log(temp)
let tempArray = [];
var response = dishes.map((item) => {
    
  return item.availableMeals.map((i) => {
      console.log(i)
    temp.map((o) => {
      if (o == i) {
        tempArray.push(item);
        console.log(tempArray)
      }
    });
  });
});*/
var arr = JSON.parse(localStorage.getItem("arr"));
var restdata = dishes.filter(function (obj) {
  return (
    obj.availableMeals[0] == arr[0].meal ||
    obj.availableMeals[1] == arr[0].meal ||
    obj.availableMeals[2] == arr[0].meal
  );
});
console.log(restdata);
console.log(arr[0].meal);

showRest();
function showRest() {
  var restaurant = document.getElementById("rest_name");
  restdata.map((value, i) => {
    restaurant.innerHTML += `<option value="${restdata[i].restaurant}">${restdata[i].restaurant}</option>`;
    console.log(restdata[i].restaurant);
  });
}
var obj = {
  restaurant: "",
};
function saveRest() {
  var restaurant = document.getElementById("rest_name").value;
  // localStorage.setItem("arr",JSON.stringify(arr))
  arr = JSON.parse(localStorage.getItem("arr"));
  arr.push({ restaurant: restaurant });
  localStorage.setItem("arr", JSON.stringify(arr));
}
document.getElementById("next").addEventListener("click", () => {
  window.location.href = "step3.html";
  saveRest();
  console.log(arr);
});
document.getElementById("pre").addEventListener("click", () => {
  window.location.href = "step1.html";
});
