import mongoose from 'mongoose';

const sectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  machineCount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['good', 'with issues'],
    required: true,
  },
});

const Sector = mongoose.model('Sector', sectorSchema);

export { Sector };