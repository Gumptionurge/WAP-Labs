let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self=this;
        self.students.forEach(
            function (student) {
            console.log(self.title + ": " + student);
        }); // Use .call explicitly to set the 'this' context

    }
};
group.showList();

