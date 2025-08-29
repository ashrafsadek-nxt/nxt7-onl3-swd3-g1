(function () {
  
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
})();

document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
     
    });
  });
});