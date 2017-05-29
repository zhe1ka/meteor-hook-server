# meteor-hook-server

You can combine some meteor methods in a group/groups to execute some hook before action each of them.
For example, we can combine methods which are executing when user is logged.

# Installation

```
$ meteor npm install --save meteor-hook-server
```

# Usage

```
import { groupMethods as yourOwnName } from 'meteor-hook-server';

const hook = function() {
    return this.userId;
};

youOwnName(hook, {
	testMethod() {
		// call this method on client by Meteor.call('testMethod')
		// do here what you need
	}
});
```
testMethods method was executed when your hook returns a result equally "true" (if (your result) { // method is executed }).
In another way your method will be prevented.
In our example when user is logged - 'this.userId' returns a user id (it's true) and when the user isn't logged - it's
null - false.

# Data from a hook to a method.

If you need to pass some data from a hook to "method", you can get it from the last param in your method.

```
import { groupMethods as yourOwnName } from 'meteor-hook-server';

const hook = function() {
    return this.userId;
};

youOwnName(hook, {
	testMethods(some, other, params, id) {
		console.log(id); // this.userId
	}
});
```

Be attentive: if you want to keep the context in "hook" you need to use function() {}
instead of an arrow function ( () => {} ).

# Default group:
- authMethods: all methods are executed only when user is logged.
```
import { authMethods } from 'meteor-hook-server';

authMethods({
	testMethods() {
		// do here what you need
	}
});
```

# Next:
- supporting publications