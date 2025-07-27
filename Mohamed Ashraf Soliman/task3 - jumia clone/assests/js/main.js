const account = document.querySelector('.account .toplevel');
const accountDropdown = document.querySelector('.account ul');
const help = document.querySelector('.help .toplevel');
const helpDropdown = document.querySelector('.help ul');

account.addEventListener('click', () => {
    accountDropdown.style.display = 'flex';
});

help.addEventListener('click', () => {
    helpDropdown.style.display = 'flex';
});

document.addEventListener('click', (event) => {
    if (event.target != account && !account.contains(event.target)) {
        accountDropdown.style.display = 'none';
    }
    if (event.target != help && !help.contains(event.target)) {
        helpDropdown.style.display = 'none';
    }
});