const { Router } = reqiure("express");
const sensors = require("./sensors");

const router = Router();

router.use("/sensors", sensors);

module.exports = router;
