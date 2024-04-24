export default class TaskList {
  constructor() {

  }

  addTask() {
    const titles = ['TODO', 'IN PROGRESS', 'DONE'];
    const task = document.querySelector('.task');
    for (let i = 0; i < 3; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      task.appendChild(column);

      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = titles[i];
      column.appendChild(title);

      this.description = document.createElement("div");
      this.description.classList.add("description");
      column.appendChild(this.description);

      const addCard = document.createElement("div");
      addCard.classList.add("addCard");
      const add = document.createElement("span");
      add.classList.add("addAnotherCard");
      add.textContent = '+ Add another card';
      addCard.appendChild(add);
      column.appendChild(addCard);

      const button = document.createElement("button");
      button.classList.add("addButtonCard");
      // button.classList.add("delete");
      button.textContent = "Add card";
      addCard.appendChild(button);
    }
    this.addText();
    this.transfer();
    // this.delete();
  }

  addText() {
    console.log("add");
    const addAnotherCards = document.querySelectorAll(".addAnotherCard");
    const addButtonCards = document.querySelectorAll(".addButtonCard");
    const descript = document.querySelectorAll(".description");

    addAnotherCards.forEach((addAnotherCard, index) => {
      addAnotherCard.addEventListener("click", () => {
        if (!addAnotherCard.classList.contains('delete')) {
          addAnotherCard.classList.toggle('delete');
          addButtonCards[index].classList.toggle('input');
          // Создаем новое поле ввода
          const inputField = document.createElement('textarea');
          inputField.setAttribute('type', 'text');
          inputField.classList.add('enter');
          inputField.setAttribute('placeholder', 'Enter text here');
          // // Добавляем новое поле ввода после кнопки
          addAnotherCard.parentNode.insertBefore(inputField, addAnotherCard.nextSibling);

          addButtonCards[index].addEventListener('click', () => {
            if (inputField.value.trim() !== '') {
              const divDescription = document.createElement('div');
              divDescription.classList.add('descriptionText');
              divDescription.textContent = inputField.value;
              descript[index].appendChild(divDescription);

              if (inputField && inputField.parentNode) {
                inputField.parentNode.removeChild(inputField);
              }
              addAnotherCard.classList.toggle('delete');
              addButtonCards[index].classList.toggle('input');
              inputField.value = '';
            } else {
              addAnotherCard.classList.toggle('delete');
              addButtonCards[index].classList.toggle('input');
              inputField.parentNode.removeChild(inputField);
            }
          }, { once: true }); // Обработчик события сработает только один раз
        }
        
      });
    });
  }

  // delete() {
  //   console.log('delete');
  //   const descriptionTexts = document.querySelectorAll('.descriptionText');
  //   // Добавляем обработчик события клика на каждую кнопку ::before
  //   descriptionTexts.forEach(function(element) {
  //     console.log(element);
  //     const beforeElement = element.querySelector('::before');
  //     beforeElement.addEventListener('click', function() {
  //       // Удаляем родительский элемент при клике
  //       element.parentNode.removeChild(element);
  //     });
  //   });
  // }

  transfer() {
    console.log("transfer");
  }
}
