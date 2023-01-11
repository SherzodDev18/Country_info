let search=document.getElementById("search");
let searchBtn=document.getElementById("btn");
let result=document.getElementById("result");
let form=document.getElementById("form");

const getUser=async(username)=>{
    const res=await fetch(`https://restcountries.com/v3.1/name/${username}?fullText=true`);
    const resDate=await res.json();
    console.log(resDate)
    let card=`
    <div class="resultHtml">
    <img class="img" src="${resDate[0].flags.svg}">
    <p class="name">${resDate[0].name.common}</p>
    <p class="capital">Capital:${resDate[0].capital[0]}</p>
    <p class="continents">Continents:${resDate[0].continents[0]}</p>
    <p class="languase">Lenguase:${Object.values(resDate[0].languages).toString().split(",").join(",")}</p>
    <p class="population">Population:${resDate[0].population}</p><div>
    `
    result.innerHTML=card;

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user=search.value
    if(user){
        getUser(user)
        search.value=""
    }
})

