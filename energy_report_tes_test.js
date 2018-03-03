// - Проверка страницы "ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ"
Feature('Energy report_test');

// -> Проверка наличия элементов

Scenario('Check exists of link in report list', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('//table/tbody/tr[1]/td[3]/div/a');
});

Scenario('Check exists of group in group selector', (I) => {
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
Scenario('Test reports', (I) => {
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

// наименование отчетов для теста
Scenario('test something', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('.react-bs-table-container');
});

// клики по отчетам для тестов
Scenario('test forms', (I) =>{
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.fillField('.form-control', '2018');
    I.click('Подтвердить');
});



// ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ, кнопка удалить выбранное
Scenario('test delete selected', (I) => {
	I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('')
})