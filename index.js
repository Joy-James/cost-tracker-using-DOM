
document.addEventListener('DOMContentLoaded', () => {
    const transactionList = document.getElementById('transaction-list');
    const transactionForm = document.getElementById('transaction-form');
  
    const transactions = [];
  
    function renderTransactions() {
      transactionList.innerHTML = '';
  
      if (transactions.length === 0) {
        transactionList.innerHTML = '<li>No transactions found.</li>';
      } else {
        transactions.forEach((transaction) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${transaction.title} - ${transaction.category} - ${transaction.amount}
         `;
          listItem.classList.add(transaction.category);
          transactionList.appendChild(listItem);
        });
      }
    }
  
    function addTransaction(title, category, amount) {
      const transaction = {
        title,
        category,
        amount
      };
  
      transactions.push(transaction);
      renderTransactions();
    }
  
    function deleteTransaction(index) {
      if (index >= 0 && index < transactions.length) {
        transactions.splice(index, 1);
        renderTransactions();
      }
    }
  
    transactionForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const amount = document.getElementById('amount').value;
  
      addTransaction(title, category, amount);
  
      transactionForm.reset();
    });
  
    transactionList.addEventListener('click', (event) => {
      if (event.target.nodeName === 'LI') {
        const transactionIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
        deleteTransaction(transactionIndex);
      }
    });
  });
  
  