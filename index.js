const http = require('http')
import fetch from "node-fetch"
const server = http.createServer((req, res) =>{
    const url = req.url
    let tableData = "<table border='1'><tr><th>Name</th><th>Height</th><th>Gender</th><th>Birth Year</th><th>url</th></tr></table>"
    if(url === `/`){
        res.write(<h1>Home Page</h1>)
        res.end("https://placekitten.com/640/360")
    }
    if(url === `/message`){
        res.write("Welcome to my Home Page ");
        res.end()
    }
    if(url === '/list') {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            createData(data);
            res.write(tableData);
            res.end()    
        })
    }
   else {
    res.statusCode = 404
    res.end('Error Page')
   }
    function createData(data) {
data.results.forEach(element => {
  tableData += `<tr><td>${element.name}</td><td>${element.height}</td><td>${element.gender}</td><td>${element.birthyear}</td><td>${element.url}</td></tr>`;
});
tableData += `</table>`
    }
}).listen(8090, console.log(`Server listening on port 8090`))










