const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeviceSchema = new Schema({
  name: {
    type: String,
    trim: false,
    required: true,
  },
  imei: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: String,
    trim: false,
    required: true,
  },
  spec: {
    type: String,
    trim: true,
    required: false,
  },
});

export default mongoose.model('Device', DeviceSchema);
