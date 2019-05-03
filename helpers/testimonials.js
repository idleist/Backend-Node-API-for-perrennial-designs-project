var db = require("../models");

exports.getTestimonials = (req, res) => {
  db.Testimonial.find()
    .then(testimonials => {
      res.json(testimonials);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.getTestimonial = (req, res) => {
  db.Testimonial.findById(req.params.testimonialId)
    .then(testimonial => {
      res.json(testimonial);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.createTestimonial = (req, res) => {
  db.Testimonial.create(req.body)
    .then(newTestimonial => {
      res.status(201).json(newTestimonial);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.updateTestimonial = (req, res) => {
  db.Testimonial.findOneAndUpdate({ _id: req.params.testimonialId }, req.body, {
    new: true
  })
    .then(testimonial => {
      res.json(testimonial);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.deleteTestimonial = (req, res) => {
  db.Testimonial.remove({ _id: req.params.testimonialId })
    .then(() => res.send("We deleted it"))
    .catch(err => {
      res.send(err);
    });
};

module.exports = exports;
