//Connecting the database server and listening port
require("dotenv").config();

const app = require("./app");
const port = process.env.PORT_NUMBER || 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
