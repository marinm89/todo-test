console.log('add item');

(function () {
  'use strict';

  function Todo() {
    const input = document.querySelector('input');
    const addButton = document.querySelector('.addButton');
    const list = document.querySelector('ul');

    function removeItem(event){
        const removeButton = event.target;
        removeButton.parentNode.remove();
    }


    function addRemoveButton(item){
        const removeButton = document.createElement('div');
        removeButton.className = "removeButton";
        removeButton.innerText = 'remove';
        removeButton.addEventListener('click',removeItem)
        item.appendChild(removeButton);
    }

    function addCheckbox(item){
        const addCheckbox = document.createElement('input');
        addCheckbox.setAttribute('type','checkbox');
        item.insertBefore(checkbox,item.firstChild);
    }

    function createItem(text) {
      const listItem = document.createElement('li');
      listItem.className = 'todo-item';
      //listItem.innerText = text;

      addRemoveButton(listItem);
      addCheckbox(listItem);
      //addTextSpan(listItem,text);  

      return listItem;
    }

    function addItem() {
      console.log('add item');
      //create item
      const text = input.value;
      console.log('text', text);

      const item = createItem(text);
      list.appendChild(item);
      input.value = '';
    }

    this.addListeners = function () {
      addButton.addEventListener('click', addItem);
    };
  }

  Todo.prototype.init = function () {
    this.addListeners();
  };

  const todo = new Todo();
  window.addEventListener('load', todo.init);
})();
