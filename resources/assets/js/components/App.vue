<template>
	<div>

		<nav class="navbar is-light" role="navigation" aria-label="main navigation">


		  <div class="navbar-brand">
		    <a class="navbar-item" href="/">
		      	<b class="title" >Padrón de femicidios</b>		      	
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
		              			<span>Abrir padrón completo</span>
			            	</a>
			          	</p>
			          	<p class="control">
			            	<a target="_blank" class="button is-info" href="https://docs.google.com/spreadsheets/d/1kMFbg7QJuhL1GyagyKuq5_hEIhq--p57g23l9ouHs4w/edit?usp=sharing"  >
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

					    
			    	<chart title="Por edad" 
			    		   :chart-type="'doughnut'" 
			    		   :data="parsedData" 			    		   
			    		   :column="0"
			    		   :fetching-data="fetchingData"				    		   
			    		   >	      		
			      	</chart>
					    
			    	<chart title="Por lugar" 
			    		   :chart-type="'bar'" 
			    		   :data="parsedData" 			    		   
			    		   :column="4"
			    		   :fetching-data="fetchingData">	      		
			      	</chart>
				

				    
			    	<chart title="Cómo" 
			    		   :chart-type="'bar'" 
			    		   :data="parsedData" 			    		   
			    		   :column="6"
			    		   :fetching-data="fetchingData">	      		
			      	</chart>
				

				    
			    	<chart title="Quién" 
			    		   :chart-type="'bar'" 
			    		   :data="parsedData" 			    		   
			    		   :column="7"
			    		   :fetching-data="fetchingData">	      		
			      	</chart>
					
				  			  
				</div>

				<div class="modal" :class="showModal ? 'is-active' : ''" >
					<div class="modal-background"></div>
					<div class="modal-content">
				    	<iframe style="width:100%; height:500px;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT7OG6Pf2JQqlMmQxXvWM_68yN7yyuF9jdyDTgOCvybO2jpFJyVXHElyD1hj6SoglECSBF7xx7z4K9J/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
				
    		}
		},
		components: {
			Chart
		},
		computed: Object.assign(

            Vuex.mapState({
                //data: state => state.rawData,                
                fetchingData: state => state.fetchingData,
            }),
            Vuex.mapGetters([
				'parsedData'
			])

        ),
		mounted: function() {	    
		    this.$store.dispatch('LOAD_DATA');
		},    	    
	}

</script>