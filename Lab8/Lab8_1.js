function LinkedList(next){

}

LinkedList.prototype.add=function(a){
this[a]=a;
}

LinkedList.prototype.remove=function(b){

    if(this.hasOwnProperty(b)){
        this[b]=undefined;
    }

}

LinkedList.prototype.print= function(){
let returnedArray= new Array;
for(let i in this){
   
    if(this.hasOwnProperty(i)&&this[i]!==undefined){
        returnedArray.push(this[i]);
        }
    }
console.log(returnedArray);
}




list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

list.remove(2);
list.print();

list.add(4);
list.add(5);
list.add(6);

list.remove(5);

list.print();