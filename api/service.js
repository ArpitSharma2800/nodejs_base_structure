const pool = require("../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO table VALUES(?)`,
      [
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};