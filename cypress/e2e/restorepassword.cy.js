describe('logincheck', function () {

    it('Неправильный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click(); // ищу поле восстановления пароля и жму
         cy.get('#mailForgot').type('shellmotoko@gmail.com'); // пишу мейл для восстановления
         cy.get('#restoreEmailButton').click(); // жму восстановить 
         cy.get('#exitMessageButton > .exitIcon') // ищу кнопку крестика
       
        
     })
 })
 
 // 1. Зайти на сайт
 // 2. Найти кнопку восстановить пароль и нажать на неё
 // 3. Ввести любой e-mail
 // 4. Проверить текст и есть кнопка крестика
 
 