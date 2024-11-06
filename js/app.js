const form = document.querySelector("form")
const employees = document.querySelector('#employeeList')

form.addEventListener("submit", (event) =>{
      event.preventDefault() //stop the form from  refreshing the page
      const formData = new FormData(form); //capture all form fields

      const firstName = formData.get('firstname')
      const lastName = formData.get('lastname')
      const email = formData.get('email')
      const hireDate = formData.get('hire_date')
      const photo = formData.get('photo').name
    
      const tableRow = document.createElement('tr')
      tableRow.innerHTML = `
        <td><img src="./images/${photo}"></td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${hireDate}</td>
      `
      employees.appendChild(tableRow)
      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener("click", () => {
            if (confirm('Are you sure you want to delete this employee?') === true) {
                  tableRow.remove()
            }
      })
      actionCell.appendChild(deleteButton);
      tableRow.appendChild(actionCell);
  })











