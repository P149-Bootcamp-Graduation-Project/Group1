const { Router } = reqiure("express");

const {
  air_controller,
  temp_controller,
  elec_controller,
} = require("../controllers/sensors/sensors_controller");

const router = Router();

router.post("/temperature", temp_controller);
router.post("/electricity", elec_controller);
router.post("/air", air_controller);

module.exports = router;
