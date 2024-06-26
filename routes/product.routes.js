const express = require('express')
const router = express.Router();

router.get("/products", (req, res) => {
    res.send("GET products working!!")
})


module.exports = router;