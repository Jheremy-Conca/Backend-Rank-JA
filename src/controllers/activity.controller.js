import Activity from "../models/Activity.js";

export const listActivities = async (req, res) => {
  const activities = await Activity.find()
    .populate("person", "fullName")
    .populate("group", "name")
    .sort({ date: -1 });

  res.json(activities);
};
