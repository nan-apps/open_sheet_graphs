export const parsedData = state => {	
	
	let titlesFields = state.columns ? state.columns.map( value =>{ return value+"1" }) : [];		
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