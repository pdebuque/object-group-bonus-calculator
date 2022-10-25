// -------------- get everything ready -------------


console.log('js')

$(document).ready(readyNow);
// once document is ready, load functionalities
function readyNow() {
  console.log('jQuery');
  $('#seeSalaries').on('click', appendSalaries);
}

// ----------------- array of employee objects ------------
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);

// ----------------- calculate 1 employee's bonus -----------

function determineBonus(employee) {
  let bonus;
  switch (employee.reviewRating) {

    case 1:
      bonus = 0;
      break;
    case 2:
      bonus = 0;
      break;
    case 3:
      bonus = .04;
      break;
    case 4:
      bonus = .06;
      break;
    case 5:
      bonus = .1;
      break;
  }

  if (employee.employeeNumber.length === 4) {
    bonus += .05
  };
  if (employee.annualSalary >= 65000) {
    bonus -= .01
  };

  if (bonus > .13) {
    bonus = .13;
  }
  if (bonus < 0) {
    bonus = 0;
  }

  return bonus
}
for (let employee of employees) {
  console.log(determineBonus(employee));
}

function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  const employeeWithBonus = {};
  employeeWithBonus.name = employee.name;
  employeeWithBonus.bonusPercentage = determineBonus(employee);
  employeeWithBonus.totalCompensation = Math.round(Number(employee.annualSalary) * (1 + employeeWithBonus.bonusPercentage));
  employeeWithBonus.totalBonus = Math.round(employee.annualSalary * employeeWithBonus.bonusPercentage);

  // return new object with bonus results
  return employeeWithBonus
}

for (let employee of employees) {
  console.log(calculateIndividualEmployeeBonus(employee));
}

// --------- create new object with employee data fed through bonuses function --------

const employeeBonuses = calculateIndividualEmployeeBonus(employees)
console.log(employeeBonuses);

// ---------- take new object data and put into DOM ------------

// DOM

function appendSalaries() {
  console.log('in appendSalaries');
  for (let employee of employees) {
    $('#list-of-employees').append(
      `<li>employee</li>`);
  }
}