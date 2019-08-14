const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
    const dinosaurs = fs.readFileSync(__dirname + '/../dinosaurs.json');
    const dinoData = JSON.parse(dinosaurs);
    console.log(dinoData);
    res.render('dinosaurs/index', {
        myDinos: dinoData
    })   //send("Stub: Dinosaurs works!")
})

router.post('/', (req, res) => {
    console.log(req.body);
    //read the dinosaurs file
    var dinosaurs = fs.readFileSync(__dirname + "/../dinosaurs.json")
    var dinoData = JSON.parse(dinosaurs);
    // Add to the dinosaurs array
    dinoData.push(req.body);
    //Save the dinosaurs to the dinsosaurs.json file
    fs.writeFileSync(__dirname + "/../dinosaurs.json", JSON.stringify(dinoData));
    
    res.redirect('/dinosaurs')   //send("test");
})

router.get('/new', (req, res) => {
    res.render('dinosaurs/new');
})

router.get('/:idx', (req, res) => {
    const dinosaurs = fs.readFileSync(__dirname + '/../dinosaurs.json');
    const dinoData = JSON.parse(dinosaurs);
    //get the idx value from the ul parameters
    var dinoIndex = parseInt(req.params.idx);
    res.render('dinosaurs/show', {
        myDino: dinoData[dinoIndex]
    }) 
})



module.exports = router;