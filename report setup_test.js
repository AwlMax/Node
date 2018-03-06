const assert = require('assert');
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

Feature('Проверка наличия элементов: Наименование');
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

//TODO: Дополнить парочкой элементов

Feature('Проверка наличия элементов: Дерево устрройств');

// Тестовое оборудование
Scenario('Тестовое оборудование', (I) => {
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

Feature('При выборе устройства из дерева, происходит ли отображение данных в левой таблице');

Scenario('Выбрать дерево', (I) => {
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
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
});

Scenario('Выбрать из дерева одно устройство', (I) => {
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
    I.click("//li[@id='obj-12']/i[1]");
    I.click("//li[@id='dev-1006']/i[1]");
    I.seeElement("//li[@id='ti-20303']/a[@id='ti-20303_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[1]");
});

Feature('Проверка действия кнопок сортировки в таблицах');

//TODO: Дополнить парочкой столбцов

Scenario('Проверка действия кнопок сортировки в таблицах', async (I) => {
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

Feature('Проверка выбора каналов по кнопке Выбрать все каналы (Доступные каналы) и появления их в таблице');

Scenario('Проверка выбора каналов по кнопке Выбрать все каналы и появления их в таблице', async (I) => {
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
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");

    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');

    const attr = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attr, 'background-color: rgb(245, 245, 245);')
});

Feature('Проверка кнопки Переместить выбранные и появления в правой таблице');

Scenario('Переместить выбранные и появления в правой таблице', async (I) => {
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
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');

    const attr = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attr, 'background-color: rgb(245, 245, 245);');

    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');

    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");
});

Feature('Проверка перехода по кнопке Порядок каналов на страницу Порядок каналов');

Scenario('Порядок каналов на страницу Порядок каналов', async (I) => {
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
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');

    const attr = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attr, 'background-color: rgb(245, 245, 245);');

    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');

    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");

    I.click('//div[@class="form-actions fluid"]/div[@class="row"]/div[@class="col-md-6"]/div[@class="col-md-offset-3 col-md-9"]/button[@class="btn blue"]');

    I.seeInCurrentUrl('/sedmax/web/ui/reports/unfold/new');

    const divText = await I.grabTextFrom("//div[@class='portlet-title mt20 mb10']/div[@class='caption']");
    assert.equal(divText, 'ПОРЯДОК КАНАЛОВ');
});

Feature('Проверка действия кнопки Удалить выбранное, в том числе, когда отчеты не выбраны');

Scenario('Проверка кнопки Удалить выбранное', async (I) => {
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
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
    I.click('//div[@class="col-md-6"]/div/div/button[@class="btn red"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");
});

Feature('Проверка страницы Порядка каналов (при нажатии кнопки Порядок каналов на странице ): Проверка наличия элементов');

Scenario('Проверка наличия элементов', async (I) => {
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
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');
    const attr = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attr, 'background-color: rgb(245, 245, 245);');

    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");
    I.click('//div[@class="form-actions fluid"]/div[@class="row"]/div[@class="col-md-6"]/div[@class="col-md-offset-3 col-md-9"]/button[@class="btn blue"]');

    I.seeInCurrentUrl('/sedmax/web/ui/reports/unfold/new');

    const divText = await I.grabTextFrom("//div[@class='portlet-title mt20 mb10']/div[@class='caption']");
    assert.equal(divText, 'ПОРЯДОК КАНАЛОВ');

    I.seeElement('//div[@class="form-body"]/div/div/button[@class="btn blue mr5"]');

});







//const assert = require('assert');





//Feature('Проверка страницы "Порядка каналов" (при нажатии кнопки "Порядок каналов" на странице ):

//Feature('Проверка страницы "Порядка каналов" (при нажатии кнопки "Порядок каналов" на странице ): Проверка наличия элементов');

//Scenario('"Порядок каналов" на страницу "Порядок каналов", "Проверка наличия элементов"', async (I) => {


//-> Проверка выбора каналов по кнопке "Выбрать все каналы" (Доступные каналы) и появления их в таблице
//-> Проверка кнопки "Переместить выбранные" и появления в правой таблице
//-> Проверка действия кнопки "Удалить выбранное", в том числе, когда отчеты не выбраны
