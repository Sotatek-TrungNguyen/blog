<template>
    <div class="partner_container">
        <div class="row partner_lists">
            <div class="partner_items">
                <a :href="partner.imgURL">
                    <img :src="partner.href">
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "partner",
        data(){
            return {
                rawPostsData:null,
                partner:{
                    imgURL:[],
                    href:[]
                }
        }
    },
    created() {
        fetch ('https://public-api.wordpress.com/rest/v1.1/sites/morelinkexample.wordpress.com/posts/11', //(order by modified time)
        {method: 'get',})

        .then ( response => { return response.json()})

        .then(response=> {
          var rawPostsData = response;
        
            var content = rawPostsData.content;
            var imgResult=null;
            let ahrefResult=null;
            let regexMatchaTag = /<a.*?\/a>/g;
            let regexMathahref= /<a.*?href="(.*?)"/;
            let regexMatchImg = /<img.*?>/;
            let regexMatchDataOrigFile = /<img.*?data-orig-file="(.*?)"/;
            let regexMatchSource = /<img.*?src="(.*?)"/;

            let aTag = content.match(regexMatchaTag);
            let partnerNumber = aTag.length;
            console.log(content);
            for (var x=0; x<partnerNumber; x++) {
                let imgTag = aTag[x].match(regexMatchImg);
                if(imgTag) {
                    //cut out imgtag
                    if (imgTag) {
                      imgResult = imgTag[0].match(regexMatchDataOrigFile) ? imgTag[0].match(regexMatchDataOrigFile)[1]: null;
                      if (!imgResult) {
                        imgResult = imgTag[0].match(regexMatchSource) ? imgTag[0].match(regexMatchSource)[1] : null;
                      }
                    }
                    this.partner.imgURL[x] = imgResult;

                    //cut out href
                    let href = aTag[x].match(regexMathahref);
                    this.partner.href[x]= href[1]; 
                } // if a tag does not contain img
                else {
                    partner.imgURL[x]=null;
                    partner.href[x]=null;
                }
            }

        
            
          
        }
        )
    }
}
</script>
<style lang="scss">
    @import '../../sass/app.scss'
</style>
