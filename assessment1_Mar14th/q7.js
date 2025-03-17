var Student = {
    name: 'Betty',
    age: 20,
    
    printDetails: function() {
      console.log('Inside printDetails:', this); // This is the Student object
  
      setTimeout(function() {
        console.log('Student name:', this.name); // undefined - this gets lost in this timeout
      }, 2000);
    }
  };
  
  Student.printDetails(); 
  //Inside setTimeout(), the this defaults to the global object not the Student object. So this.name is undefined.

//above can be fixed by bind

var Student2 = {
    name: 'Kelly',
    age: 30,
    
    printDetails: function() {
      console.log('Inside printDetails:', this); 
  
      setTimeout(function() {
        console.log('Student name:', this.name); 
      }.bind(this), 2000); // bind fixes `this`
    }
  };
  
  Student2.printDetails(); 