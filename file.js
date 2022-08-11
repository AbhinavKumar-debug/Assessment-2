console.log("This is for testing");


// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', buttonClickHandler)

// function buttonClickHandler() {
//      console.log('You have clicked the fetchBtn');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);


//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){

//             console.log(this.responseText)
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }

//     // send the request
//     params = `{"name":"test34sad545","salary":"123","age":"23"}`;
//     xhr.send(params);

//     console.log("We are done!");

// }


//*******************************
// function fetchData(){
//     fetch("https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09").then(response =>{
//         return response.json();
//     })
//     .then(data =>{
//         console.log(data);
//         const html = data
//         .map(user => {
//             return `
//             <div class="user">
//             <p>Name: ${user.name}</p>
//             <p>Username: ${user.username}</p>
//             <p>Website: ${user.website}</p>
//             <p>Company: ${user.company}</p>
//             </div>
//             `;
//         })
//         .join("");
//         console.log(html);
//         document.getElementById("app").innerHTML=html;
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }
// fetchData();

// document.getElementById('fetchBtn').addEventListener('click', () => {
//     // API call
//     const xhr = new XMLHttpRequest()
//     const value = document.getElementById('search')
//     .value

//     let url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    
//     xhr.open('GET', url)

//     xhr.onreadystatechange = () => {
//         if(xhr.status === 200 && xhr.readyState === 4) {
//             const response = JSON.parse(xhr.responseText)
            
//             let output = ''
//             for(let i=0; i < response.items.length; i++) {
//                 output += `
//                 <div style="width: 22%; margin: 0.5em;">
//                     <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank" >
//                         <img style="width: 100%;" src=${response.items[i].snippet.thumbnails.high.url} />
//                     </a>
//                 </div>
//             `
//             }

//             document.querySelector('#videos').innerHTML = output
//         }
//     }

//     xhr.send()
// })

let fetchBtn = document.getElementById("fetchBtn");


fetchBtn.addEventListener('click', fetchBtnClick);

// adding function for event
function fetchBtnClick(){
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // opening object
    // for get request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);

    xhr.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('app');
            str = "";
            for (key in obj)
            {
                str += `<li>
                Name: ${obj[key].name} 
                website: ${obj[key].website}
                Username: ${obj[key].username}
                email: ${obj[key].email}
                
                
                </li>`;
            }
            app.innerHTML = str;

        }
        else{
            console.log("Some error occured!!");
        }
    }

    // sending request
    xhr.send();
    console.log("We are done fetching person details!");
}