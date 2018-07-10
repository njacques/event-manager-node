const express = require("express");
const asyncHandler = require("express-async-handler");
const eventService = require("../services/events");
const auth = require("./auth");

const router = express.Router();

router.get(
  "/",
  auth.required,
  asyncHandler(async (req, res) => {
    const events = await eventService.fetchAll();
    res.send(events);
  })
);

router.post(
  "/",
  auth.required,
  asyncHandler(async (req, res) => {
    const event = await eventService.create(req.body);
    res.send(event);
  })
);

router.get(
  "/:eventId",
  auth.required,
  asyncHandler(async (req, res) => {
    const event = await eventService.findById(req.params.eventId);
    res.send(event);
  })
);

router.put(
  "/:eventId",
  auth.required,
  asyncHandler(async (req, res) => {
    await eventService.update(req.params.eventId, req.body);
    res.sendStatus(204);
  })
);

router.delete(
  "/:eventId",
  auth.required,
  asyncHandler(async (req, res) => {
    await eventService.delete(req.params.eventId);
    res.sendStatus(204);
  })
);

module.exports = router;
