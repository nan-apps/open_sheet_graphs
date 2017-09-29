<template>
	<div>

		<nav class="navbar is-light" role="navigation" aria-label="main navigation">


		  <div class="navbar-brand">
		    <a class="navbar-item" href="/">
		      	<b class="title" >Open Sheet Graphs</b>		      			      	
		    </a>

		    <button class="button navbar-burger">
		      <span></span>
		      <span></span>
		      <span></span>
		    </button>
		  	</div>

		  	<div class="navbar-end">
		  		<div class="navbar-item">
		  			<div class="field is-grouped" >
					    <p class="control">
			            	<a class="button is-primary" href="#" @click="showModal = true" >
			              		<span class="icon">
			                		<i class="fa fa-folder-open"></i>
			              		</span>
		              			<span>Ver hoja de cálculos completa</span>
			            	</a>
			          	</p>
			          	<p class="control">
			            	<a target="_blank" class="button is-info" :href="sheet_url"  >
			              		<span class="icon">
			                		<i class="fa fa-external-link"></i>
			              		</span>
		              			<span>Abrir en drive</span>
			            	</a>
			          	</p>
		          	</div>
	          	</div>
		    </div>

		</nav>
	

		<section class="section" >		

			<div class="container">

				<div class="columns is-multiline">

					    
			    	<chart title="Colores" 
			    		   :chart-type="'doughnut'" 
			    		   :data="getData('A')"
			    		   :show-legend="true" 
			    		   :show-labels="true"
			    		   :data-tresh-hold="4"		
			    		   :fetching-data="fetchingData"				    		   
			    		   >	      		
			      	</chart>
					    
			    	<chart title="Paises" 
			    		   :chart-type="'bar'" 
			    		   :data="getData('B')"
			    		   :show-legend="false" 
			    		   :show-labels="false"
			    		   :data-tresh-hold="false" 				    		   			    		   
			    		   :fetching-data="fetchingData">	      		
			      	</chart>
				    
			    	<chart title="Vegetales" 
			    		   :chart-type="'bar'" 
			    		   :data="getData('C')"
			    		   :show-legend="false" 
			    		   :show-labels="true"
			    		   :data-tresh-hold="false" 			    		   			    		   
			    		   :fetching-data="fetchingData">	      		
			      	</chart>
				    
			    	<chart title="Frutas" 
			    		   :chart-type="'pie'" 
			    		   :data="getData('D')"
			    		   :show-legend="true" 
			    		   :show-labels="true"
			    		   :data-tresh-hold="false" 					    		   
			    		   :fetching-data="fetchingData">	      		
			      	</chart>
				  			  
				</div>

				<div class="modal" :class="showModal ? 'is-active' : ''" >
					<div class="modal-background"></div>
					<div class="modal-content">
				    	<iframe style="width:100%; height:500px;" :src="sheet_url"></iframe>
				  	</div>
				  	<button @click="showModal = false" class="modal-close is-large" aria-label="close"></button>
				</div>

		    </div>
		</section>
	
	</div>
	 
</template>

<script>

	import Vuex from 'vuex';		
	import Chart from './Chart.vue'	
	
    export default {
    	name: 'App',    	
    	data: () => {
    		return {
    			showModal: false,
				current_route: window.location.pathname,	    
				sheet_url: null
    		}
		},
		components: {
			Chart
		},
		computed: Object.assign(

            Vuex.mapState({                     
                fetchingData: state => state.fetchingData
            }),
            Vuex.mapGetters([
				'parsedData'
			])

        ),
		mounted: function() {	    	

		    this.$store.dispatch('SET_COLUMNS', this.$config.COLUMNS);
		    this.$store.dispatch('LOAD_DATA', this.$config.JSON_SHEET_URL);
		    this.sheet_url = this.$config.SHEET_URL;

		},    	    
		methods:{
			getData: function( column ){
				return _.find(this.parsedData, function(d) { return d.column == column; });				
			}   
		}
	}

</script>