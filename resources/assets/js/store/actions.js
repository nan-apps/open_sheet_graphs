import Vue from 'vue';
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);

export const LOAD_DATA = ({ commit }) => {
	commit( 'FETCHING_DATA', true  );

	let url = SHEET_URL;

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

