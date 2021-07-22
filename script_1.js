function page(){
    const pageContainer= document.createElement("div")
    pageContainer.className="pageLoad";
    pageContainer.innerHTML=`
    <div class="macard">
       <div class="tab is-active"> <a data-switcher data-tab="1" href="javascript:void(0)" onclick="blush()"><img src="./images/blush.PNG" alt="a" class="img"> <span class="text">Blush</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="2" href="javascript:void(0)" onclick="Bronzer()"><img src="./images/bronzer.PNG" alt="a" class="img"> <span class="text">Bronzer</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="3" href="javascript:void(0)" onclick="Eyebrow()"><img src="./images/eyelin.PNG" alt="a" class="img"> <span class="text">Eyebrow</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="4" href="javascript:void(0)" onclick="Eyeliner()"><img src="./images/eyeliner.PNG" alt="a" class="img"> <span class="text">Eyeliner</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="5" href="javascript:void(0)" onclick="Eyeshadow()"><img src="./images/eyesjd.PNG" alt="a" class="img"> <span class="text">Eyeshadow</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="6" href="javascript:void(0)" onclick="Foundation()"><img src="./images/foundatiom.PNG" alt="a" class="img"> <span class="text">Foundation</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="7" href="javascript:void(0)" onclick="Lipliner()"><img src="./images/lipliner.PNG" alt="a" class="img"> <span class="text">Lipliner</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="8" href="javascript:void(0)" onclick="Lipstick()"><img src="./images/lipstic.PNG" alt="a" class="img"> <span class="text">Lipstick</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="9" href="javascript:void(0)" onclick="Mascara()"><img src="./images/masacara.PNG" alt="a" class="img"> <span class="text">Masacara</span></a></div> 
       <div class="tab"> <a data-switcher data-tab="10" href="javascript:void(0)" onclick="Nail_polish()"><img src="./images/nailp.PNG" alt="a" class="img"> <span class="text">Nail_polish</span></a></div> 
       <button class="refresh" onclick="refreshUsers()">LoadFashion</button>
    
    </div>`
    document.body.append(pageContainer)

}
page();

function searchtab() {
    const prodcontainer = document.createElement("div");
    prodcontainer.className = "search-prod-container";
         prodcontainer.innerHTML =   `<h1 class = "header"> Makeup OnBoad</h1>
         <p class = "tag">Fashion destination</p></br>
         <div class="bar">
         <input class='search_item' placeholder='prod_brand'/>
            <button class="search" onclick="getitems()"> Search </button>
            
            <input class='search_category' placeholder='prod_category'/>
            <button class="search" onclick="getcate()"> Search </button>
            
            <input class='search_type' placeholder='prod_type'/>
            <button class="search" onclick="getprod()"> Search </button>
            </div>
            `;
            
            document.body.append(prodcontainer);
            
  }
  async function getitems() {
    
    try{
      const brand = document.querySelector(".search_item").value;
   
      fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`,
      {
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users)) 
    }

   catch{
     alert("enter valid item? unauthorized")
   }
   
  }
  async function getcate() {
    
    try{
      const category = document.querySelector(".search_category").value;
          
      fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=${category}`,
      {
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users)) 
    }

   catch{
     alert("enter valid item? unauthorized")
   }
   
  }

  async function getprod() {
    
    try{
      const prodType = document.querySelector(".search_type").value;
   
      fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${prodType}`,
      {
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users)) 
    }

   catch{
     alert("enter valid item? unauthorized")
   }
   
  }

function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list" 
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 class="text1" >${user.brand}</h5> 
  <h5 class="text1">${user.name}</h5>
  <h5 class="text1">${user.category}</h5>                                                            
      <p class="time">${user.price}</p>
      <a class="des" href="">${user.product_link}</p>

     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}
function blush(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
    
}

function Bronzer(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                               //calls the function loadUser to print it on the screen
    
}

function Eyebrow(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Eyeliner(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Eyeshadow(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Foundation(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Lipliner(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Lipstick(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Mascara(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function Nail_polish(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}

function refreshUsers() {
    document.querySelector('.user-list').remove();
    document.querySelector(".search_item").value="";
    document.querySelector(".search_category").value = "";
    document.querySelector(".search_type").value = "";
   
}