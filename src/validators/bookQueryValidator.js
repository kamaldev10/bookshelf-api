const Joi = require("@hapi/joi");

const bookQuerySchema = Joi.object({
  name: Joi.string().optional().description("Cari berdasarkan nama"),
  reading: Joi.number()
    .valid(0, 1)
    .optional()
    .description("Filter sedang dibaca"),
  finished: Joi.number()
    .valid(0, 1)
    .optional()
    .description("Filter selesai dibaca"),
});

module.exports = { bookQuerySchema };
