const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const { bookPayloadSchema } = require("./validators/bookPayloadValidator");
const { bookParamsSchema } = require("./validators/bookParamsValidator");
const { bookQuerySchema } = require("./validators/bookQueryValidator");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
    options: {
      tags: ["api"],
      description: "Menambahkan buku baru",
      validate: {
        payload: bookPayloadSchema,
      },
    },
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
    options: {
      tags: ["api"],
      description: "Mengambil semua buku",
      validate: {
        query: bookQuerySchema,
      },
    },
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
    options: {
      tags: ["api"],
      description: "Mengambil detail buku berdasarkan ID",
      validate: {
        params: bookParamsSchema,
      },
    },
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
    options: {
      tags: ["api"],
      description: "Memperbarui data buku",
      validate: {
        params: bookParamsSchema,
        payload: bookPayloadSchema,
      },
    },
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
    options: {
      tags: ["api"],
      description: "Menghapus buku berdasarkan ID",
      validate: {
        params: bookParamsSchema,
      },
    },
  },
];

module.exports = routes;
