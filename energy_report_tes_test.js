// - Проверка страницы "ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ"
Feature('Energy report_test');

//- Авторизация в системе ('#LoginForm_account': 'test', '#LoginForm_password': 'test')

//- Проверка страницы "ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ"

//-> Проверка наличия элементов

//-> Проверка поведения элементов

//-> проверка переходов по кнопкам или появления всплывающих окон

// -> Проверка наличия элементов

Feature('Проверка наличия элементов');

Scenario('Проверить наличие ссылки в списке отчетов', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('//table/tbody/tr[1]/td[3]/div/a');
});

Scenario('Проверка наличия элементов в группе', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('//th[@title="Группа"]/div/select[1]');
});

// Добавить еще поиск элементов

//-> Проверка поведения элементов
//-> проверка переходов по кнопкам или появления всплывающих окон

// проверка отчетов для теста

Feature('Проверка поведения элементов');

Scenario('Проверка кнопки отмена', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.click('//table/tbody/tr[1]/td[3]/div/a');
    I.seeElement('.modal-content');
    I.click('Отмена');
});

// Наименование отчетов для теста
Feature('Наименование отчетов для теста');

Scenario('Наименование отчетов', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('.react-bs-table-container');
});

// клики по отчетам для тестов
Feature('Клики по отчетам для тестов');

Scenario('Тест формы', (I) =>{
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.fillField('.form-control', '2018');
    I.click('Подтвердить');
});

// ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ, кнопка удалить выбранное
Feature('Кнопка удалить выбранное');

Scenario('Тест кнопки удалить', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//button[@class='btn red-corp']");
    I.seeElement("//div[@class='modal-dialog ']/div");
});

