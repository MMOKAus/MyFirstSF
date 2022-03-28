const getSleepHours = day => {
  if (day === 'Monday') {
  return 8;
} else if (day === 'Tuesday') 
{ return 7;
}
else if (day === 'Wednesday') 
{ return 6;
}
else if (day === 'Thursday') 
{ return 5;
}
else if (day === 'Friday') 
{ return 4;
}
 else if (day === 'Saturday') 
{ return 3;
} 
else if (day === 'Sunday') 
{ return 2;
}
else {
  return 'Error';
}
};
const getActualSleepHours = () => 
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  console.log(getSleepHours('Monday'));
  console.log(getSleepHours());
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
console.log(getActualSleepHours());
const calculateSleepDebt = () => 
{ const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('You have perfect ammount of sleep!');
} else if (actualSleepHours > idealSleepHours) {
  console.log("You've got more sleep then needed");
} else {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
};
calculateSleepDebt();


