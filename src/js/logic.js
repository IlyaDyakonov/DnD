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
    // this.transfer();
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

              const buttonDescription = document.createElement('button');
              buttonDescription.classList.add('deleteCard');
              buttonDescription.textContent = "✘";
              divDescription.appendChild(buttonDescription);

              if (inputField && inputField.parentNode) {
                inputField.parentNode.removeChild(inputField);
              }
              addAnotherCard.classList.toggle('delete');
              addButtonCards[index].classList.toggle('input');
              inputField.value = '';
              this.deleteText();
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

  deleteText() {
    // console.log('delete');
    
    const delButtons = document.querySelectorAll('.deleteCard');
    // console.log(`текст: ${descriptionTexts}`);
    delButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const divDescription = button.parentElement;
        divDescription.remove();
      });
    })
  }

  transfer() {
    console.log("transfer");
  }
}

// 1. перетаскивание элементов.

