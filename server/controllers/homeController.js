const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
  });
};

const greeting = (req, res) => {
  res.status(200).json({
    message: 'Hola Campeon del FullStarck',
  });
};

const about = (req, res) => {
  res.render('home/about', { title: 'acerca de projNotes' });
};

export default {
  index,
  greeting,
  about,
};
