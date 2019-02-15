<template>
 <div>
  <button v-on:click="download">DOWNLOAD</button>
  <h1>Testing wordpress api and datas</h1>
   <section class="creator">
    <div class="item_list">
      <div class="list-item">
        <div
        v-if="index <6"
        v-for="(item,index) in rawPostsData"
        class="items">
          <h3>{{item.title}}</h3>
          <a :href="item.URL">{{item.URL}}</a>
          <a v-if="imagesURL[index]!=null" :href="imagesURL[index]">{{imagesURL[index]}}</a>
          <img v-if="imagesURL[index]!=null && imagesURL[index]!=undefined":src="imagesURL[index]"/>
          <div class="content_body_text">
            {{excerpt[index]}}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>

  export default {
    name: "about",
    data() {
      return{
          rawPostsData:null,
          content:[],
          imagesURL:[],
          excerpt:[],
        
      }
    },

    methods: {
      download: function(){
        console.log("Prepare to download");
        fetch('https://script.google.com/macros/s/AKfycbzMigJ5GMIr_4S4toriKkZqKCz0LLn6z3tcu9Kdyj2EN2GkKmfB/exec',{
          method: 'get',
          id:"1zlQ_Ve0b78tcp_jGM58clWH61FUZi_2b"})
        .then(response=>{
          console.log("received");
        })
      }
    },

    created() {
      fetch ('https://public-api.wordpress.com/rest/v1.1/sites/yesyes248369263.wordpress.com/posts?order_by=modified', //(order by modified time)
        {method: 'get',})

        .then ( response => { return response.json()})

        .then(response=> {
          this.rawPostsData = response.posts;

          for(var x=0;x<6;x++){

            // finalize excerpt. limit 200 words first word only
            if((this.rawPostsData[x].excerpt).length<210){
              this.excerpt[x]= this.rawPostsData[x].excerpt.slice(3,-5)+"...";
            } else{
              this.excerpt[x]= this.rawPostsData[x].excerpt.slice(3,209)+"...";
            }

            // finalize imageUrl
            this.content[x]= this.rawPostsData[x].content;

            /* create mediate link to purify and choose the first (<img /> - self closed html tag) */
            var firstImgTag=this.content[x].search("<img"); // find the first img tag
            var imageLinkPureFront= this.content[x].slice(firstImgTag); // cut out from first img to the end
            var firstImgSelfCloseTag= imageLinkPureFront.search("/>") // search for the first self close tag which belongs to <img tag
            var imageLinkPureBack = imageLinkPureFront.slice(0,firstImgSelfCloseTag); // reverse cut from the back to the start, start from  />
            // imageLinkPureBack is the <img/> totally purified

            /* purify <img/> html tag to cut out the src/ data-orig-file source of the image*/
            var startImgPoint=imageLinkPureBack.search("data-orig-file");
            var endImgPoint= imageLinkPureBack.search("data-orig-size");
            var startImgSrc =imageLinkPureBack.search("img src");
            var endImgSrc= imageLinkPureBack.search("\" alt");
            if(startImgPoint >0 && endImgPoint >0){
            this.imagesURL[x]= imageLinkPureBack.slice(startImgPoint+16,endImgPoint-2);
            console.log(this.imagesURL);
            }
            if(startImgSrc >0 && endImgSrc >0 ){
            this.imagesURL[x]= imageLinkPureBack.slice(startImgSrc+9,endImgSrc);
            console.log(this.imagesURL);
            }
          }
        }
      )
    }
  }
</script>
<style scoped>
  .content_body_text{
    color: red;
  }
</style>
