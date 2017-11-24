<template>
	<span :class="cssClasess" aria-hidden="true"></span>
</template>

<script>
	
	export default {
		props: ['img'],
  		computed: {
		    cssClasess() {
		      return 'glyphicon glyphicon-'+this.img;
		    }
  		}
	}
</script>