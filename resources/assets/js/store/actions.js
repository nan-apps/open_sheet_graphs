import Vue from 'vue';
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);

export const LOAD_DATA = ({commit}, url) => {
	
	commit( 'FETCHING_DATA', true  );

	Vue.jsonp( url, { 
		callbackQuery: 'callback', callbackName: 'myFunc' 
	}).then(json => {
		commit( 'SET_RAW_DATA', { rawData: json.feed.entry });
    	commit( 'FETCHING_DATA', false  );
	}).catch(err => {
	  	console.log(err);
    	commit( 'FETCHING_DATA', false  );
	});

}

export const SET_COLUMNS = ({commit}, columns) => {	
	commit( 'SET_COLUMNS', columns  );
}
