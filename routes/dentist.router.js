const router = require('express').Router();
const appointmentRouter = require('./appointment.router');

const dentistController = require("../controllers/dentist.controller");

// RESOURCES

router.use('/:dentistId/appointments', appointmentRouter);

// ENDPOINTS

// GET ALL

router.get ('/', async (req,res) => {
    try{
        res.json(await dentistController.indexAll());
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        });
    };
});

// GET BY ID

router.get('/:id', async (req,res) => {
    try{
        res.json(await dentistController.findById(req.params.id));
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        });
    };
});

module.exports = router;