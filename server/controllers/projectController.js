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
  const { name, description } = req.body;
  res.json({
    name,
    description,
  });
};

// Pendiente por programar
export default {
  add,
  addPost,
  index,
};
