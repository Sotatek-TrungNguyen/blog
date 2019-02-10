<template>
	<div class="projects__container">
		<h1 class="dashboard__header">Projects</h1>
		<div
		v-for="project in projects" 
		class="projects-content">
			<h3 class="project-name">{{project.name}}</h3>
			<div></div>
		</div>
	</div>
</template>

<script>
	
    export default {
        name: "projects",
        data(){
            return{

            	currentProject:'',

            	projects:[
            	{
            		name:'Robot',
            		period:'',
            		skills:['Soft skill','presentation'],
            		purpose:'robot'
            	},
            	{
            		name:'web',
            		period:'',
            		skills:['Soft skill','presentation'],
            		purpose:'robot'
            	},
            	{
            		name:'game',
            		period:'',
            		skills:['Soft skill','presentation'],
            		purpose:'robot'
            	},
            	{
            		name:'web',
            		period:'',
            		skills:['Soft skill','presentation'],
            		purpose:'robot'
            	},
            	]
            }
        }

    }
</script>
