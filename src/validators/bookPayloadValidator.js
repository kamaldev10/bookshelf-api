const Joi = require("@hapi/joi");

const bookPayloadSchema = Joi.object({
  name: Joi.string().required().description("Nama buku"),
  year: Joi.number().integer().required().description("Tahun terbit"),
  author: Joi.string().required().description("Nama penulis"),
  summary: Joi.string().required().description("Ringkasan"),
  publisher: Joi.string().required().description("Nama penerbit"),
  pageCount: Joi.number().integer().required().description("Jumlah halaman"),
  readPage: Joi.number()
    .integer()
    .required()
    .description("Jumlah halaman dibaca"),
  reading: Joi.boolean().required().description("Status sedang dibaca"),
});

module.exports = { bookPayloadSchema };
