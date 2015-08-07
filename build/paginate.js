(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.paginate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function paginate(items,divisions){

	var total_items 	= items,
		items_per_page 	= divisions,
		pages 			= Math.ceil(total_items/items_per_page);
		console.log("pages",pages);

	return function(index){
		// Éste indice empieza en 0
		var row_index_allocate = Math.floor(index/items_per_page);
		console.log(index+' se encuentra en la pagina '+row_index_allocate);
		var start 	= row_index_allocate * items_per_page;
		var end 	= start + items_per_page;
		if(end > total_items){
			end = total_items + 1;
		}
		
		var _pages = [];
		for( var i = start; i < end; i++ ){
			_pages.push(i);
		}

		return _pages;
	};
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGFnaW5hdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHBhZ2luYXRlKGl0ZW1zLGRpdmlzaW9ucyl7XG5cblx0dmFyIHRvdGFsX2l0ZW1zIFx0PSBpdGVtcyxcblx0XHRpdGVtc19wZXJfcGFnZSBcdD0gZGl2aXNpb25zLFxuXHRcdHBhZ2VzIFx0XHRcdD0gTWF0aC5jZWlsKHRvdGFsX2l0ZW1zL2l0ZW1zX3Blcl9wYWdlKTtcblx0XHRjb25zb2xlLmxvZyhcInBhZ2VzXCIscGFnZXMpO1xuXG5cdHJldHVybiBmdW5jdGlvbihpbmRleCl7XG5cdFx0Ly8gw4lzdGUgaW5kaWNlIGVtcGllemEgZW4gMFxuXHRcdHZhciByb3dfaW5kZXhfYWxsb2NhdGUgPSBNYXRoLmZsb29yKGluZGV4L2l0ZW1zX3Blcl9wYWdlKTtcblx0XHRjb25zb2xlLmxvZyhpbmRleCsnIHNlIGVuY3VlbnRyYSBlbiBsYSBwYWdpbmEgJytyb3dfaW5kZXhfYWxsb2NhdGUpO1xuXHRcdHZhciBzdGFydCBcdD0gcm93X2luZGV4X2FsbG9jYXRlICogaXRlbXNfcGVyX3BhZ2U7XG5cdFx0dmFyIGVuZCBcdD0gc3RhcnQgKyBpdGVtc19wZXJfcGFnZTtcblx0XHRpZihlbmQgPiB0b3RhbF9pdGVtcyl7XG5cdFx0XHRlbmQgPSB0b3RhbF9pdGVtcyArIDE7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfcGFnZXMgPSBbXTtcblx0XHRmb3IoIHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKyApe1xuXHRcdFx0X3BhZ2VzLnB1c2goaSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9wYWdlcztcblx0fTtcbn1cbiJdfQ==
