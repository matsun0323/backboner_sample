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
 
var obj = new Staff(); 
obj.set({name: "Murata", age: 15, id: 101}); 
var obj2 = new Staff({name: "Kenichiro", age: 35, id: 102});

var objs = new Backbone.Collection([obj, obj2]);
console.log("objs: " + JSON.stringify(objs));
 
console.log("objs.get(id): " + JSON.stringify(objs.get(101)));
console.log("objs.at(index): " + JSON.stringify(objs.at(0)));

// add
objs.add(new Backbone.Model({name: "Acroquest", age: 20}));
objs.add(new Backbone.Model({name: "Technology", age: 10}));
 
// length
console.log("objs.length: " + objs.length);
console.log("objs: " + JSON.stringify(objs));

objs.comparator = function(item){
  return -item.get("age");
}
objs.sort();

console.log("After sort objs: " + JSON.stringify(objs));
console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));

console.log("--------------------------------------------");
var Staffs = Backbone.Collection.extend(
    {model:Staff}
  );
var staffs = new Staffs([obj,obj2]);
console.log("staffs: " + JSON.stringify(staffs));
console.log("staffs.get(cid): " + JSON.stringify(staffs.get("c4")));
console.log("staffs.at(index): " + JSON.stringify(staffs.at(1)));
console.log("staffs.get(id): " + JSON.stringify(staffs.get(102)));

console.log("--------------------------------------------");
// each
objs.each(function(item, index){
    console.log("each(" + index + "): " + JSON.stringify(item));
});
// find
var tmpObj = objs.find(function(item) {
    return item.get("age") === 20;
});
console.log("find result: " + JSON.stringify(tmpObj));

}());