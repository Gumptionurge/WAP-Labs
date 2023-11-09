let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        this.students.forEach((stu) => 
        
        {
            let newThis=this;
           let funct= function (student) {
                console.log(this.title + ": " + student);
            };
            funct.apply(newThis,[stu]);
        } 

        );
    }
};
group.showList();