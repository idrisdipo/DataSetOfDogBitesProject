let data, output, result;
async function init(){

let link = "bites.js"
info = await fetch(link);
data= await info.json();
let ct= 0
let output = document.getElementById("output")
let build = "";
  

       for(let i =0; i< data.length; i++){
       let bites = data[i];
       build += `<div class="card">
       <p> 
      <h2> Date: ${bites.dateofbite}</h2>
      <h2> Breed:${bites.breed}</h2>
      <h2> Age: ${bites.age}</h2>
      <h2> Gender: ${bites.gender}</h2>
      <h2> Borough:${bites.borough}</h2>
      <h2> Zipcode: ${bites.zipcode}</h2>
      </div>`
  ct++;
}
output.innerHTML= build;
}


function filterByBorough(){
        let output = document.getElementById ("output");
        let Borough= document.getElementById ("Borough");
        let result = document.getElementById ("result");
        let build = "";
        let ct = 0 ;
        console.log(Borough.value)

        for(let i = 0; i < data.length; i+=1){
          let bites = data[i];
          console.log(bites.borough + " " + Borough.value)
          if (bites.borough == Borough.value){
              build += `<div class="fitted card">
                      
                    
            <h2> Date: ${bites.dateofbite}</h2>
            <h2> Breed:${bites.breed}</h2>
            <h2> Age: ${bites.age}</h2>
            <h2> Gender: ${bites.gender}</h2>
            <h2> Borough:${bites.borough}</h2>
            <h2> Zipcode: ${bites.zipcode}</h2>
            </div>`; 
                  
              ct +=1;
          }
        }

        output.innerHTML = build; 
  }

