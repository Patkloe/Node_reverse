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

//  A comprendre
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Add any helper functions you may need here


function reverse(head) {
  if(head == null)
   return null;
  var curr = head;
  var first = new Node(head.data);
  first.next = null;  // copy
  var sol =  first;  // pointeur solution qui contient le premier node
  var curSol = sol; // pointeur qui va bouger pour faire des insertions
 curr = curr.next;
 while(curr){
 if(curr.data % 2 === 0){
   var node = new Node(curr.data);
   node.next = curSol; \\ dans le nouveau pointeur insere son next est le pointeur cursol qui move.
   if(curSol === sol){
    // we are inserting at the beginning of solution
     sol = node;
  }
   curSol = node;
} // fin pair
else{   // si impair
 while(curSol.next) {  // 
     curSol = curSol.next;
 }
  var node = new Node(curr.data);
  node.next = curSol.next;
  curSol.next = node;
  curSol.next = curSol.next.next

 }
Curr = curr.next;
}

return sol;
}
}

// A voir avec la Mecreance
class Node{
 constructor(element){
  this.element = element;
  this.next = null;
 }
}
class Linkedlist{
 constructor(){
  this.head = null;
  this.pile = [];
 }
  add(element){
   var newnode = new Node(element);
   var navigate;
   if(this.head === null){
      this.head = newnode;
      console.log("Head of the list : " + " " + this.head.element);
      this.pile.push(this.head.element);
   }
   else{
    navigate = this.head;
    while(navigate.next){
          navigate = navigate.next;
    }
          navigate.next = newnode;
          console.log("new node added : " + " " + navigate.next.element + " " + "previous :" + " " + navigate.element);
          this.pile.push(navigate.next.element);
   }
   var list = navigate;
   console.log(list);
   console.log("test"+ " "+ this.pile);
  }// end add
reverse(head) {
  if(head == null){
     return null;
   }
    var curr = head;
    var first = new Node(head.data);
    alert(first.data);
    first.next = null;  // copy
    var sol =  first;  // pointeur solution qui contient le premier node
    var curSol = sol; // pointeur qui va bouger pour faire des insertions
    curr = curr.next;
  while(curr){
    if(curr.data % 2 === 0){
      var node = new Node(curr.data);
      node.next = curSol; //dans le nouveau pointeur insere son next est le pointeur cursol qui move.
      if(curSol === sol){
         // we are inserting at the beginning of solution
        sol = node;
      }
       curSol = node;
    } // fin pair
    else{   // si impair
      while(curSol.next) {  // 
        curSol = curSol.next;
       }// fin while(curSol.next)
       var node = new Node(curr.data);
       node.next = curSol.next;
       curSol.next = node;
       curSol.next = curSol.next.next
     }
    Curr = curr.next;
  }// fin while(curr)
  console.log("materialise  : " + " " + first.data);
  return sol;
 } // end reverse
}// end class Linkedlist
var test = new Linkedlist();
var tab = [1,2,5,4,6];
for(var i = 0; i < tab[i]; i++){
      test.add(tab[i]);
      test.reverse(tab[i]);
}









