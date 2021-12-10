// Action Methods
// "/projects"
const index = (req, res) => {
  res.send('Respondiendo a "/Projects/index"');
};

// GET "/projects/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/projects/add"
const addPost = (req, res) => {
  // Rescatando la información del formulario
  const { validData, errorData } = req;
  // Creando view models
  let project = {};
  let errorModel = {};
  // Verificando si hay errores
  if (errorData) {
    // Rescatar objeto validado
    project = errorData.value;
    // Usamos reduce y generar errores a partir de inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Crear variable temporal para evitar el error
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    project = validData;
  }
  res.render('project/addView', { project, errorModel });
};

export default {
  add,
  addPost,
  index,
};