describe('Url', function() {
    describe('.queryString(name, notDecoded)', function() {
        describe('when name doesn\'t match any parameter', function() {
            it('should return a empty string');
        });

        describe('when notDecoded is false', function() {
            it('should return a decoded string');
        });

        describe('when notDecoded is true', function() {
            it('should return a encoded string');
        });
    });


    describe('.parseQuery(search)', function() {
        describe('when search query is empty', function() {
            it('should return a empty object', function() {
                expect(Url.parseQuery()).to.be.a('object').and.is.empty;
            });
        });
    });


    describe('.stringify(queryObj)', function() {
        it('stringifies a query object', function() {
            expect(Url.stringify({bar: 42, foo: 'bar'})).to.equal('bar=42&foo=bar');
        });

        it('should throw a error if no queryObj is passed', function() {
            expect(Url.stringify).to.throw(Error, 'Query object should be an object.');
        });
    });


    describe('.updateSearchParam(param, value)', function() {
        describe('when value is undefined', function() {
            it('should delete the parameter');
        });

        describe('when param already exists', function() {
            it('should update the parameter');
        });

        describe('when param doesn\'t exists and a value is passed', function() {
            it('should add the parameter with passed value');
        });
    });


    describe('.getLocation()', function() {
        it('should return the page url without domain');
    });
});
