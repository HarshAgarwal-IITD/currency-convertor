
const populate=async(value,currency,currency2)=>
{
    mystr="";
    mystr2=""
    url="https://api.currencyapi.com/v3/latest?apikey=cur_live_CKo8dUoWPJBELQ3JCQ2HhQTadibmdWmPakFptF0o&base_currency="+currency;
    let response= await fetch(url)
    let rJson=await response.json()

    console.log(rJson)
    for( let key of Object.keys(rJson["data"])){
        mystr+= `
                <tr>
                <td>${key}</td>
                <td>${rJson["data"][key]["code"]}</td>
                <td>${Math.round(rJson["data"][key]["value"]*value)}</td>
                </tr >
                `
                

    }
 document.querySelector('.output').style.display="block"
    const tableBody=document.querySelector("tbody");
    tableBody.innerHTML=mystr
    // console.log(mystr)
   


}



const btn=document.querySelector('.btn')


btn.addEventListener('click',(e)=>{
    console.log("button cliked")
    e.preventDefault()
    const value=parseInt(document.querySelector(`input[name='quantity']`).value);
    const currency=document.querySelector(`select[name='Currency']`).value
    const currency2=document.querySelector(`select[name='Currency2']`).value
    populate(value,currency,value2,currency2)
}
)




