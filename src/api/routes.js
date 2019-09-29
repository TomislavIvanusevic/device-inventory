import { Router } from 'express';
import deviceController from './controller/DeviceController';

const router = Router();

router.post('/create', deviceController.create);
router.get('/devices', deviceController.get);
router.get('/device/:device_id', deviceController.getDevice);
router.put('/device/:device_id', deviceController.updateDevice);

export default router;
