const express = require('express');

const app = new express();

const router = express.Router();

router.route('/data')
    .get((req, res) => {
        setTimeout(function() {
            res.set('Access-Control-Allow-Origin', '*')
            res.send([11, 22, 33])
        }, 1000)
    })

app.use('/api', router);

app.listen(8080,function() {
    console.log('the server is started at 8080')
})


