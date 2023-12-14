const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(__dirname + '/public'));//THE MAIN HTML FILE MUST BE NAMED "index.html" FOR express static to function NOT 'main.html'

/*
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/public/main.html'));
    //res.sendFile(path.join(__dirname + '/public/static/styles.css'))
})
*/
app.listen(3000, () =>{console.log('Server is listening on Port 3000');} );






/*
//app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use(express.urlencoded({ extended: true })); did not work with json data? Maybe data that is recieved is utf?
//app.use(express.json()); //seems to work with json data
*/



//app.use('/', express.static(__dirname + '/public')); works, but __dirname is not necessary though
/* Doesnt work:
app.get('/', (req, res) =>{
    res.send(express.static('public'));
});*/
/* Works but sends single file instead of static public folder.
app.post('/processitem/del', (req, res) => {
    res.sendFile(__dirname + '/public/del.html');
});
*/