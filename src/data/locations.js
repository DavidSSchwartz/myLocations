// localStorage.setItem("category1", "Shopping")
// localStorage.setItem("category2", "Food")
// localStorage.setItem("category3", "View")
// localStorage.setItem("category4", "Famous Site")
// localStorage.setItem("category5", "Housing")
// localStorage.setItem("category6", "Industrial")



// 		export const result=(
		
// 			[
// 			localStorage.getItem("category1"),
// 			localStorage.getItem("category2"),
// 			localStorage.getItem("category3"),
// 			localStorage.getItem("category4"),
// 			localStorage.getItem("category5"),
// 			localStorage.getItem("category6")
// 			]
		
// 			)
		

// Storage.prototype.getArray = function(arrayName) {
//   var thisArray = [];
//   var fetchArrayObject = this.getItem(arrayName);
//   if (typeof fetchArrayObject !== 'undefined') {
//     if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
//   }
//   return thisArray;
// }

// Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
//   var existingArray = this.getArray(arrayName);
//   existingArray.push(arrayItem);
//   this.setItem(arrayName,JSON.stringify(existingArray));
// }

// Storage.prototype.popArrayItem = function(arrayName) {
//   var arrayItem = {};
//   var existingArray = this.getArray(arrayName);
//   if (existingArray.length > 0) {
//     arrayItem = existingArray.pop();
//     this.setItem(arrayName,JSON.stringify(existingArray));
//   }
//   return arrayItem;
// }

// Storage.prototype.shiftArrayItem = function(arrayName) {
//   var arrayItem = {};
//   var existingArray = this.getArray(arrayName);
//   if (existingArray.length > 0) {
//     arrayItem = existingArray.shift();
//     this.setItem(arrayName,JSON.stringify(existingArray));
//   }
//   return arrayItem;
// }

// Storage.prototype.unshiftArrayItem = function(arrayName,arrayItem) {
//   var existingArray = this.getArray(arrayName);
//   existingArray.unshift(arrayItem);
//   this.setItem(arrayName,JSON.stringify(existingArray));
// }

// Storage.prototype.deleteArray = function(arrayName) {
//   this.removeItem(arrayName);
// }



// //export const Locs= localStorage.getArray("Location1")
// 			






const location1= {"Name":"Petach Tikva", "Address":"23 Charlop St","Coordinates": 53332423, "Category":"Housing"}
const location2= {"Name":"Jerusalem", "Address":"1 HaGra St", "Coordinates":433232332342, "Category":"Food"}
const location3= {"Name":"Haifi", "Address":"165 Shefa St","Coordinates": 343121123124, "Category":"Industrial"}
const location4= {"Name":"Modiin" ,"Address": "89 Ovadia Sq","Coordinates": 54643765756, "Category":"Famous Site"}
const location5= {"Name":"Netanya",  "Address":"18 HaYarkon St","Coordinates": 324342424, "Category":"View"}
const location6= {"Name":"Tzfat",  "Address":"45 HaAri St","Coordinates":10000293332211, "Category":"Shopping"}
localStorage.setItem('Location1',JSON.stringify(location1))
localStorage.setItem('Location2',JSON.stringify(location2))
localStorage.setItem('Location3',JSON.stringify(location3))
localStorage.setItem('Location4',JSON.stringify(location4))
localStorage.setItem('Location5',JSON.stringify(location5))
localStorage.setItem('Location6',JSON.stringify(location6))
const Loc1=localStorage.getItem("Location1")
const Loc2=localStorage.getItem("Location2")			
const Loc3=localStorage.getItem("Location3")
const Loc4=localStorage.getItem("Location4")
const Loc5=localStorage.getItem("Location5")
const Loc6=localStorage.getItem("Location6")
						
export const Locs =[JSON.parse(Loc1),
JSON.parse(Loc2),
JSON.parse(Loc3),
JSON.parse(Loc4),
JSON.parse(Loc5),
JSON.parse(Loc6)]