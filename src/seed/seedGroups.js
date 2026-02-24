import mongoose from "mongoose";
import dotenv from "dotenv";
import Group from "../models/Group.js";

dotenv.config();

const seedGroups = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB conectado para seed");

    const defaultGroups = ["GRUPO ROJO", "GRUPO AZUL"];

    for (const name of defaultGroups) {
      const exists = await Group.findOne({ name });
      if (!exists) {
        await Group.create({ name });
        console.log(`🔥 Grupo creado: ${name}`);
      } else {
        console.log(`⚠️ ${name} ya existe`);
      }
    }

    console.log("✅ Seed completado");
    process.exit();
  } catch (error) {
    console.error("❌ Error en seed:", error);
    process.exit(1);
  }
};

seedGroups();
