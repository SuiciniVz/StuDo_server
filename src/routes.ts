import express from 'express';

import ActivityController from './controllers/ActivityController'

const routes = express.Router();

const activityController = new ActivityController()


routes.get('/to-do-list', activityController.getAllActivities)

routes.post('/new-activity', activityController.createActivity)

routes.get('/delete-activity/:id?', activityController.deleteActivity)

export default routes;