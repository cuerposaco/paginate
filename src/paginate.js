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
