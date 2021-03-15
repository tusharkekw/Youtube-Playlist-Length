const express = require('express')
const app = express();
const server = require('http').Server(app);


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());


var linkList =[]

app.get('/',(req,res)=>{
    res.render('index',{
        link_list:linkList
    })
})

app.post('/fetch-len',function(req,res){
    linkList.push(req.body.playlistLink)
    return res.redirect('back');
})
server.listen(3000)