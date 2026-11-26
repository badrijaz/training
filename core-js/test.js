//coerceion
console.log(1 + '2');
console.log('5' - 2);      
console.log(Boolean(0));   
console.log(0 == '');      
console.log(0 === '');     

// hoisting
console.log(a);



var a = 1; // varialbe declared here instead of above

try {
  console.log(b);          
  let b = 1;
} catch (error) {
  console.log(error.message);
}

console.log(hello());      
function hello() {
  return 'hoisting example';
}

try {
  console.log(greet());    
  var greet = function () {
    return 'hoisting example';
  }
} catch (error) {
  console.log(error.message);
}

if (1) {
  var c = 'inside';
}
console.log(c);           

// this
const car = {
  make: 'Honda',
  getMake: function () {
    return this.make;
  }
};

console.log(car.getMake());   

const getMake = car.getMake;
console.log(getMake());       

const dealer = {
  name: 'carforce',
  arrow_name: function () {
    const getName = () => this.name;
    return getName();
  },
  function_name: function () {
    const getName = function () {
      return this.name;
    };
    return getName();
  }
};

console.log(dealer.arrow_name());     
console.log(dealer.function_name());  

const bound_get_make = car.getMake.bind(car); // binding this
console.log(bound_get_make());             


// ruby methods

const cars = [
  { make: 'Toyota', 
    model: 'Corolla Altis', price: 6350000, km: 41000 },
  { make: 'Honda', model: 'City', 
    price: 5100000, km: 33000 },
  { make: 'Suzuki', model: 'Alto', price: 2950000, 
    km: 18500 },
  { 
    make: 'Suzuki', model: 'Swift', price: 4600000, km: 15000 },
  { make: 'Honda', model: 'Civic', price: 7900000, km: 52000

   },
  { make: 'Toyota', model: 'Yaris', price: 5300000, km: 21000 }
];

// group_by }
const byMake = {};
cars.forEach(function (car) {
  if (!byMake[car.make]) {
    byMake[car.make] = [];
  }
  byMake[car.make].push(car);
});
console.log(byMake);

// cars.sum
let total = 0;
cars.forEach(function (car) {
  total = total + car.price;
});
console.log(total);

// cars.max_by
const cars_copy = [...cars]
const sorted = cars_copy.sort(function (first, second) {
  return second.km - first.km;
});
const top5 = sorted.slice(0, 5);
console.log(top5);

function debounce(fn) {
  let timer_id;
  return function(val) {
    clearInterval(timer_id)

    timer_id = setTimeout(() => {
      fn(val)
    }, 3000) // 3 second delay
  }
}

const search = debounce(function (text) {
  console.log('searching', text);
});

search('c');
search('ca');
search('car');
search('cars');
