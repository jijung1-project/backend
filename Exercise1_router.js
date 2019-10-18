let express = require('express');
let exercise1_router = require('multer');
let fileNames = Array();
let {PythonShell} = require('python-shell');


function getPrediction() {
    return new Promise(   async function (resolve, reject) {
        let options = {
            mode: 'text',
            pythonPath:'',
            pythonOptions: ['-u'],
            scriptPath: '',
            args: fileNames
        };
        await PythonShell.run('./model/model.py', options, function(err, results){
            if(err) throw err;
            console.log(results)
            resolve(results);
        });


    });
}


let storage = exercise1_router.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = exercise1_router({storage: storage});

let router = express.Router();

router.route('/upload').get(function (req, res) {
    res.render('post.html');
});

router.route('/results').post(upload.array('photo',10),function(req,res){
    fileNames = Array();
    let files = req.files;

    for(let i=0;i<files.length;i++){
        console.dir(req.files[i]);
        fileNames.push(req.files[i].path);
    }

    id = req.body.id;
    let item = req.files[0].originalname

    getPrediction().then(function(predictions){
        res.render('result.html',{predictions:predictions, src:item})
    });

});

router.route('/check').get(function (req, res) {

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>page</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("<ul>")
    console.log(arr.length);
    for(i=0; i<arr.length;i++){
        let url = "\'"+"http://localhost:5000/"+arr[i][1]+"\'";
        res.write(" <h1> id : " + arr[i][0] + "</h1>");
        res.write("<img src="+url+">");
        res.write("<br>");
    }
    res.write("</ul>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
});


module.exports = router;