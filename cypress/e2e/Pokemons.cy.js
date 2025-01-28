import * as data from "../helpers/default_data.json"

describe('buy new avatar for trainer', function () {

    it('new avatar for trainer', function () {
         cy.visit('https://pokemonbattle.ru/login'); // заходим на сайт
         cy.get(':nth-child(1) > .auth__input').type(data.login); // ищем окно логин и вставляем 
         cy.get('#password').type(data.password); // ищем окно пасс и вставляем
         cy.get('.auth__button').click(); // ищу кнопку авторизацию и авторизуюсь
         cy.get('.header__container > .header__id').click(); // ищу кнопку перехода в профиль перехожу в профиль
         cy.get('[href="/shop"]').click(); //ищу кнопку смены аватара и перехожу в магазин 
         cy.get('.available > button').first().click({ force: true });   // кликаю rупить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('0726');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');         
     })
 })
 
 // 1. Зайти на сайт
 // 2. Найти поле логин и ввести правильный логин
 // 3. Найти поле пароль и ввести правильный пароль
 // 4. Найти кнопку войти и нажать на неё
 // 5. проверить что авторизация прошла успешно