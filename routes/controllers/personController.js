async function getPersons(req, res) {
  res.send("Persons resources");
}

async function getPerson(req, res) {
  res.send("Person resources");
}

async function createPerson(req, res) {
  res.send("Persons has been created");
}

async function updatePerson(req, res) {
  res.send("Persons has been updated");
}

async function deletePerson(req, res) {
  res.send("Persons has been deleted");
}

export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
