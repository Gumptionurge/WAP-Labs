let books= [
    {   "id":0,
        "title": "Java",
        "ISBN": 1213467,
        "publishDate":"1/1/2012",
        "author": "Kathy Sierra"
    },
    {   "id":1,
        "title": "Python",
        "ISBN": 3332134,
        "publishDate":"1/1/1999",
        "author": "Anaconda Snake"
    },
    {   "id":2,
        "title": "Lets Be friends",
        "ISBN": 7654321,
        "publishDate":"1/1/1979",
        "author": "Teletubbies"
    },
    {   "id":3,
        "title": "I did it my way",
        "ISBN": 1671948,
        "publishDate":"1/1/1991",
        "author": "Frank Sinatra"
    }
];

let counter=books.length;
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
    return books.find(p => p.id == identity);
}

addBook(){
    this.id = counter++;
    books.push(this);
}

updateBooks(identity){
    const index = books.findIndex(p => p.id == id);
    if(index > -1){
        this.id = identity;
        books[index] = this;
    }else{
        throw new Error(`Book with ID: ${identity} cannot find in DB`);
    }
}

static deleteBook(identity){
    const index = books.findIndex(p => p.id == id);
    if(index > -1){
        books.splice(index, 1);
    } else {
        throw new Error(`Book with ID: ${identity} cannot find in DB`);
    } 
}

}