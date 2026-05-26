const inputarea = document.getElementById("user");
const clickbtn = document.querySelector(".search");
const  khalicard = document.querySelector(".card");

// user ka input Lo
clickbtn.addEventListener("click", async ()=>{
// user ka name direct Lo 

const username = inputarea.value

 const response = await fetch(`https://api.github.com/users/${username}`);
 let data = await response.json()
 console.log(data)

 khalicard.innerHTML = `
 <img src="${data.avatar_url}" width = "150px"; style = "border-radius:50%; margin-top:20px;" >
 <h2>${data.name || data.login}</h2>
 <p>${data.bio || "bio not available"}</p>
 <h4>Followers: ${data.followers}</h4>
 `
})