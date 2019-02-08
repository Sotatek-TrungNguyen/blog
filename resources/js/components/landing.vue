<template>
   <div id="app">
    <header class="landing__header">
        <div class="header-container">
            <div class="header-brand">
                <span class="logo"></span>
                <div class="text">Trung Nguyen</div>
            </div>
            <nav class="nav-01">
                <ul class="nav-list">
                    <li 
                    class="items"
                    v-for="item in menuDatas">
                        <router-link class="menuButton" v-bind:to="item.href">{{item.text}}</router-link>    
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="landing__content">
        <router-view></router-view>
    </section>
    <footer class="landing__footer"></footer>
   </div>
</template>

<script>
    import VueRouter from 'vue-router';
    import Vue from 'vue';

    export default {
        name: "app",
        data(){

            return {
                menuDatas:[
                    {
                        text:'Dashboard',
                        href:'/dashboard',
                    },{
                        text:'Projects',
                        href:'/project',
                        components:[
                            {
                                name: 'Project 1',
                                href:'#project1',
                            },
                            {
                                name: 'Project 2',
                                href: '#project2'
                            }
                        ]
                    },{
                        text:'About',
                        href:'/about'
                    }
                ]
            }
        }

    }
</script>
<style lang="scss">
    @import '../../sass/app.scss'
</style>
