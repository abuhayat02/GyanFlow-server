// const { default: Course } = require("../models/coursesMode");
// import Course from './../models/coursesMode.js';
import Course from "../models/coursesMode.js";
import User from "../models/userModel.js";

let courseStats = async (req, res) => {
  try {
    const totalCourse = await Course.countDocuments();

    const totalStudents = await User.countDocuments({ role: "student" });

    res.status(200).send({
      success: true,
      data: { totalCourse, totalStudents },
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      data: "no stats found",
    });
  }
};

export { courseStats };
