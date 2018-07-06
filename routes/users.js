const express = require("express");
const asyncHandler = require("express-async-handler");
const passport = require("passport");
const auth = require("./auth");
const User = require("../models/users");

const router = express.Router();

// POST new user route (optional, everyone has access)
router.post(
  "/",
  auth.optional,
  asyncHandler(async (req, res) => {
    const {
      body: { user }
    } = req;

    if (!user.email) {
      return res.status(422).json({
        errors: {
          email: "is required"
        }
      });
    }

    if (!user.password) {
      return res.status(422).json({
        errors: {
          password: "is required"
        }
      });
    }

    const finalUser = await User.create(user);

    return res.json({ user: finalUser.toAuthJSON() });
  })
);

// POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res.json({ user: user.toAuthJSON() });
      }

      return status(400).info;
    }
  )(req, res, next);
});

// GET current route (required, only authenticated users have access)
router.get("/current", auth.required, asyncHandler(async (req, res) => {
  const {
    payload: { email }
  } = req;

  console.log(email);

  const user = await User.findOne({ where: { email } });

  if (!user) {
    console.log('no user :(');
    return res.sendStatus(400);
  }

  return res.json({ user: user.toAuthJSON() });
}));

router.get("/test", asyncHandler(async (req, res) => {
  const user = await User.findById(1);

  res.send(user.toAuthJSON());
}));

router.get("/", (req, res) => {
  User.all().then(users => res.send(users));
});

// router.post("/", (req, res) => {
//   User.create({
//     email: req.body.email,
//     password: req.body.password
//   }).then(() => res.send("User added!"));
// });

module.exports = router;
