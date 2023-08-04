      //  loading page
       var myVar;
        
        function myFunction() {
          myVar = setTimeout(showPage, 1000);
        }
        
        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("myDiv").style.display = "block";
        }




        // autocomplete

        const searchInput = document.querySelector('#search-input');
        const resultsList = document.querySelector('#autocomplete-results');
        
        const products = ['Iphone', 'Ipad', 'Macbook', 'Airpods', 'Apple Watch', 'Mac Mini', 'Mac Pro'];
        
        function autocomplete(value) {
          let suggestions = [];
          if (value.length > 0) {
            suggestions = products.filter(product => product.toLowerCase().startsWith(value.toLowerCase()));
          }
          displayResults(suggestions);
        }
        
        function displayResults(suggestions) {
          if (suggestions.length === 0) {
            resultsList.innerHTML = '';
            resultsList.style.display = 'none';
            return;
          }
          
          const html = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
          resultsList.innerHTML = html;
          resultsList.style.display = 'block';
        }
        
        searchInput.addEventListener('input', () => {
          autocomplete(searchInput.value);
        });
        
        document.addEventListener('click', event => {
          if (!event.target.matches('#search-input')) {
            resultsList.style.display = 'none';
          }
        });
        
        resultsList.addEventListener('click', event => {
          const selectedValue = event.target.textContent;
          searchInput.value = selectedValue;
          resultsList.style.display = 'none';
        });





         // emailjs
         const form = document.querySelector('#contact-form');

         form.addEventListener('submit', (event) => {
          event.preventDefault();
        
          // Collect the user's input from the form
          const name = form.querySelector('input[name="name"]').value;
          const email = form.querySelector('input[name="email"]').value;
          const message = form.querySelector('textarea[name="message"]').value;
        
          // Send the email using EmailJS
          emailjs.send("service_qyrrvcb", "template_o86wkwj", {
              from_name: name,
              from_email: email,
              message: message
            })
            .then((response) => {
              alert("Your message sent successfully!!")
              console.log("SUCCESS!", response.status, response.text);
              form.reset(); // Clear the form fields
            }, (error) => {
              console.log("FAILED...", error);
            });
        });










