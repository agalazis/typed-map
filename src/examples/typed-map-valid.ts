import { Map } from 'immutable';
import * as logger from 'winston';
import { TypedMap } from '../index';
import { Person } from './person';
// you can set an object with extra keys
let a: TypedMap<Person> = Map({
	isBusy: true,
	name: 'John',
	surname: 'Smith',
});
a = a.set('name', 'Andreas');
a = a.set('isBusy', true);
// but still, we cannot do  m.set('a.b', 'value');
logger.log('info', JSON.stringify(a));
