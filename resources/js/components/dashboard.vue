<template>
	<div class="dashboard_container">
		<section class="slide">
			
		</section>
		<section class="box-list">
			<div class="row box-list-content">
				<div 
				v-for="project in projects" 
				class="col-lg-2 col-md-3 col-sm-4 col-6 project-box-list">
					<div class="project-info">
						<img :src="project.avatar"/>
						<h3>{{project.name}} fqwerqwe</h3>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	
    export default {
        name: "projects",
        data(){
            return{
            	projects:[
            		{
            			name:'project 1',
            			avatar:'https://picsum.photos/200/200',
            			href:''
            		},
            		{
            			name:'project 3',
            			avatar:'https://picsum.photos/200/200',
            			href:''
            		},
            		{
            			name:'project 2',
            			avatar:'https://picsum.photos/200/200',
            			href:''
            		},
            		{
            			name:'project 4',
            			avatar:'https://picsum.photos/200/200',
            			href:''
            		},
            		{
            			name:'project 5',
            			avatar:'https://picsum.photos/200/200',
            			href:''
            		},
            		{
            			name:'project 6',
            			avatar:'https://picsum.photos/100/100',
            			href:''
            		},
            		{
            			name:'project 7',
            			avatar:'https://picsum.photos/100/100',
            			href:''
            		},
            	]
            }
        }

    }
</script>

<style lang="scss" scoped="">
	.dashboard_container {
		max-width: 1300px;
		margin: 0.15rem 1rem;
		.slide {}

		.box-list-content {

			.project-box-list {
				position: relative;
				padding:0; 
				border: 1px solid red;
				&:hover {
					box-shadow: 0 0 10px rgba(#333, 0.3);
					.project-info {

						img {
							filter: blur(4px);
						}

						h3 {
							display: block;
						}
					}
				}

				&:before {  
			        content: '';
			        display: block;
			        padding-top: 100%;
			    }

				.project-info {
					border: 1px solid red;
					position: absolute;
					top: 50%;
			        transform: translateY(-50%);
			        width: 100%;
			        overflow: hidden;

					img {
				   		display: block;
			           	max-width: 100%;
			           	width: initial;
			           	margin: auto;
					}

					h3 {
						position: absolute;
						display: none;
						top: 50%;
					  	left: 50%;
					  	transform: translate(-50%, -50%);
						z-index: 1000;

					}
				}
			}
		}
	}
</style>
