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

// Тестовое оборудование
Scenario('test equipment', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.seeElement("//li[@id='obj-12']/i[1]");
    I.click("//li[@id='obj-12']/i[1]");
    I.click("//li[@id='dev-1006']/i[1]");
    I.seeElement("//li[@id='ti-20303']/a[@id='ti-20303_anchor']/i[1]");
});
//-------------------------------------------- Доступные каналы-------------------------------------------------------------
//Доступные каналы. Выбрать все каналы
Scenario('test available channels', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'test');
   I.click('.btn');
   I.seeElement('.sedmax-page-wrap');
   I.amOnPage('/sedmax/web/ui/reports/unfold/index');
   I.click("//div[@class='actions']/div/a");
   I.click("//div[@class='col-md-4']");
   I.seeElement("//div[@class='btn blue mr5']");
});

// Доступные каналы. Переместить выбранное
Scenario('test move selected', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.click("//div[@class='col-md-4']");
    I.seeElement("//div[@class='btn green']");
});

const assert = require('assert');

// Выборка всех каналов
Feature('available channels');

Scenario('Test sort device channel', async (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[1]");

    const first_value_in_table = await I.grabTextFrom("//div[@class='react-bs-container-body']/table/tbody/tr[1]");
    console.log(first_value_in_table);


    I.click("//div[@class='react-bs-table-container']" +
        "/div[@class='react-bs-table react-bs-table-bordered']" +
        "/div[@class='react-bs-container-header table-header-wrapper']" +
        "/table[@class='table table-hover table-bordered table-condensed']" +
        "/thead" +
        "/tr" +
        "/th[2]"
    );

    const first_value_in_table_sorted = await I.grabTextFrom("//div[@class='react-bs-container-body']/table/tbody/tr[1]");
    console.log(first_value_in_table_sorted);

    assert.notEqual(first_value_in_table_sorted, 'СПТ_01\tДавление (Архив)');
});

Scenario('Test sort device channel', async (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[1]");

    const first_value_in_table = await I.grabTextFrom("//div[@class='react-bs-container-body']/table/tbody/tr[1]");
    console.log(first_value_in_table);


    I.click("//div[@class='react-bs-table-container']" +
        "/div[@class='react-bs-table react-bs-table-bordered']" +
        "/div[@class='react-bs-container-header table-header-wrapper']" +
        "/table[@class='table table-hover table-bordered table-condensed']" +
        "/thead" +
        "/tr" +
        "/th[2]"
    );

    const first_value_in_table_sorted = await I.grabTextFrom("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
    console.log(first_value_in_table_sorted);

    assert.notEqual(first_value_in_table_sorted, 'СПТ_01\tТнр (Архив)');
});

//-------------------------------------------Выбранные каналы----------------------------------------------------------------------

// Выбрать все каналы
Scenario('test available channels', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.click("//div[@class='col-md-6']");
    I.seeElement("//div[@class='btn blue mr5']");
});

// Удалить выбранные
Scenario('test delete channels', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.click("//div[@class='col-md-6']");
    I.seeElement("//div[@class='btn red']");
});