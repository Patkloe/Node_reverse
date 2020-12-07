class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}
class List{
 constructor(){
  this.head = null;
 }
 even_odd(val){
   var res = val % 2;
   if(res == 0){
       console.log("even :" + " " + val);
       return 0;
   }
   else{
       console.log("odd :" + " " + val);
       return 1;
   }
 }
 add(val){
  var newnode = new Node(val);
  var navigate;
  if(this.head === null){
     this.head = newnode;
     console.log("head of the list" + " " + "from head " + this.head.data + " " + "from variable : " + " " + newnode.data);
   }
  else{
    navigate = this.head;
      while(navigate){
       navigate = navigate.next;
      }
      navigate.next = newnode;
     //here add the conditions to test if the value of your node is even, if it is the case we reverse
      if((this.even_odd(navigate.data) == 0) && (this.even_odd(navigate.next.data) == 0)){
          console.log("reverse here to apply");
          console.log("before :" + " " + navigate.next.data + " " + " node ajoute : " + " " + navigate.data);
        }
       else
       console.log("before :" + " " + navigate.data + " " + " node ajoute : " + " " + navigate.next.data);
 
   }// end else
 }
}
var tab =  [1, 2, 8, 9, 12, 16];
var test = new List();
for(var i = 0; i < tab.length; i++)
   test.add(tab[i]);
