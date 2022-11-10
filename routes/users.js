const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name); //get parameters from _GET value
  res.send("Users List");
});

router.get("/create", (req, res) => {
  res.render("users/create");
});

router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ name: req.body.name });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/create", { name: req.body.name });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`users get with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id ${req.params.id}`);
  });

const users = [
  {
    name: "kevin",
  },
  {
    name: "darmawan",
  },
];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
