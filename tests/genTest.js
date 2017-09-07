"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncIterator) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};
exports.__esModule = true;
require("core-js/shim");
require("core-js/modules/es7.symbol.async-iterator");
// function* idMaker() {
//     let index = 0;
//     while (index < 3)
//         yield index++;
// }
// let gen = idMaker();
// //   console.log(gen.next()); // { value: 0, done: false }
// //   console.log(gen.next()); // { value: 1, done: false }
// //   console.log(gen.next()); // { value: 2, done: false }
// //   console.log(gen.next()); // { done: true }
// let count = 0
// while (count < 5) {
//     console.log(gen.next())
//     count++
// }
// // async function* g() {
// //     yield 1;
// //     await setTimeout(() => {console.log('tt')}, 2000)
// //     yield* [2, 3];
// // }
// // async function f() {
// //     for await (const x of g()) {
// //         console.log(x);
// //     }
// //     while (count < 5) {
// //     console.log(gen.next())
// //     count++
// // }
// // }
// function myasync(gen, context = undefined) {
// 	let generator = typeof gen === 'function' ? gen() : gen // Create generator if necessary
// 	let { value: promise } = generator.next(context) // Pass last result, get next Promise
// 	if ( typeof promise !== 'undefined' ) {
// 		promise.then(resolved => myasync(generator, resolved))
// 		.catch(error => generator.throw(error)) // Defer to generator error handling
// 	}
// }
// /* Usage */
// myasync(function* () { // Generators can't be declared with arrow syntax
// 	try {
// 		// Execution is paused until the yielded promise resolves
// 		console.log(yield Promise.resolve('A Mortynight Run'))
// 		// Promises already provide support for concurrent async actions.
// 		// Execution will not continue until both a & b are fulfilled
// 		let [a,b] = yield Promise.all([
// 			Promise.resolve('Get Schwifty'),
// 			Promise.resolve('The Ricks Must Be Crazy')
// 		])
// 		console.log(a + ' ' + b)
// 		// Rejected promises will be handled by try/catch as if code was synchronous
// 		let seasonTwoFinale = yield Promise.reject(new Error('Tammy'))
// 		// Never executed
// 		let seasonThree = 'Coming Soon'
// 	} catch (error) { 
// 		console.log(error.message) // Tammy
// 	}
// })
// async* traverseWikipedia(startLink) {
// 	const visited = {};
// 	function* async visit(link) {
// 	   if (visited[link]) { return; }
// 	   visited[link] = true;
// 	   yield link;
// 	   const neighboringLinks = await getNeighboringWikipediaLinks(link);
// 	   for (const i = 0; i < neighboringLinks.length; i++) {
// 		  yield* await visit(neighboringLinks[i]);
// 	   }
// 	);
// 	yield await visit(startLink);
//   }
function foo() {
    return __asyncGenerator(this, arguments, function foo_1() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, "wait..."];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, __await(new Promise(function (r) { return setTimeout(r, 900); }))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, new Promise(function (r) { return setTimeout(function () { return r("okay!"); }, 100); })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, item, result, e_1_1, e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, 8, 13]);
                    _a = __asyncValues(foo());
                    _d.label = 1;
                case 1: return [4 /*yield*/, _a.next()];
                case 2:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    return [4 /*yield*/, _b.value];
                case 3:
                    item = _d.sent();
                    return [4 /*yield*/, item];
                case 4:
                    result = _d.sent();
                    console.log(result);
                    _d.label = 5;
                case 5: return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    });
}
main();
