// - Авторизация в системе ('#LoginForm_account': 'test', '#LoginForm_password': 'test')
Feature('Login test');

// Успешная авторизация
Scenario('Success login', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'test');
   I.click('.btn');
   I.seeElement('.sedmax-page-wrap');
});

// Ошибочная авторизация
Scenario('Error login', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test1');
    I.click('.btn');
    I.seeElement('.error');
});
