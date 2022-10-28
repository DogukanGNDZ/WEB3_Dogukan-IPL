const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://dog:${password}@cluster0.jvuqecv.mongodb.net/phonebook?retryWrites=true&w=majority`;

const phoneSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

const Phone = mongoose.model("phonebook", phoneSchema);

if (process.argv.length < 4) {
  mongoose.connect(url).then((result) => {
    console.log("connected");
    Phone.find({}).then((result) => {
      result.forEach((phone) => {
        console.log(phone);
      });
      mongoose.connection.close();
    });
  });
} else {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      const note = new Phone({
        name: process.argv[3],
        phone: process.argv[4],
      });

      return note.save();
    })
    .then(() => {
      console.log(process.argv[3] + " saved!");
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}
