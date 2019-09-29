import deviceModel from '../model/DeviceModel';

module.exports = {
  create(req, res, next) {
    deviceModel.create(
      {
        name: req.body.name,
        imei: req.body.imei,
        location: req.body.location,
      },
      (err, result) => {
        if (err) {
          next(err);
        } else {
          res.json({ status: 'success', message: result, data: null });
        }
      },
    );
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
      console.log(req.params.device_id, 'id');
      const data = await deviceModel.findOneAndUpdate(req.params.device_id, req.body, { new: true });
      res.status(200).send(data);
    } catch (err) {
      throw err;
    }
  },
};
