const express = require('express');
const router = express.Router();
const { getJobs, createJob } = require('../controllers/jobController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getJobs);
router.post('/', protect, admin, createJob);

module.exports = router;
