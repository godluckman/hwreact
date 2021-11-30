const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res)=>{
    let htmlPath = path.join(__dirname,req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(htmlPath)
    if (!ext) {
        htmlPath += '.html'
    }
    fs.readFile(htmlPath, (err, content)=>{
        if (err) {
            fs.readFile(path.join(__dirname, 'error.html'), (err, data)=>{
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {'Content-type': 'text/html'})
                }
                res.end(data)
            })
        }
        else {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.end(content)
        }
    })
})


server.listen(3000, ()=> {
    console.log('started...')
})







//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>Test <i>check</i></h1>')
//     console.log(req.url)
//     if (req.url === '/testNode') {
//         fs.readFile(path.join(__dirname, 'testNode.html'), (err, data) => {
//             if (err){
//                 throw err
//             }
//         })
//     }
