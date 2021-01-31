function PostBlog(title, message, author, views, live) {
    this.title = title;
    this.message = message;
    this.author = author;
    this.views = views;
    this.comments = new Comments()    
    this.live = live;
}

function Comments(commentAuthor, commentMessage) {
    this.author = commentAuthor;
    this.message = commentMessage;
}

let firstPost = new PostBlog("First Post", "Hello! This is my first post", "rafaelalbia", 1, true);
firstPost.comments.author = "rafaelalbia";
firstPost.comments.message = "Hello! This is my first comment"

console.log(firstPost);
