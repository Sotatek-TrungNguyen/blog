<template>
 <div>
  <h1>Testing wordpress api and datas</h1>
   <section class="creator">
    <div class="item_list">
      <div class="list-item">
        <div
        v-if="index <6"
        v-for="(item,index) in rawData"
        class="items">
          <h3>{{item.title}}</h3>
          <p>{{content[index]}}</p>
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
        rawData:null,
        content:[],
        imagesURL:[],
        excerpt:[]
      }
    },

    created() {
      fetch ('https://public-api.wordpress.com/rest/v1.1/sites/yesyes248369263.wordpress.com/posts/',{
        method: 'get',})

        .then ( response => { return response.json()})

        .then(response=> {
          this.rawData = response.posts;

          for(var x=0;x<6;x++){
            this.excerpt[x]= this.rawData[x].excerpt.slice(3,-5);
            this.content[x]= this.rawData[x].content;

            var imagesCount =0;
            var imageLink;
            var imagesOrder=this.content[x].indexOf("<img");
            console.log(imagesOrder);
            if(imagesOrder>0){
              this.imageLink= this.content[x].slice // slice from img just found. try to recognize first img it read and stop there, take src/ url then ignore after that. after read 1 img imgcount may ++.
            }
            var startImgPoint=this.content[x].search("data-orig-file");
            var endImgPoint= this.content[x].search("data-orig-size");
            var startImgSrc =this.content[x].search("img src");
            var endImgSrc= this.content[x].search("\" alt");
            

            if(startImgPoint >0 && endImgPoint >0 && imagesCount==0){
            this.imagesURL[x]= this.content[x].slice(startImgPoint+16,endImgPoint-2);
            console.log(this.imagesURL);
            imagesCount++;
            }
            if(startImgSrc >0 && endImgSrc >0 && imagesCount==0){
            this.imagesURL[x]= this.content[x].slice(startImgSrc+9,endImgSrc);
            console.log(this.imagesURL);
            imagesCount++
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
