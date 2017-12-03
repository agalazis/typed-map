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
// uncomment the following to make the compiler fail (this time correctly)
// a = a.set('somethingrandom', 'Andreas');
// a = a.set('name', true);
logger.log('info', JSON.stringify(a));
