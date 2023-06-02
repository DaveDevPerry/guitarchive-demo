const mongoose = require('mongoose');
const Song = require('../models/songModel');
const Status = require('../models/statusModel');
// ('use strict');

// fastify.register(require("fastify-cors"), function (instance) {
//   return (req, callback) => {
//     const corsOptions = { origin: true };
//     callback(null, corsOptions); // callback expects two parameters: error and options
//   };
// });

// fastify.get("/healthcheck", async (request, reply) => {
//   return { up: true };
// });

// const ITEMS_PER_PAGE = 10;
const SONGS_PER_PAGE = 10;
// const ITEMS_PER_PAGE = 5;
// const ITEMS_PER_PAGE = 2;

const getProducts = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// console.log(request.params, 'req params');
	// console.log(request, 'request');

	// Put all your query params in here
	const query = {};
	// console.log(query, 'query');
	// const query = {
	// 	isFavourite: true,
	// };
	// console.log(query, 'query');

	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20

		const countPromise = Song.estimatedDocumentCount(query);

		const itemsPromise = Song.find(query)
			// .sort({ deadlineDate: 1 })
			// .sort({ deadlineDate: null })
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		// const itemsPromise = Song.find(query).limit(ITEMS_PER_PAGE).skip(skip);

		// const songsPromise = Song.find()
		// 	// .sort({ createdAt: 1 })
		// 	.sort({ deadlineDate: 1 })

		// 	.populate([
		// 		{
		// 			path: 'artist',
		// 			model: 'Artist',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 		{
		// 			path: 'arranger',
		// 			model: 'Arranger',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 		{
		// 			path: 'style',
		// 			model: 'Style',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 		{
		// 			path: 'status',
		// 			model: 'Status',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 	])
		// 	.exec();

		const [count, items] = await Promise.all([countPromise, itemsPromise]);

		// const pageCount = count / ITEMS_PER_PAGE; // 400 items / 20 = 20
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20

		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
		// return {
		// 	pagination: {
		// 		count,
		// 		pageCount,
		// 	},
		// 	items,
		// };
		// return {
		// 	pagination: {
		// 		count,
		// 		pageCount,
		// 	},
		// 	items,
		// };
	} catch (e) {
		console.error(e);
		return e;
	}
};

// const SONGS_PER_PAGE = 10;
const getAllSongs = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query get all songs');
	// console.log(request.params, 'req params');
	// console.log(request, 'request');

	// Put all your query params in here
	const query = {};
	// console.log(query, 'query');
	// const query = {
	// 	isFavourite: true,
	// };
	// console.log(query, 'query');

	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20

		const countPromise = Song.estimatedDocumentCount(query);

		const itemsPromise = Song.find(query)
			// .sort({ deadlineDate: 1 })
			// .sort({ deadlineDate: null })
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		// const itemsPromise = Song.find(query).limit(ITEMS_PER_PAGE).skip(skip);

		// const songsPromise = Song.find()
		// 	// .sort({ createdAt: 1 })
		// 	.sort({ deadlineDate: 1 })

		// 	.populate([
		// 		{
		// 			path: 'artist',
		// 			model: 'Artist',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 		{
		// 			path: 'arranger',
		// 			model: 'Arranger',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 		{
		// 			path: 'style',
		// 			model: 'Style',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 		{
		// 			path: 'status',
		// 			model: 'Status',
		// 			select: '_id name', //Fields you want to return in this populate
		// 		},
		// 	])
		// 	.exec();

		const [count, items] = await Promise.all([countPromise, itemsPromise]);

		// const pageCount = count / ITEMS_PER_PAGE; // 400 items / 20 = 20
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20

		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
		// return {
		// 	pagination: {
		// 		count,
		// 		pageCount,
		// 	},
		// 	items,
		// };
		// return {
		// 	pagination: {
		// 		count,
		// 		pageCount,
		// 	},
		// 	items,
		// };
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getFavourites = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		isFavourite: { $eq: true },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getTabs = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		isTab: { $eq: true },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getCapo = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		isCapo: { $eq: true },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getNoCapo = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		isCapo: { $eq: false },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getDeadlines = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		deadlineDate: { $ne: null },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);

		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getScores = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		isTab: { $eq: false },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);

		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		// console.log(count, 'count');
		// console.log(items, 'items');
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};
const getPracticing = async (request, res) => {
	const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// Put all your query params in here
	const query = {
		'status.name': 'Practicing',
	};

	const filtered = Song.find()
		.populate({
			path: 'status',
			match: {
				name: 'Practicing',
			},
		})
		.exec((error, items) => {
			items.map((item) => {
				// console.log(item.status, 'item');
				// return item.status !== null;
			});
		});
};

const getRecorded = async (request, res) => {
	// console.log('get recorded controller');
	// const page = request.query.page || 1;
	// console.log(request.query, 'req query');
	// console.log(request, 'request');
	// Put all your query params in here
	// ************  returning all songs
	// const query = {};
	// try {
	// 	const countPromise = await Song.countDocuments(query);
	// 	const recordedSongs = await Song.find(query);
	// 	console.log(countPromise, 'count promise');
	// 	res.status(200).json(recordedSongs);
	// } catch (error) {
	// 	console.log(error, 'error');
	// }
	//  ************  returning all favourites - BOOLEAN
	// 	const query = {
	// 		isFavourite: { $eq: true },
	// 	};
	// 	try {
	// 		const countPromise = await Song.countDocuments(query);
	// 		const recordedSongs = await Song.find(query);
	// 		console.log(countPromise, 'count promise');
	// 		res.status(200).json(recordedSongs);
	// 	} catch (error) {
	// 		console.log(error, 'error');
	// 	}
	// ************  returning all difficulty 3 - NUMBER
	// const query = {
	// 	difficulty: { $eq: 3 },
	// };
	// try {
	// 	const countPromise = await Song.countDocuments(query);
	// 	const recordedSongs = await Song.find(query);
	// 	console.log(countPromise, 'count promise');
	// 	res.status(200).json(recordedSongs);
	// } catch (error) {
	// 	console.log(error, 'error');
	// }
	// ************  returning all title is thriller - STRING
	// const query = {
	// 	title: { $eq: 'thriller' },
	// };
	// try {
	// 	const countPromise = await Song.countDocuments(query);
	// 	const recordedSongs = await Song.find(query);
	// 	console.log(countPromise, 'count promise');
	// 	res.status(200).json(recordedSongs);
	// } catch (error) {
	// 	console.log(error, 'error');
	// }
	// ************  returning all status is'622154e25df8ff0f94f1bed5'  - OBJECT ID
	const query = {
		status: { $eq: '622154e25df8ff0f94f1bed5' },
	};
	try {
		const countPromise = await Song.countDocuments(query);
		const recordedSongs = await Song.find(query);
		// console.log(countPromise, 'count promise');
		res.status(200).json(recordedSongs);
	} catch (error) {
		console.log(error, 'error');
	}
	// const query = {
	// 	// status.name: { $eq: 'youtube' },
	// 	// status: { name: { $eq: 'recorded' } },
	// 	// $match: { 'status.name': 'Recorded' },
	// 	// 'status.name': 'Recorded',
	// 	// 'status.name': { $eq: 'youtube' },
	// 	$match: { 'status.name': { $eq: 'Recorded' } }
	// };
	// const statuses = await Status.find({})

	// const countPromise = await Song.countDocuments(query);
	// const recordedSongs = await Song.find(query);
	// console.log(recordedSongs, 'recorded songs');
	// console.log(countPromise, 'count promise');
	// return recordedSongs;
	// res.status(200).json(recordedSongs);
	// 	// 		pagination: {
	// 	// 			count,
	// 	// 			pageCount,
	// 	// 		},
	// 	// 		items,
	// 	// 	});
	// try {
	// const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
	// const countPromise = Song.countDocuments(query);
	// const itemsPromise = await Song.aggregate([
	// 	{ $match: { 'status.name': 'youtube' } },
	// ])
	// const countPromise = Song.countDocuments({
	// 	$match: { 'status.name': 'Recorded' },
	// });
	// const itemsPromise = Song.find({ $match: { 'status.name': 'Recorded' } })
	// const countPromise = Song.countDocuments({ 'status.name': 'Recorded' });
	// const itemsPromise = Song.find({ 'status.name': 'Recorded' })
	// 	.populate({
	// 		path: 'status',
	// 		match: {
	// 			name: 'Recorded',
	// 		},
	// 	})
	// 	.exec(function (err, songs) {
	// 		songs = songs.filter(function (song) {
	// 			return song.status; // return only users with email matching 'type: "Gmail"' query
	// 		});
	// 	})
	// .populate([
	// 	{
	// 		path: 'artist',
	// 		model: 'Artist',
	// 		select: '_id name', //Fields you want to return in this populate
	// 	},
	// 	{
	// 		path: 'arranger',
	// 		model: 'Arranger',
	// 		select: '_id name', //Fields you want to return in this populate
	// 	},
	// 	{
	// 		path: 'style',
	// 		model: 'Style',
	// 		select: '_id name', //Fields you want to return in this populate
	// 	},
	// 	{
	// 		path: 'status',
	// 		model: 'Status',
	// 		select: '_id name', //Fields you want to return in this populate
	// 	},
	// ])
	// 	.limit(SONGS_PER_PAGE)
	// 	.skip(skip);
	// const [count, items] = await Promise.all([countPromise, itemsPromise]);
	// const pageCount =
	// 	(count / SONGS_PER_PAGE) % 1 > 0
	// 		? Math.ceil(count / SONGS_PER_PAGE)
	// 		: count / SONGS_PER_PAGE; // 400 items / 20 = 20
	// res.status(200).json({
	// 	pagination: {
	// 		count,
	// 		pageCount,
	// 	},
	// 	items,
	// });
	// } catch (e) {
	// 	console.error(e);
	// 	return e;
	// }
};

const getYoutube = async (request, res) => {
	// console.log('get youtube controller');
	const page = request.query.page || 1;
	const query = {
		status: { $eq: '622154e25df8ff0f94f1bed5' },
	};
	try {
		const skip = (page - 1) * SONGS_PER_PAGE; // 1 * 20 = 20
		const countPromise = Song.countDocuments(query);
		const itemsPromise = Song.find(query)
			.populate([
				{
					path: 'artist',
					model: 'Artist',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'arranger',
					model: 'Arranger',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'style',
					model: 'Style',
					select: '_id name', //Fields you want to return in this populate
				},
				{
					path: 'status',
					model: 'Status',
					select: '_id name', //Fields you want to return in this populate
				},
			])
			.limit(SONGS_PER_PAGE)
			.skip(skip);
		const [count, items] = await Promise.all([countPromise, itemsPromise]);
		const pageCount =
			(count / SONGS_PER_PAGE) % 1 > 0
				? Math.ceil(count / SONGS_PER_PAGE)
				: count / SONGS_PER_PAGE; // 400 items / 20 = 20
		res.status(200).json({
			pagination: {
				count,
				pageCount,
			},
			items,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
};

module.exports = {
	getAllSongs,
	getProducts,
	getPracticing,
	getFavourites,
	getTabs,
	getScores,
	getDeadlines,
	getCapo,
	getNoCapo,
	getYoutube,
	getRecorded,
};
// const mongoose = require('mongoose');
// const Product = require('../models/products');

// // fastify.register(require("fastify-cors"), function (instance) {
// //   return (req, callback) => {
// //     const corsOptions = { origin: true };
// //     callback(null, corsOptions); // callback expects two parameters: error and options
// //   };
// // });

// // fastify.get("/healthcheck", async (request, reply) => {
// //   return { up: true };
// // });

// const ITEMS_PER_PAGE = 10;

// const getProducts = async (request, res) => {
// 	const page = request.query.page || 1;

// 	// Put all your query params in here
// 	const query = {};

// 	try {
// 		const skip = (page - 1) * ITEMS_PER_PAGE; // 1 * 20 = 20

// 		const countPromise = Product.estimatedDocumentCount(query);

// 		const itemsPromise = Product.find(query).limit(ITEMS_PER_PAGE).skip(skip);

// 		const [count, items] = await Promise.all([countPromise, itemsPromise]);

// 		const pageCount = count / ITEMS_PER_PAGE; // 400 items / 20 = 20

// 		res.status(200).json({
// 			pagination: {
// 				count,
// 				pageCount,
// 			},
// 			items,
// 		});
// 		// return {
// 		// 	pagination: {
// 		// 		count,
// 		// 		pageCount,
// 		// 	},
// 		// 	items,
// 		// };
// 		// return {
// 		// 	pagination: {
// 		// 		count,
// 		// 		pageCount,
// 		// 	},
// 		// 	items,
// 		// };
// 	} catch (e) {
// 		console.error(e);
// 		return e;
// 	}
// };

// module.exports = {
// 	getProducts,
// };
