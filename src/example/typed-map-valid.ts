import { Map } from 'immutable';
import { Person } from './person';
import { TypedMap } from '../index';
// you can set an object with extra keys
let a: TypedMap<Person> = Map({
	name: 'John',
	surname: 'Smith',
	isBusy: true,
});
a = a.set('name', 'Andreas');
a = a.set('isBusy',true)
// but still, we cannot do  m.set('a.b', 'value');