const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const confirmBtn = document.querySelector("#btn-confirm");
const categoryInput = document.querySelector("#input-category")
var editClicked = 0;
const expenseList = document.getElementsByClassName('checkList');
var totalAmount = 0;
var array = [
"Food & Drinks", "Groceries", "Shopping", "Transport", "Recreational Activities", "Bills", "Others"
];


confirmBtn.addEventListener('click', ()=>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason == "" || enteredAmount == ""){
        missingAlert();
    }
    else if (Number.isNaN(Number(enteredAmount)))
    {
        numAlert();
    }
    else if(Number(enteredAmount)<=0){
      negAlert();
    }

    else{

    if (Number.isInteger(Number(enteredAmount))){
      for (c=0; c<expenseList.length; c++) {
        expenseList[c].innerHTML += (`<ion-item-sliding>
                        <ion-item>
                          <ion-label class="searchItem">${enteredReason}</ion-label>
                          <ion-label class="ion-text-right decreaseAmount">$${enteredAmount}</ion-label>
                        </ion-item>
                      </ion-item-sliding>`);
      }
    }
    else {
      for (c=0; c<expenseList.length; c++) {
      expenseList[c].innerHTML += (`<ion-item-sliding>
                        <ion-item>
                          <ion-label class="searchItem">${enteredReason}</ion-label>
                          <ion-label class="ion-text-right decreaseAmount">$${Number(enteredAmount).toFixed(2)}</ion-label>
                        </ion-item>
                      </ion-item-sliding>`);
                    }
    }
    }

});

  async function missingAlert() {
    const alert = await alertController.create({
      header: 'Missing Field',
      message: 'You are missing a field',
      buttons: ['Ok']
    });
    await alert.present();
    }

  async function numAlert() {
    const alert = await alertController.create({
      header: 'Incorrect Input',
      message: 'The price of the expense must be a number',
      buttons: ['Ok']
    });
    await alert.present();
    }

  async function negAlert() {
    const alert = await alertController.create({
      header: 'Negative or zero input',
      message: 'The price of the expense must be a valid number',
      buttons: ['Ok']
    });
    await alert.present();
    }
      
          function handleInput(event) {
            const query = event.target.value.toLowerCase();

            for(var s=0; s<$("ion-item-sliding").length; s++){

              var itemChecked = $("ion-item-sliding")[s].children[0].children[0];
              if(itemChecked.textContent.toLowerCase().indexOf(query)>-1){
                $("ion-item-sliding")[s].style.display="block";
              }
              else{
                $("ion-item-sliding")[s].style.display="none";
              }

              for(var a=0; a<array.length; a++){
                
                if($("ion-item-sliding")[s].classList.contains(array[a]) && array[a].toLowerCase().indexOf(query)>-1){
                  console.log($("ion-item-sliding")[s].classList.contains(array[a]));
                  $("ion-item-sliding")[s].style.display="block";
                  
                }
              }
            }
          }