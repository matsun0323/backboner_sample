(function(){

  var Post = Backbone.Model.extend(
    {
      url: "/posts.json",
      paramRoot: "post",
    }
  );

  var post = new Post();

  console.log("Before save: " + JSON.stringify(post));
  console.log("isNew(): " + post.isNew());

  post.save(
      {
        title:"mat",content: "hogehoge"
      }, 
      {
        success: function() {
          console.log("After save(post) memo: " + JSON.stringify(post));
          console.log("After save(post) memo.isNew(): " + post.isNew());
        },
        error: function(userSession, response) {
          console.log("error");
          console.log(userSession);
          console.log(response);
        }
      }
  );

}());