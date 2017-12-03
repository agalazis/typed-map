import { Map } from 'immutable';
import {Person} from './person';
import { TypedMap } from '../index';
// you can set an object with extra keys
let a: TypedMap<Person> = Map({
	name: 'John',
	surname: 'Smith',
	isBusy: true,
});
a = a.set('name', 'Andreas');
// uncomment the following to make the compiler fail (this time correctly)
// a = a.set('somethingrandom', 'Andreas');
// a = a.set('name', true);
console.log(a)
