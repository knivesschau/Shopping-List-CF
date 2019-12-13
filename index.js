'use strict'

function addItems() { 
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

        const newItem = $('input').val();
    
        $('#shopping-list-entry').val('');
    
    
        $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
      });
}

function removeItems() {
    $("div").on("click", "button.shopping-item-delete", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).closest("li").remove(); 
    });
}

function checkOffItems() {
    $("div").on("click", "button.shopping-item-toggle", function(event){
        event.stopPropagation();
        event.preventDefault();
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
}

$(addItems);
$(removeItems);
$(checkOffItems);