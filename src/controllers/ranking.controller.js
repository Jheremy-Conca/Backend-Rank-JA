import Group from "../models/Group.js";
import Person from "../models/Person.js";

export const groupRanking = async (req, res) => {
  const ranking = await Group.find().sort({ totalPoints: -1 });
  res.json(ranking);
};

export const personRanking = async (req, res) => {
  const ranking = await Person.find()
    .populate("group", "name")
    .sort({ points: -1 });

  res.json(ranking);
};
