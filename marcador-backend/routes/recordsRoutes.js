import express from 'express';

import recordController from '../controllers/recordController.js';

const recordRouter = express.Router();

recordRouter.post('/createrecord', recordController.createRecord);

recordRouter.post('/getallrecordsforauser', recordController.getAllRecordsForAUser);

export default recordRouter;