const index = (req, res) => {
  res.send('Respondiendo a "/Projects/index"');
};

// "/projects/add"
const add = (req, res) => {
  res.render('project/addView');
};
// Pendiente por programar
export default {
  add,
  index,
};
