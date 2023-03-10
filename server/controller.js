const compliments = [
  "Gee, you're a smart cookie!",
  'Cool shirt!',
  'Your Javascript skills are stellar.',
];

const fortunes = [
  'somebody will crash your car',
  'You will find a pair of ski boots',
  'you will find $3000 on your porch',
];

module.exports = {
  getCompliment: (req, res) => {
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getCompliments: (req, res) => {
    res.send(compliments);
  },

  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  addCompliment: (req, res) => {
    const { newCompliment } = req.body;
    compliments.push(newCompliment);
    res.status(200).send(compliments);
  },

  deleteCompliment: (req, res) => {
    console.log(+req.params.id);
    let id = +req.params.id;
    res.send(compliments[id]);
    compliments.splice(id, 1);
  },

  editFortune: (req, res) => {
    let { newFortune, existingFortune } = req.body;
    let index = fortunes.indexOf(existingFortune);
    fortunes[index] = newFortune;
    res.send(fortunes[index]);
  },
};
