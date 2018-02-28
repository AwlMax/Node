
Feature('Login test');

Scenario('test something', (I) => {
// создали первый тест файл
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'test');
   I.click('.btn');
   I.seeElement('.sedmax-page-wrap');
});
