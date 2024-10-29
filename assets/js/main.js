new Vue({
  el: "#Soltan",
  data: {
    posts: [{
     

    }, ],
 
  },

  create() {},
  async mounted() {
    await this.getData();
  },
  methods: {
   
   
    getData: async function () {
  
      // --------------------------------------------------------
      !this.dataLoaded
        ? await fetch("../data.json")
            .then((res) => res.json())
            .then((data) => {
              this.posts = data;


              console.log(
                
                  this.posts
              );
            })
        : "";
      // --------------------------------------------------------
      this.posts[0].members.forEach(element => {
        
      });
     
    }
   
  },
});