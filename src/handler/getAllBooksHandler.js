const books = require("../books");

const getAllBooksHandler = (request, h) => {
	const { name, reading, finished } = request.query;

	if (name !== undefined) {
		const BooksName = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
		const response = h.response({
			status: "success",
			data: {
				books: BooksName.map((book) => ({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				})),
			},
		});
		response.code(200);
		return response;
	} else if (reading !== undefined) {
		const BooksReading = books.filter((book) => Number(book.reading) === Number(reading));

		const response = h.response({
			status: "success",
			data: {
				books: BooksReading.map((book) => ({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				})),
			},
		});
		response.code(200);
		return response;
	} else if (finished !== undefined) {
		const BooksFinished = books.filter((book) => book.finished == finished);

		const response = h.response({
			status: "success",
			data: {
				books: BooksFinished.map((book) => ({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				})),
			},
		});
		response.code(200);
		return response;
	} else {
		const response = h.response({
			status: "success",
			data: {
				books: books.map((book) => ({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				})),
			},
		});
		response.code(200);
		return response;
	}
};

module.exports = getAllBooksHandler;
