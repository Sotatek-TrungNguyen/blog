<template>
	<div class="dashboard_container">
		<h1 class="dashboard__header">Dashboard</h1>
		<section class="slider">
			<div class="slider-container">
				<div 
				v-for="project in projects"
				class="slide">
					<img :src="project.avatarRect" />
					<h3>{{project.name}} slider</h3>
				</div>
			</div>
		</section>
		<section class="box-list">
			<div class="row box-list-content">
				<div 
				v-for="project in projects" 
				class="col-lg-2 col-md-3 col-sm-4 col-6 project-box-list">
					<div class="project-info">
						<img :src="project.avatarSquare"/>
						<h3>{{project.name}} boxes</h3>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
    export default {
        name: "projects",
        data(){
            return {
            	projects:[
            		{
            			name:'project 1',
            			avatarSquare:'https://picsum.photos/200/200', 
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            		{
            			name:'project 3',
            			avatarSquare:'https://picsum.photos/200/200', 
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            		{
            			name:'project 2',
            			avatarSquare:'https://picsum.photos/200/200', 
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            		{
            			name:'project 4',
            			avatarSquare:'https://picsum.photos/200/200', 
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            		{
            			name:'project 5',
            			avatarSquare:'https://picsum.photos/200/200', 
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            		{
            			name:'project 6',
            			avatarSquare:'https://picsum.photos/100/100',
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            		{
            			name:'project 7',
            			avatarSquare:'https://picsum.photos/100/100', 
            			avatarRect:'https://picsum.photos/1290/352',
            			href:''
            		},
            	],
            }
        },
    }
</script>

<style lang="scss" scoped="">
	.dashboard_container {
		.dashboard__header {
			text-align: center;
		}

		.slider {
			height: 22rem;
			overflow: hidden;
			margin: 1px 0 3rem;
			.slider-container {
				position: relative;;
				width: 500%;
				margin: 0;
				left: 0;
				animation: 20s slidy infinite;

				@keyframes slidy {
					0% {
						left:0%;
					}

					10% {
						left: 0%;
					}

					12% {
						left: -100%;
					}

					22% {
						left: -100%;
					}

					24% {
						left: -200%;
					}

					34% {
						left: -200%;
					}

					36% {
						left: -300%;
					}

					46% {
						left: -300%;
					}

					48% {
						left: -400%;
					}

					58% {
						left: -400%;
					}

					60% {
						left: -300%;
					}

					70% {
						left: -300%;
					}

					72% {
						left: -200%;
					}

					82% {
						left: -200%;
					}

					84% {
						left: -100%;
					}

					94% {
						left: -100%;
					}

					96% {
						left: 0%;
					}
				}
				.slide {
					position: relative;
					width:20%;
					float: left;
					&:hover {
						box-shadow: 0 0 10px rgba(#333, 0.3);
						
							img {
								filter: blur(4px);
							}

							h3 {
								display: block;
							}
					}

					img {
						width: 100%;
						float: left;
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

		.box-list {

			.box-list-content {
			margin: 0 1.5rem;

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
	}
</style>
