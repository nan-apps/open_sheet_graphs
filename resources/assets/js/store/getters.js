export const parsedData = state => {	

	let titlesColumns = ['A', 'B', 'C', 'D'];
	let titlesFields = ['A1', 'B1', 'C1', 'D1'];
	let data = [];

	if( typeof state.rawData[Symbol.iterator] === 'function'  ){
		let rawData = state.rawData;
		rawData.forEach( ( item, index ) => {

			let column = item.title.$t.replace(/[0-9]/g, "");
			
			if(_.includes(titlesFields, item.title.$t)){
				//es titulo
				data.push({
					'column' : column,
					'name' : item.content.$t,
					'values': []
				}); 
			} else {
				//es dato
				data.some( dataSet => {
					if( dataSet.column == column ){
						dataSet.values.push( item.content.$t );
						return true;
					}
				});
			}

		});

	}

	return data;

}