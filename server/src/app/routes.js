const router = require('express').Router()
const CrudController = require('./controller/CrudController')

router.get("/index",CrudController.index)
router.post("/create",CrudController.Create)
router.put("/update/:_id",CrudController.update)
router.delete("/delete/:_id",CrudController.delete)

module.exports = router