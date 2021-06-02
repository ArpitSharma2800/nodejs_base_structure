const {
  create
} = require("./service");

module.exports = {
  serverCheck: (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Server running .."
    });
  },
  controllerFunc: (req, res) => {
    data = {
      id: null,
    }
    create(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error Message",
        });
      }
      return res.status(200).json({
        success: true,
        message: "SUCCESS MESSAGE"
      });
    });
  }
};