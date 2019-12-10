//..load git apis ..............
//communicate bn localserver to github server

const api="https://api.github.com/users";//api which you want to communicate
window
.fetch(api)//url which you want to fetch the data retreiveing that
.then(data=>{
        //convert response object into json object use json method
         data.json()
            
               .then(users=>{
                   //print object in an array
                   var output=[];
                   //print in  the form of table on web page
                   for (let user of users) {
                       output+=`
                       <div class="container">
                       <table class="table table-bordered mt-4">
                       <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>photo</th>
                            <th>repo</th>
                            <th>url</th>
                        </tr>
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.login}</td>
                            <td><img src="${user.avatar_url}"/></td>
                            <td>${user.repos_url}</td>
                            <td>${user.url}</td>
                        </tr>
                        </table>
                        </div>
                       `;
                       document.getElementById('template').innerHTML=output;
                     console.log(user.login);  
                   }
               })
        .catch(err=>console.log(err));
    })
        
.catch(err=>console.log(err));//to call asynchronous calls(api)

