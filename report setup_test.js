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