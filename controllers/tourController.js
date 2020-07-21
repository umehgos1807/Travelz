const Tour = require("./../models/tourModel");

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.createTour = async (req, res) => {
  const newTour = await Tour.create(req.body);
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "updated",
  });
};
exports.deleteTour = (req, res) => {
  res.status(200).json({
    status: "deleted",
  });
};
