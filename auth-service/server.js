const app = require("./app");

const PORT = process.env.PORT_ONE || 7070;

app.listen(PORT, () => {
    console.log(`Auth-Service running on port ${PORT}`);
});
