import Group from "../models/Group.js";

export const createGroup = async (req, res) => {
  const group = await Group.create(req.body);
  res.json(group);
};

export const listGroups = async (req, res) => {
  const groups = await Group.find().sort({ totalPoints: -1 });
  res.json(groups);
};

export const addGroupPoints = async (req, res) => {
  const { points, description } = req.body;
  const group = await Group.findById(req.params.id);

  group.totalPoints += points;
  await group.save();

  await Activity.create({
    description,
    points,
    action: "SUMA",
    group: group._id,
  });

  res.json(group);
};

export const subtractGroupPoints = async (req, res) => {
  const { points, description } = req.body;
  const group = await Group.findById(req.params.id);

  group.totalPoints -= points;
  await group.save();

  await Activity.create({
    description,
    points,
    action: "RESTA",
    group: group._id,
  });

  res.json(group);
};
