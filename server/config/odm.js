import mongoose from 'mongoose';
import winston from './winston';

class MongooseODM{
  // constructor
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
      // En caso de la conexion no sea exitosa
      return false;
    }
  }
}

export default MongooseODM;