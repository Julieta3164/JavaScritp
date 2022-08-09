
let input = document.getElementById('input9');
let btn9 = document.getElementById('btn9');
let text9 = document.getElementById('text9');
        
btn9.addEventListener('click', () => {
let input9 = input.value;
let result = divisibility(input9);
text9.innerHTML = `Resultado: ${result}`; 
});
        
        function divisibility(input9) {
        
            if (input9 % 2 === 0 || input9 % 3 === 0 || input9 % 5 === 0 || input9 % 7 === 0) {
                if (input9 % 2 === 0) {
                    document.write(`Resultado: ${input9} Es divisible entre 2 <br/>`);
                }
                if (input9 % 3 === 0) {
                    document.write(`Resultado: ${input9} Es divisible entre 3 <br/>`);
                }
                if (input9 % 5 === 0) {
                    document.write(`Resultado: ${input9} Es divisible entre 5 <br/>`);
                }
                if (input9 % 7 === 0) {

                    document.write(`Resultado: ${input9} Es divisible entre 7 <br/>`);
                }
            } else {
                return("No es divisible ni entre 2, ni entre 3, ni entre 5, ni entre 7");
            }
        }; 