import Person from "../../models/Person.js";

async function getPersons(req, res) {
  const persons = await Person.find({});

  return res.status(200).json(persons);
}

async function getPerson(req, res) {
  const id = req.params.id;
  const person = await Person.findById(id);

  return res.status(200).json(person);
}

async function createPerson(req, res) {
  const { name, number } = req.body;

  const person = new Person({
    name,
    number,
  });

  const savedPerson = await person.save();

  return res.status(201).json(savedPerson);
}

async function updatePerson(req, res) {
  const id = req.params.id;

  const { name, number } = req.body;

  const person = {
    name,
    number,
  };

  const updatedPerson = await Person.findByIdAndUpdate(id, person, {
    new: true,
  });

  res.status(200).json(updatedPerson);
}

async function deletePerson(req, res) {
  const id = req.params.id;

  await Person.findByIdAndDelete(id);

  res.status(204).end();
}

export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
