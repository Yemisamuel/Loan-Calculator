const form = document.getElementById('loan-form');
 form.addEventListener('submit', calculateLoan);

 function calculateLoan(e){
    e.preventDefault()
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    
    let x = Math.pow(1 + calculatedInterest, calculatedPayment);

    const monthly = (principal *x* calculatedInterest);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = ((monthly * calculatedPayment) -principal).toFixed(2);
        totalInterest.value = (monthly * calculatedPayment).toFixed(2);

        document.getElementById('result').style.display = 'block'
        
        document.getElementById('loader').style.display = 'none'
        document.getElementById('amount').value = '';
        document.getElementById('interest').value = '';
        document.getElementById('years').value = '';
    }

    else{
         
        function showError(error){
          document.getElementById('result').style.display = 'none'
          document.getElementById('loader').style.display = 'none'
          const errorDiv = document.createElement('div');
  
          const card = document.querySelector('.card')
          const heading = document.querySelector('.heading')
  
          errorDiv.className = 'alert alert-danger';
          errorDiv.appendChild(document.createTextNode(error));
  
          card.insertBefore(errorDiv, heading);
  
          setTimeout(clearErr, 3000)
  
        }
        
        showError('fill the the input');
        function clearErr(){
          document.querySelector('.alert').remove()
        }
      }
 }
   

 
