// import 'core-js/shim'
// import "core-js/modules/es7.symbol.async-iterator"

// // function* idMaker() {
// //     let index = 0;
// //     while (index < 3)
// //         yield index++;
// // }

// // let gen = idMaker();

// // //   console.log(gen.next()); // { value: 0, done: false }
// // //   console.log(gen.next()); // { value: 1, done: false }
// // //   console.log(gen.next()); // { value: 2, done: false }
// // //   console.log(gen.next()); // { done: true }

// // let count = 0

// // while (count < 5) {
// //     console.log(gen.next())
// //     count++
// // }

// // // async function* g() {
// // //     yield 1;
// // //     await setTimeout(() => {console.log('tt')}, 2000)
// // //     yield* [2, 3];

// // // }

// // // async function f() {
// // //     for await (const x of g()) {
// // //         console.log(x);
// // //     }

// // //     while (count < 5) {
// // //     console.log(gen.next())
// // //     count++
// // // }
// // // }


// // function myasync(gen, context = undefined) {
// // 	let generator = typeof gen === 'function' ? gen() : gen // Create generator if necessary
// // 	let { value: promise } = generator.next(context) // Pass last result, get next Promise
// // 	if ( typeof promise !== 'undefined' ) {
// // 		promise.then(resolved => myasync(generator, resolved))
// // 		.catch(error => generator.throw(error)) // Defer to generator error handling
// // 	}
// // }

// // /* Usage */
// // myasync(function* () { // Generators can't be declared with arrow syntax
// // 	try {
// // 		// Execution is paused until the yielded promise resolves
// // 		console.log(yield Promise.resolve('A Mortynight Run'))
// // 		// Promises already provide support for concurrent async actions.
// // 		// Execution will not continue until both a & b are fulfilled
// // 		let [a,b] = yield Promise.all([
// // 			Promise.resolve('Get Schwifty'),
// // 			Promise.resolve('The Ricks Must Be Crazy')
// // 		])
// // 		console.log(a + ' ' + b)
// // 		// Rejected promises will be handled by try/catch as if code was synchronous
// // 		let seasonTwoFinale = yield Promise.reject(new Error('Tammy'))
// // 		// Never executed
// // 		let seasonThree = 'Coming Soon'
// // 	} catch (error) { 
// // 		console.log(error.message) // Tammy
// // 	}
// // })

// // async* traverseWikipedia(startLink) {
// // 	const visited = {};
// // 	function* async visit(link) {
// // 	   if (visited[link]) { return; }
// // 	   visited[link] = true;
// // 	   yield link;

// // 	   const neighboringLinks = await getNeighboringWikipediaLinks(link);
// // 	   for (const i = 0; i < neighboringLinks.length; i++) {
// // 		  yield* await visit(neighboringLinks[i]);
// // 	   }
// // 	);
// // 	yield await visit(startLink);
// //   }

// async function* foo() {
// 	yield "wait...";
// 	await new Promise(r => setTimeout(r, 900));
// 	yield new Promise(r => setTimeout(() => r("okay!"), 100));
// }

// async function main() {
// 	for await (let item of foo()) {
// 		let result = await item;
// 		console.log(result);
// 	}
// }

// main()