var promiseToObservable = function(promise) {
    var observable = new Rx.AsyncSubject();

    promise.then(function(res) {
        observable.onNext(res);
        observable.onCompleted();
    }, function(err) {
        observable.onError(err);
    });

    return observable;
};

Rx.promiseToObservable = promiseToObservable

var watchToObservable = function(scope, expression) {

    var observable = new Rx.Subject();

    scope.$watch(expression, function(value) {
        observable.onNext(value);
    });

    return observable;
}

Rx.watchToObservable = watchToObservable

var functionToObservable = function(scope, name) {

    var observable = new Rx.Subject();

    scope[name] = function(value) {
        observable.onNext(value);
    };

    return observable;
}

Rx.functionToObservable = functionToObservable