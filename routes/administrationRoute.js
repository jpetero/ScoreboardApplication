const express = require('express');
const router = express.Router();

const AdministrationController = require('../controllers/AdministrationController');
const administrationController = new AdministrationController();

//passport.authenticate('jwt', { session: false }),
router.post('/add-users-to-role', (req, res) =>
  administrationController.addUsersToRole(req, res)
);
router.get('/add-roles-to-user', (req, res) =>
  administrationController.addRolesToUsers(req, res)
);
module.exports = router;
