beforeEach(function () {

    browser.get('http://angular.io/docs');
});

describe('angular docs page', function () {
    it('should verify if feedback is displayed', function () {

        expect(element(by.css('h1.no-toc')).getText()).toEqual('What is Angular?');
        expect(element(by.id('feedback')).getText()).toEqual('Feedback');

    });

describe('angular docs page', function () {
    it('should search text "api" on site', function () {

        var el = element(by.css('aio-search-box.search-container'));
        el.click();
        browser.sleep(3000);
        var search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
        search.sendKeys('api');
        expect(element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div')).getText()).toEqual('Searching ...');
        browser.sleep(3000);
        expect(element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted > ul.priority-pages > li')).getText()).toEqual('core package');
    });

describe('angular docs page', function () {
    it('should redirect to API List on https://angular.io/api', function () {

        var el = element(by.css('aio-search-box.search-container'));
        el.click();
        browser.sleep(3000);
        var search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
        search.sendKeys('api');
        browser.sleep(3000);
        var searchresult = element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted:nth-child(4) > ul.priority-pages > li.search-page.ng-star-inserted > a.search-result-item'));
        searchresult.click();
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');
        var pagename = element(by.css('#api-list'));
        expect(pagename.getText()).toEqual('API List');
    });

describe('angular docs page', function () {
    it('should redirect to QuickStart page', function () {

        var box = element(by.xpath('//*[@id="docs"]/aio-doc-viewer/div/div/div/a[2]'));
        box.click();
        browser.sleep(5000);
        var pagename = element(by.css('#quickstart'));
        expect(pagename.getText()).toEqual('QuickStart');
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
    });
});