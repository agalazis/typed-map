import { Map } from 'immutable';
import * as logger from 'winston';
import { Person } from './person';

let a = Map<keyof Person, any>({
	isBusy: true,
	somethingElse: 't',
	surname: 'Smith',
});
// This following compiles but as you can see it's error prone
a = a.set('name', true);
a = a.set('isBusy', 'John');
logger.log('info', `The names is ${a.get('name')}. Now you get the issue..`);
