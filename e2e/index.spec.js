describe('home page', function(){
    it('should', function(){
        browser.get('http://localhost:8000');

        var text = element(by.model('text'));
        //expect(text.getText)
        expect(browser.getTitle()).toEqual('Grunt Project Scaffolding');
    });
});