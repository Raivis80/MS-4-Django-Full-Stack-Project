let FileInputs = document.querySelectorAll('input[type=file]')
let SellectInputs = document.querySelectorAll('select')

Array.prototype.filter.call(FileInputs, function (input) {
    input.classList.add('text-gray')
}, false);

Array.prototype.filter.call(SellectInputs, function (input) {
    input.classList.add('form-select')
}, false);


(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('form')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    FormTriggerOnSubmit()
                    FormTrigger()
                }
                form.classList.add('was-validated')
                
            }, false)
        })
})()

function FormTrigger() {
    let inputs = document.querySelectorAll('.form-control')
    // Loop over each input and watch blue event
    let validation = Array.prototype.filter.call(inputs, function (input) {
        // Image input gray placeholder
        if (input)
        input.addEventListener('blur', function (event) {
            // reset
            input.classList.remove('is-invalid')
            input.classList.remove('is-valid')
            input.classList.remove('text-gray')
            //Display required message if not valid
            if (input.checkValidity() === false) {
                input.classList.add('is-invalid')
                input.classList.add('text-gray')
                let parent = this.parentElement;
                let elem = parent.getElementsByTagName('p')

                if (elem[0]) {

                    // error message for required fields add praceholder
                } else {
                    let para = document.createElement("P");
                    para.classList.add('text-danger');
                    let str = `${input.placeholder} field is Required.`
                    para.innerHTML = str;
                    parent.append(para);
                }

            } else {
                input.classList.add('is-valid')
                let parent = this.parentElement;
                let elem = parent.getElementsByTagName('p')
                input.classList.remove('text-gray')
                if (elem[0]) {
                    elem[0].remove()
                }
            }
        }, false);
    });
}


function FormTriggerOnSubmit() {
let inputs = document.querySelectorAll('.form-control')
    // Loop over each input and watch blue event
    let validation = Array.prototype.filter.call(inputs, function (input) {
            input.classList.remove('is-invalid')
            input.classList.remove('is-valid')
            input.classList.remove('text-gray')
            //Display required message if not valid
            if (input.checkValidity() === false) {
                input.classList.add('is-invalid')
                input.classList.add('text-gray')
                let parent = input.parentElement;
                let elem = parent.getElementsByTagName('p')

                if (elem[0]) {

                    // error message for required fields add praceholder
                } else {
                    let para = document.createElement("P");
                    para.classList.add('text-danger');
                    let str = `${input.placeholder} field is Required.`
                    para.innerHTML = str;
                    parent.append(para);
                }

            }
    }, false);
}