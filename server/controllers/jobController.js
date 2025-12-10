const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createJob = async (req, res) => {
    const { title, company, location, type, description } = req.body;

    try {
        const job = new Job({
            title,
            company,
            location,
            type,
            description,
            postedBy: req.user._id
        });

        const createdJob = await job.save();
        res.status(201).json(createdJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
