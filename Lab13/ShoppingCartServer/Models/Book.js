let books=new Array();
let counter=0;
module.exports=class Book{

    constructor(id,title,ISBN, publishDate,author){
this.id=id;
this.title=title;
this.ISBN=ISBN;
this.publishDate=publishDate;
this.author=author;
}

static getAllBooks(){
return books;
}

static getBookById(identity){
let isThere =books.find((bk)=>{bk.id==identity});
if(isThere>-1){
    return books[isThere];
}else{

console.error("Book not found");
}
}

addBook(){
this.id=counter;    
books[counter++]=this;
}

updateBooks(identity){
if(identity<counter&&identity>-1){
    this.id=identity;
    books[identity]=this;
}
}

static deleteBook(identity){
    if(identity<counter&&identity>-1){
       books.splice(identity,1);
    }
}

}