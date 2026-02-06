import Person from "../models/Person.js";
import Group from "../models/Group.js";
import Activity from "../models/Activity.js";

// ✅ Crear persona
export const createPerson = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.json(person);
  } catch (error) {
    res.status(500).json({ message: "Error al crear persona" });
  }
};

// ✅ Listar personas
export const listPersons = async (req, res) => {
  try {
    const persons = await Person.find()
      .populate("group", "name")
      .sort({ points: -1 });

    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: "Error al listar personas" });
  }
};

// ✅ OBTENER PERSONA POR ID (🔥 ESTO FALTABA)
export const getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id).populate("group");

    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la persona" });
  }
};

// ✅ Actualizar persona
export const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(person);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar persona" });
  }
};

// ✅ Sumar puntos
export const addPoints = async (req, res) => {
  try {
    const { points, description } = req.body;

    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    person.points += points;
    await person.save();

    await Activity.create({
      description,
      points,
      action: "SUMA",
      person: person._id,
      group: person.group,
    });

    res.json(person);
  } catch (error) {
    res.status(500).json({ message: "Error al sumar puntos" });
  }
};

// ✅ Restar puntos
export const subtractPoints = async (req, res) => {
  try {
    const { points, description } = req.body;

    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    person.points -= points;
    await person.save();

    await Activity.create({
      description,
      points,
      action: "RESTA",
      person: person._id,
      group: person.group,
    });

    res.json(person);
  } catch (error) {
    res.status(500).json({ message: "Error al restar puntos" });
  }
};
