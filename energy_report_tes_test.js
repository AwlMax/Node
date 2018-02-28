
Feature('Energy report_test');

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

Scenario('test something', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('.react-bs-table-container');
});

Scenario('test forms', (I) =>{
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.fillField('.form-control', '2018');
    I.click('Подтвердить');
});

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

