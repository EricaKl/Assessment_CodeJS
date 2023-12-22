
function DisplayCardsForProducts(JSONresult)
{

    for(var i =0;i<JSONresult.length;i++)
    {
        document.getElementById("products").innerHTML +=
         `
         <div class="card" style="width:300px;border:2px solid #002D62 ;box-shadow: 4px 5px #00308F;margin-top:10px; margin-left:200px;">
         <img class="card-img-top" src="${JSONresult[i].thumbnail}" style="width:300px;">
         <div class="card-body">
         <h4 class="card-title" style="margin-left:10px;color:#6E260E"><b>${JSONresult[i].title}<b></h4>
         <p class="card-text" style="margin-left:10px;color:#DAA06D"><em>${JSONresult[i].description}</em></p>
         <p class="card-text" style="margin-left:10px;">Price: ${JSONresult[i].price}</p>
          <p class="card-text" style="margin-left:10px;">Rating: ${JSONresult[i].rating}</p>
          <p class="card-text" style="margin-left:10px;">Stock: ${JSONresult[i].stock}</p>
          <p class="card-text" style="margin-left:10px;">Category:  ${JSONresult[i].category}</p>
          <button type="button" onclick="SaveForLater(id)" id="${JSONresult[i].id}"
          class="btn btn-info" style="margin-bottom:10px; margin-left:10px;color:black;">Save For Later</a>
         </div>
         </div> 
         </div>  
        <br></br>`

    }
    
}
function DisplayCradsForSaveForLater(JSONresult)
{
    debugger;
    // var display="";
    for(var i =0;i<JSONresult.length;i++)
    {
        document.getElementById("saveforlater").innerHTML +=
        `
        <div class="card" style="width:300px;border:2px solid #4B9CD3;box-shadow: 4px 5px #6495ED;margin-top:10px; margin-left:180px;">
        <img class="card-img-top" src="${JSONresult[i].thumbnail}" style="width:300px;">
        <div class="card-body">
        <h4 class="card-title" style="margin-left:10px;color:#6E260E"><b>${JSONresult[i].title}<b></h4>
        <p class="card-text" style="margin-left:10px; color:#DAA06D"><em>${JSONresult[i].description}</em></p>
        <p class="card-text" style="margin-left:10px;">Price: ${JSONresult[i].price}</p>
         <p class="card-text" style="margin-left:10px;">Rating: ${JSONresult[i].rating}</p>
         <p class="card-text" style="margin-left:10px;">Stock: ${JSONresult[i].stock}</p>
         <p class="card-text" style="margin-left:10px;">Category:  ${JSONresult[i].category}</p>
        </div>
        </div> 
        </div>  
       <br></br>`
       
    }
    
}

async function getProducts()
{
   debugger;
    const responseproducts = await fetch("http://localhost:3000/products");
    const JSONresult = await responseproducts.json();
   DisplayCardsForProducts(JSONresult);
}

async function getSaveForLater()
{
    debugger;
    const responsefavourites = await fetch("http://localhost:3000/saveforlater");  
    const JSONresult = await responsefavourites.json();
    DisplayCradsForSaveForLater(JSONresult);
}

async function SaveForLater(id)
{
    var data1=[{}];
    debugger;
    
    const responseproducts = await fetch("http://localhost:3000/products/"+id);
    const JSONresultproducts = await responseproducts.json();
    const responseSaveForlater = await fetch("http://localhost:3000/saveforlater");
    data1 = await responseSaveForlater.json();
    const count = data1.filter(x=>x.id == JSONresultproducts.id)
    if(count==0)
    {
        let response = await fetch("http://localhost:3000/saveforlater", {
            method: "POST",
            body: JSON.stringify({
                id: JSONresultproducts.id,
                title: JSONresultproducts.title,
                description : JSONresultproducts.description,
                price: JSONresultproducts.price,
                rating: JSONresultproducts.rating,
                stock : JSONresultproducts.stock,
                category : JSONresultproducts.category,
                thumbnail : JSONresultproducts.thumbnail
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
      
        getSaveForLater();
    }
    else{
        alert("Product already exists");
    }
    
      
        
}

getProducts();
getSaveForLater();