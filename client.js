// -------------- get everything ready -------------


console.log('js')

$(document).ready(readyNow);
// once document is ready, load functionalities
function readyNow() {
  console.log('jQuery');
  $('#seeSalaries').on('click', appendSalaries);
  $('#clear').on('click', clearInfo);
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
const ratingBonusArray = [0, 0, .04, .06, .1];

function determineBonus(employee) {
  let bonus = ratingBonusArray[employee.reviewRating - 1] //initialize by referencing above array, shortcutting a bunch of if/elses.

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

const employeeBonuses = [];
for (let employee of employees) {
  employeeBonuses.push(calculateIndividualEmployeeBonus(employee))
}

console.log('employee bonuses:', employeeBonuses);

// ---------- take new object data and put into DOM ------------

// DOM

function appendSalaries() {
  console.log('in appendSalaries');
  //clear ul html
  $('#list-of-employees').html('');

  //append each list item
  // for (let employee of employeeBonuses) {
  //   $('#list-of-employees').append(
  //     `<li><span class='employee-name'>${employee.name}</span>: Bonus Amount: ${employee.totalBonus}; Bonus Percent: ${employee.bonusPercentage}; Total Compensation: ${employee.totalCompensation}</li>`);
  // }

  for (i = 0; i < employees.length; i++) {
    $('#list-of-employees').append(
      `<li><span class='employee-name'>${employees[i].name}</span> <span class='info'> Annual Salary: ${employees[i].annualSalary}</span> <span class='info'>Bonus Percent: ${employeeBonuses[i].bonusPercentage}</span> <span class='info'>Bonus Amount: ${employeeBonuses[i].totalBonus}</span> <span class='info'>Total Compensation: ${employeeBonuses[i].totalCompensation}</span></li>`);
  }
}

function clearInfo() {
  console.log('in clearInfo')
  $('#list-of-employees').html('');
}