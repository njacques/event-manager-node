const express = require("express");
const asyncHandler = require('express-async-handler');
const Event = require("../models/events");

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  const events = await Event.all();
  res.send(events);
}));

router.post("/", asyncHandler(async (req, res) => {
  const event = await Event.create({
    event_type: req.body.event_type,
    event_date: req.body.event_date,
    title: req.body.title,
    speaker: req.body.speaker,
    host: req.body.host,
    published: req.body.published
  });

  res.send(event);
}));

router.get("/:eventId", asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  res.send(event);
}));

router.put("/:eventId", asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  await event.update(req.body);

  res.sendStatus(204);
}));

router.delete("/:eventId", asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  await event.destroy;

  res.sendStatus(204);
}));

module.exports = router;
