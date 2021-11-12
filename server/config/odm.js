import mongoose from 'mongoose';
import winston from './winston';

class MongooseODM {
  constructor(url) {
    this.url = url;
  }

  // Metodo conexion.
  async connect() {
    mongoose.Promise = global.Promise;
    winston.info(`Conectando a la BD en: ${this.url}`);
    try {
      await mongoose.connect(this.url);
      return true;
    } catch (error) {
      winston.error(`Error al conectarse a la BD: ${error.message}`);
      // SE RETORNA FALSE
      return false;
    }
  }
}
export default MongooseODM;