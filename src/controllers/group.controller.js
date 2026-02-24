import Group from "../models/Group.js";
import Activity from "../models/Activity.js"; // 🔹 No olvides importar Activity

// 🔥 Función para crear los grupos por defecto si no existen
const createDefaultGroups = async () => {
  const defaultGroups = ["GRUPO ROJO", "GRUPO AZUL"];
  for (const name of defaultGroups) {
    const exists = await Group.findOne({ name });
    if (!exists) {
      await Group.create({ name });
      console.log(`Grupo creado automáticamente: ${name}`);
    }
  }
};

// Ejecutar al iniciar el controlador (o al iniciar tu servidor)
createDefaultGroups().catch((err) =>
  console.error("Error creando grupos por defecto:", err),
);

export const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listGroups = async (req, res) => {
  try {
    const groups = await Group.find().sort({ totalPoints: -1 });
    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addGroupPoints = async (req, res) => {
  try {
    const { points, description } = req.body;
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ message: "Grupo no encontrado" });

    group.totalPoints += points;
    await group.save();

    await Activity.create({
      description,
      points,
      action: "SUMA",
      group: group._id,
    });

    res.json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const subtractGroupPoints = async (req, res) => {
  try {
    const { points, description } = req.body;
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ message: "Grupo no encontrado" });

    group.totalPoints -= points;
    await group.save();

    await Activity.create({
      description,
      points,
      action: "RESTA",
      group: group._id,
    });

    res.json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
