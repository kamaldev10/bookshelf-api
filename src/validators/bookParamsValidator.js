const Joi = require("@hapi/joi");

const bookParamsSchema = Joi.object({
  bookId: Joi.string().required().description("ID Buku"),
});

module.exports = { bookParamsSchema };
