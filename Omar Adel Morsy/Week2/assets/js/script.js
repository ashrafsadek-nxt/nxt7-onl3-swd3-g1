var day=document.getElementById('Day');
var month=document.getElementById('Month');
var year=document.getElementById('Year');
console.log(day);

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
for(var i=1;i<=31;i++){
    if(i==currentDay){
        day.innerHTML+=`<option selected value="${i}">${i}</option>`;
    }
    else{
        day.innerHTML+=`<option value="${i}">${i}</option>`;
    }
}
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

for (let i = 0; i < 12; i++) {
  if(i==currentMonth){
    month.innerHTML+=`<option selected value="${i}">${months[i]}</option>`;
  }
  else{
    month.innerHTML+=`<option value="${i}">${months[i]}</option>`;
  }
}


// Fill years (e.g., from 1950 to current year)
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1905; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  year.appendChild(option);
}

