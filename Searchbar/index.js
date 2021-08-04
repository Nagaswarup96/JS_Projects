const inp = document.querySelector("input");
const btn = document.querySelector("button");
const cont = document.querySelector(".Container");
const list = document.querySelector(".Details");
const url = "https://countriesnow.space/api/v0.1/countries/population/cities";

const arr = [];

function createEle(){

   

    const html = document.createElement("p");

    

    if(inp.value === ""){
        const html1 = document.createElement("h3");
        html1.textContent = "Please Insert Some Name";
        cont.appendChild(html1);
       setTimeout(()=>{cont.removeChild(html1);}, 3000);
      
        
       
    }
    else{
        arr.push(inp.value);
        arr.forEach((item) => { 
            html.innerHTML = item;
            cont.appendChild(html);
           })
        inp.value = "";
    }
    

}

const dataSet = [];

fetch(url)
    .then(text => text.json())
    .then(data => { dataSet.push(...data.data);
            // console.log();
})


function findMatches(wordToM, dataSet){
            wordToM = "India";
            return dataSet.filter(place => {
                const regex = new RegExp(wordToM , 'gi');
                return place.country.match(regex)
            });
        }


function displayVal(){
    const matchArray = findMatches(this.value, dataSet);
    const word = inp.value;
    const dataIndia = matchArray.filter(dats => {
        const regex1 = new RegExp(word, 'gi');
        return dats.city.match(regex1)
    });        

    const html = dataIndia.map(place => {
        return `
        <li>
        <span class="name">${place.city}, ${place.country}</span>
        </li>
        `;
    }).join('');
    if(inp.value != ""){
    list.innerHTML= html;
    }
    else{
        list.innerHTML="";
    }       
}
   
inp.addEventListener('change', displayVal);
inp.addEventListener('keyup', displayVal);
btn.addEventListener("click", createEle);

// ()=>{
//     // 

//     const html = document.createElement("p");

//     html.innerHTML = arr[0];
// });



