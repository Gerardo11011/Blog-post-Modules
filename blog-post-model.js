const uuid = require('uuid');


Posts = [
    {
        id: uuid.v4(),
        title: "Prueba 1",
        content: "Este post se hace con el objetivo de probar uno",
        author: "Rocio Alejandra Orozco Parra",
        publishDate: '23-Mar-19'
    },
    {
        id: uuid.v4(),
        title: "Prueba 2",
        content: "El examen es el 31 de marzo",
        author: "Gerardo ALdair Ponce Gomez",
        publishDate: '13-Mar-19'
    },
    {
        id: uuid.v4(),
        title: "Prueba 3",
        content: "Capacitador post 3",
        author: "Oscar Octavio Soler Trejo",
        publishDate: '24-Mar-19'
    },
    {
      id: uuid.v4(),
      title: "Prueba 4",
      content: "Estudiante de finanzas",
      author: "Francisco Javier Villarreal",
      publishDate: '15-Feb-19'
    }
]

const List = {
  get : function() {
    return Posts
  },

  getPostAuthor : function (author){
    let listauthor = [];
    Posts.forEach(item => {
      if (item.author == author){
        listauthor.push(item);
      }
    })
    return listauthor;
  },

  addPost: function(title, content, author, publishDate) {
       let newP = {
           id: uuidv4(),
           title: title,
           content: content,
           author: author,
           publishDate: publishDate
       }
       Posts.push(newP)
       return newP;
     },

  deletePost : function(IDdelete){
    let post = null;
    Posts.forEach(function(item,index) {
      if (item.id == IDdelete){
        post = item;
        Posts.splice(index,1)
      }
    })
    return post;
  },

  putPost: function(IDpost, NewPost){
    let post = null;
    Posts.forEach(function(item,index) {
      if (Posts.id = IDpost){
        post = Posts[index];
        if (NewPost.title) {
          post.title = NewPost.title;
        }
        if (NewPost.content) {
          post.content = NewPost.content;
        }
        if (NewPost.author) {
          post.author = NewPost.author;
        }
        if (NewPost.publishDate) {
          post.publishDate = NewPost.publishDate;
        }
      }
    })
    return post;
  }
}

module.exports = { List }
