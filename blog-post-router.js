const express = require('express');
const router = express.Router();
const {List} = require ('./blog-post-model');

// GET method route
router.get('/blog-post', (req, res, next) => {
  const post = List.get();

  if (post){
    res.status(200).json({
        message: "Successfully sent the list of posts",
        status: 200,
        posts: post
    });
  }
  else {
    res.status(500).json({
        message: "Internal Serve Error",
        status: 500
    });
     next();
  }
});


// GET method route
router.get('/blog-post/:author', (req, res, next) => {
    const Author = req.params.author;

    if(!Author){
        res.status(406).json({
            message: "Author Missing",
            status: 406
        });
         next();
    }

    const authorPosts = List.getPostAuthor(Author);

    if(authorPosts.length > 0){
        res.status(200).json({
            message: "Author post Sent",
            status: 200,
            post: authorPosts
        });
    }
    else{
        res.status(404).json({
            message : "Author not found",
            status : 404
        });
         next();
    }

});

// POST method route
router.post('/blog-post', (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;
    const Author = req.body.author;
    const date = req.body.publishDate;

    if(!title || !content || !Author || !date){
    res.status(406).json({
      message : "Missing data.",
      status : 406
    })
     next;
  }

    let PostNew = List.addPost(title, content, Author, date)

    res.status(201).json({
        message: "Post Added",
        status: 201,
        post: PostNew
    });
});


//DELETE method route
router.delete('/blog-post/:id', (req, res, next) => {
    const bodyID = req.body.id;
    const paramID = req.params.id;
    const post = List.deletePost(bodyID);
    if(!bodyID || !paramID || bodyID != paramID){
        res.status(406).json({
            message: "ID Missing",
            status: 406
        });
         next();
    }

    if (post) {
      res.status(204).json({
          message: "Post delete",
          status: 204
      });
       next();
    }
    else {
      res.status(404).json({
          message: "Post not found",
          status: 404
      });
       next();
    }
});


//PUT method route
router.put('/blog-post/:id', (req, res, next) => {
    let postId = req.params.id;
    let NewPost = req.body;


    if(!postId){
        res.status(406).json({
            message: "ID Missing",
            status: 406
        });
         next();
    }



    if(!NewPost.title && !NewPost.content && !NewPost.author && !NewPost.publishDate){
        res.status(404).json({
            message: "No data in body",
            status: 404
        });
         next();
    }

    const PostNew = List.putPost(postId, NewPost);

    if (Post){
      res.status(204).json({
          message: "Post delete",
          status: 204
      });
       next();
    }
    else {
      res.status(404).json({
          message: 'ID not found',
          status: 404,
      });
       next();
    }
});


module.exports = router;
