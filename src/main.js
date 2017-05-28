var groupMethods = function(hook, methods) {
    for (var method in methods) {
        if (methods.hasOwnProperty(method)) {
            var oldFunc = methods[method];

            methods[method] = function() {
                var params = Array.prototype.slice.call(arguments),
                    res = hook.call(this);

                if (res) {
                    params.push(res);

                    oldFunc.apply(this, params);
                }
            };
        }
    }

    Meteor.methods(methods);
};

var checkAuthUser = function() {
    return this.userId;
};

var authMethods = function(methods) {
    groupMethods(checkAuthUser, methods);
};

module.exports = {
    groupMethods: groupMethods,
    authMethods: authMethods
};