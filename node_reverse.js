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

// function to reverse a linkedlist
function reverse(head) {
  // Write your code here
  var prev = null;  // to keep the pointer before going on next
  var curr = head; // current pointer on head
  var temp = null; // variable to swap pointer when the condition is met
  while(curr){ // while the current pointer is different of null
    prev = curr;   // we keep the the current pointer on a previous pointer
    if((even(prev.data))&&(even(curr.next.data))){ // if the condition is met
      temp = curr.next;    // we swap
      curr.next = prev;   // swapping process
      prev = temp;        // swapping process
      curr = temp.next; // iteration is moving forward
    }
    else{   // if the condition is not met
     curr = curr.next ;   // we iterate on the next
    }
  }
  return prev;
}










