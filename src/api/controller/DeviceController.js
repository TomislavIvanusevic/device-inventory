import deviceModel from '../model/DeviceModel';

export default {
  async create(req, res, next) {
    try {
      const data = await deviceModel.create({ ...req.body });
      res.status(201).json({ status: 'success' }, data);
    } catch (err) {
      next(err);
    }
  },
  async get(req, res) {
    try {
      const data = await deviceModel.find({});
      res.json(data);
    } catch (err) {
      throw err;
    }
  },
  async getDevice(req, res) {
    try {
      const data = await deviceModel.findById(req.params.device_id);
      res.json(data);
    } catch (err) {
      throw err;
    }
  },
  async updateDevice(req, res) {
    try {
      const data = await deviceModel.findOneAndUpdate(
        req.params.device_id, req.body, { new: true },
      );
      res.status(200).send(data);
    } catch (err) {
      throw err;
    }
  },
  async deleteDevice(req, res) {
    try {
      const data = await deviceModel.findByIdAndDelete(req.params.device_id);
      res.status(200).send(data);
    } catch (err) {
      throw err;
    }
  },
};
