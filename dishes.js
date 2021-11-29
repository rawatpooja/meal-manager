var dishes= [
      {
        "id": 1,
        "name": "Chicken Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 2,
        "name": "Ham Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 3,
        "name": "Cheese Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 4,
        "name": "Fries",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 5,
        "name": "Egg Muffin",
        "restaurant": "Mc Donalds",
        "availableMeals": ["breakfast"]
      },
      {
        "id": 6,
        "name": "Burrito",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 7,
        "name": "Tacos",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 8,
        "name": "Quesadilla",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 9,
        "name": "Steak",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 10,
        "name": "Yakitori",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 11,
        "name": "Nankotsu",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 12,
        "name": "Piman",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
      },
      {
        "id": 13,
        "name": "Vegan Bento",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch"]
      },
      {
        "id": 14,
        "name": "Coleslaw Sandwich",
        "restaurant": "Vege Deli",
        "availableMeals": ["breakfast"]
      },
      {
        "id": 15,
        "name": "Grilled Sandwich",
        "restaurant": "Vege Deli",
        "availableMeals": ["breakfast"]
      },
      {
        "id": 16,
        "name": "Veg. Salad",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 17,
        "name": "Fruit Salad",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 18,
        "name": "Corn Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 19,
        "name": "Tomato Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 20,
        "name": "Minestrone Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 21,
        "name": "Pepperoni Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 22,
        "name": "Pepperoni Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 23,
        "name": "Hawaiian Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 24,
        "name": "Seafood Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 25,
        "name": "Deep Dish Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["dinner"]
      },
      {
        "id": 26,
        "name": "Chow Mein",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 27,
        "name": "Mapo Tofu",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 28,
        "name": "Kung Pao",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 29,
        "name": "Wontons",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 30,
        "name": "Garlic Bread",
        "restaurant": "Olive Garden",
        "availableMeals": ["breakfast", "lunch", "dinner"]
      },
      {
        "id": 31,
        "name": "Ravioli",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 32,
        "name": "Rigatoni Spaghetti",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
      },
      {
        "id": 33,
        "name": "Fettucine Pasta",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
      }
    ]
    localStorage.setItem('dishes' , JSON.stringify(dishes));
    const newArray= JSON.parse(localStorage.getItem('dishes'));
 

   // console.log(dishes);
    //console.log(rr[0].id);
    
    //for(let i=0;i<dishes.length;i++){
    //console.log(dishes[i].restaurant);
      

  //}


    
    /*function lunchone() {
     //lunch1=document.getElementById('meal_name').value;
   localStorage.setItem('dishes' , JSON.stringify(dishes));
   const newArray= JSON.parse(localStorage.getItem('dishes'));
   console.log(dishes);
   var arr=dishes.filter(function(value){
         return (value.availableMeals=="lunch");

   });

   localStorage.setItem('arr',JSON.stringify(arr));
   arr=JSON.parse(localStorage.getItem('arr'));
     console.log(arr);
 }

  var arr=[
    {
      meal:"",count:""
    }
  ]
  function saveData(){
    var meal=document.getElementById('meal_name').value;
    var counts=document.getElementById('count').value;
    arr=JSON.parse(localStorage.getItem('arr'));
    arr.push({"meal":meal,"counts":counts});
    localStorage.setItem('arr',JSON.stringify(arr));
   console.log(arr);
    console.log(localStorage);
}


document.getElementById("next").addEventListener('click',()=>{
  window.location.href='step2.html';
  saveData();
})*/
 
  
  