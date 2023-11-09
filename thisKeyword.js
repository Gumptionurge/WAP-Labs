const user={
    name:'ariho',
    sayMyName: function(){
        console.log(user.name);
    }
};
function curse(){
    comsole.log("Damn It");
}
user.curse=curse;

user.sayMyName();
user.curse();