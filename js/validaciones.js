//Para revisar si los campos están llenos
(function () {
    'use strict'
  
    //Se le debe colocar al form al cual se le quiere aplicar la validación. En este caso, a todos los campos
    var forms = document.querySelectorAll('.needs-validation')
  
    //Repite la revisión y evita que los campos se borren hasta que todo esté correcto y se suban
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()