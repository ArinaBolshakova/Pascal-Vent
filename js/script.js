        document.addEventListener("DOMContentLoaded", function() {
          const tabLinks = document.querySelectorAll(".tab-link");
          const tabPanes = document.querySelectorAll(".tab-pane");
      
          tabLinks.forEach(link => {
            link.addEventListener("click", function() {
              const target = this.getAttribute("data-tab");
      
              tabLinks.forEach(link => link.classList.remove("active"));
              tabPanes.forEach(pane => pane.classList.remove("active"));
      
              this.classList.add("active");
              document.getElementById(target).classList.add("active");
            });
          });
        });

        document.getElementById('contact-form').addEventListener('submit', function(event) {
          var phoneInput = document.getElementById('phone');
          var phoneError = document.getElementById('phone-error');
          var phonePattern = /^(8|\+7)[\- ]?\(?\d{3}\)?[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/; // Паттерн для проверки формата номера телефона
      
          if (!phonePattern.test(phoneInput.value)) {
              event.preventDefault(); // Отмена отправки формы
              phoneError.style.display = 'block'; // Показ уведомления об ошибке
          } else {
              phoneError.style.display = 'none'; // Скрытие уведомления об ошибке, если номер правильный
          }
      });