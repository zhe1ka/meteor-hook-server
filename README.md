# meteor-hook-server

You can combine some meteor methods in a group/groups to execute some hook before action each of them.
For example, we can combine methods which are executing when user is logged.

# Installation
```
$ npm install --save meteor-native-mongo
```

# Usage
```
import { groupMethods as youOwnName} from 'meteor-hook-server';

const hook = function() {
    return this.userId;
};

youOwnName(hook, {
	testMethods() {
		do here what you need
	}
});
```

Be attentive: if you want to keep the context in "hook" you need to use function() {}
instead of an arrow function ( () => {} ).