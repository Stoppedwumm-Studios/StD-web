const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
app.use(express.static('./static'));

app.listen(3000, () => { 
    console.log("It Works!");
});

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req, res) => {
    var url = req.query.url;    
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
    ytdl(url, {format: 'mp4'}).pipe(res);
});

app.listen(4000, () => { 
    console.log("It Works!");
});