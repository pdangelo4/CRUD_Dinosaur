const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
    const cryptids = fs.readFileSync(__dirname + '/../cryptids.json');
    const crypData = JSON.parse(cryptids);
    console.log(crypData);
    res.render('cryptids/index', {
        mycryps: crypData
    })   //send("Stub: cryptids works!")
})

router.post('/', (req, res) => {
    console.log(req.body);
    //read the cryptids file
    var cryptids = fs.readFileSync(__dirname + "/../cryptids.json")
    var crypData = JSON.parse(cryptids);
    // Add to the cryptids array
    crypData.push(req.body);
    //Save the cryptids to the cryptids.json file
    fs.writeFileSync(__dirname + "/../cryptids.json", JSON.stringify(crypData));
    
    res.redirect('/cryptids')   //send("test");
})

router.get('/new', (req, res) => {
    res.render('cryptids/new');
})

router.get('/:idx', (req, res) => {
    const cryptids = fs.readFileSync(__dirname + '/../cryptids.json');
    const crypData = JSON.parse(cryptids);
    //get the idx value from the ul parameters
    var crypIndex = parseInt(req.params.idx);
    // console.log(mycrypData);
    res.render('cryptids/show', {
        mycryp: crypData[crypIndex]
    }) 
})



module.exports = router;