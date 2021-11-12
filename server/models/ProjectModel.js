// importar mongoose
import * as mongoose from 'mongoose';
// destructuracion se squema
import { Schema } from 'mongoose';

// crea schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('project', ProjectSchema);