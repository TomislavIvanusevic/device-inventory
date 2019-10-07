import { Router } from 'express';
import deviceController from './controller/DeviceController';

const router = Router();

router.post('/device', deviceController.create);
router.get('/devices', deviceController.get);
router.delete('/device/:device_id', deviceController.deleteDevice);
router.get('/device/:device_id', deviceController.getDevice);
router.put('/device/:device_id', deviceController.updateDevice);

export default router;
