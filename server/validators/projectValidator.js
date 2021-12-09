import * as Yup from 'yup';

// Creando el esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere nombre'),
  description: Yup.string()
    .max(500, 'La descripción esta limitada a 500 caracteres')
    .required('Se requiere una descripción'),
});

// Creando middleware que ealizara la validación 
const getProject = (req) => {
  // Extraemos datos del formulario del cuerpo de la peticion
  const { name, description } = req.body;
  // Regregamos un objeto Project formado por los datos del formualario
  return {
    name,
    description,
  };
};

export default {
  getProject,
  projectSchema,
};