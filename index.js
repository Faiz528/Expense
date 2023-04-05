
function saveToLocalStorage(event){
    event.preventDefault();
    const expense = event.target.expense.value;
    const purpose = event.target.purpose.value;
    const id = event.target.category.value;
    let my ={
        Amount :expense,
         Purpose : purpose,
         Category : id

    }
    localStorage.setItem(expense ,JSON.stringify(my));
    
    var newli =document.createElement('li');
     var text1 = document.createTextNode(expense+"-"+purpose+"-"+id);
    newli.appendChild(text1);
   var ul = document.querySelector('ul');
   ul.appendChild(newli);
   const deletes = document.createElement('input');
   deletes.type='button';
   deletes.value="Delete Expense";
   newli.appendChild(deletes);
   
   //var but = document.createElement('button');
   //var del = document.createTextNode('Delete');
   //but.appendChild(del);
   //ul.appendChild(but);
   deletes.onclick= ()=> {
       localStorage.removeItem(expense);
       ul.removeChild(newli);
   }

   // Creating edit button
   const edit = document.createElement('input');
   edit.type='button';
   edit.value="Edit Expense";
   newli.appendChild(edit);
   edit.onclick= ()=> {
        event.target.expense.value= expense;
        event.target.purpose.value= purpose;
       localStorage.removeItem(expense);
       ul.removeChild(newli);
   }
}
    