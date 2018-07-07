const Event = require("../models/events");

const events = {
  create(fields) {
    return Event.create({
      event_type: fields.event_type,
      event_date: fields.event_date,
      title: fields.title,
      speaker: fields.speaker,
      host: fields.host,
      published: fields.published
    });
  },

  async delete(eventId) {
    const event = await Event.findById(eventId);
    return event.destroy();
  },

  fetchAll() {
    return Event.all();
  },

  findById(eventId) {
    return Event.findById(eventId);
  },

  async update(eventId, fields) {
    const event = await Event.findById(eventId);
    return event.update(fields);
  }
};

module.exports = events;
