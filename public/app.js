(function(){
 
    console.log("Hello Backbone!!!!!");

 
var Staff = Backbone.Model.extend({
    defaults: {
        "name": "",
        "age": 0,
        "updateTime": new Date()
    },
    initialize: function() {
        console.log("Staff[" + this.cid + "]: " + JSON.stringify(this));
    }
});
 
var tmpStaff = new Staff(); 
tmpStaff.set({name: "Murata", age: 15, id: 101});
 
console.log("Staff[" + tmpStaff.cid + "]: " + JSON.stringify(tmpStaff));
 
var tmpStaff2 = new Staff({name: "Kenichiro", age: 35, id: 102});

}());