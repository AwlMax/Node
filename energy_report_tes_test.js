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

// - Проверка страницы "Настройка отчета" (при нажатии кнопки "Добавить отчет")
Feature('Report setup');

// -> Проверка наличия элементов
//     -> При выборе устройства из дерева, происходит ли отображение данных в левой таблице
//     -> Проверка выбора каналов по кнопке "Выбрать все каналы" (Доступные каналы) и появления их в таблице
//     -> Проверка кнопки "Переместить выбранные" и появления в правой таблице
//     -> Проверка действия кнопок сортировки в таблицах
//     -> Проверка действия кнопки "Удалить выбранное", в том числе, когда отчеты не выбраны
//     -> Проверка перехода по кнопке "Порядок каналов" на страницу "Порядок каналов"
// -> Проверка страницы "Порядка каналов" (при нажатии кнопки "Порядок каналов" на странице )
// -> Проверка наличия элементов
//     -> Проверка поведения элементов на странице "Порядка каналов"


// Наименование в НАСТРОЙКА ОТЧЕТА
Scenario('test tuning report name', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.seeElement("//div[@class='form-body']/div[@class='row']/div[@class='col-md-2']/div[@class='form-group']/input[@class='form-control']");
    I.fillField("//div[@class='form-body']/div[@class='row']/div[@class='col-md-2']/div[@class='form-group']/input[@class='form-control']", "test");
});

// тестовое оборудование. Выборка по оборудованию
Scenario('test tuning report name', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    // I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.seeElement("//div[@class='form-body']/div[@class='row']/div[@class='col-md-2']/div[@class='form-group']/input[@class='form-control']");
    I.fillField("//div[@class='form-body']/div[@class='row']/div[@class='col-md-2']/div[@class='form-group']/input[@class='form-control']", "test");
    I.click("//li[@id='obj-12']/i[1]");
    I.click("//li[@id='dev-1006']/i[1]");
});

// тестовое оборудование
Scenario('test equipment', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");

    I.seeElement("//a[@id=['obj-12_anchor']/");
    I.click("//a[]");
    I.click("//li[@id='obj-12']/i[1]");
    I.click("//li[@id='dev-1006']/i[1]");
});

// доступные каналы. Выбрать все каналы
Scenario('test available channels', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.click("//div[@class='col-md-4']");
    I.seeElement("//div[@class='btn blue mr5']");
});

// ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ, кнопка удалить выбранное
Scenario('test delete selected', (I) => {
	I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('')
})