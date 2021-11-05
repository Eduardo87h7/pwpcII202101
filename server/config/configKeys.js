// importando el paquete Dotenv
import dotenv from 'dotenv';
// cargar el documento
dotenv.config();

// exportando los valors de configuracion 
export default{
  homeUrl: `${process.env.APP_URL}:${process.env.PORT}`,
  port: process.env.PORT,
  ip: process.env.IP,
};
