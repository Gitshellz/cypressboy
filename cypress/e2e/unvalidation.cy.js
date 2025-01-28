describe('logincheck', function () {

    it('Правильный пароль и невалидный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru'); // ищу поле логина и пишу логин
         cy.get('#pass').type('iLoveqastudio1'); //ищу поле ввода пароля и ввожу пароль
         cy.get('#loginButton').click(); //найти кнопку и нажать
         cy.get('#messageHeader').contains('Такого логина или пароля нет');; //проверяем наличие сообщение об ошибке
         cy.get('#exitMessageButton > .exitIcon'); //проверяем наличие крестика
     })
 })
 
 // 1. Зайти на сайт
 // 2. Найти поле логин и ввести почту без @
 // 3. Найти поле пароль и ввести правильный пароль
 // 4. Найти кнопку войти и нажать на неё
 // 5. проверить что авторизация прошла неуспешно 
 