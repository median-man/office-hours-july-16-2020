const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "ice_creamDB",
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
  addIcecream();
});

function addIcecream() {
  const input = {
    flavor: "Cookies and Cream",
    price: 3.70,
    quantity: 120
  };
  connection.query("INSERT INTO products SET ?", input, (err, result) => {
    if (err) {
      console.log(error);
    } else {
      console.log(result);
    }
  })
}

