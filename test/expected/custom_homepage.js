describe('homepage element styles', function() {
	 var ptor;

	 beforeEach(function (){
            ptor = protractor.getInstance();
          });

	describe('loginButton', function() {
		it("should have height of 100px", function(){
			expect(ptor.findElement(protractor.By.css('#loginButton')).css_value('height')).toEqual('100px')
		});

		it("should have width of 100px", function(){
			expect(ptor.findElement(protractor.By.css('#loginButton')).css_value('width')).toEqual('100px')
		});

	});

	describe('resetButton', function() {
		it("should have height of 100px", function(){
			expect(ptor.findElement(protractor.By.css('#resetButton')).css_value('height')).toEqual('100px')
		});

		it("should have width of 100px", function(){
			expect(ptor.findElement(protractor.By.css('#resetButton')).css_value('width')).toEqual('100px')
		});

	});

});