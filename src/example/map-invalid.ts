import { Map } from 'immutable';
import {Person} from './person';

// you can set an object with extra keys
let a = Map<keyof Person, string>({
	name: 'John',
	surname: 'Smith',
});
// but you cannot get any keys appart from the ones set in person (this won't pass compile time checks)
// un comment the following 2 lines  and try to compile the code
// console.log(a.get('random'));
// a = a.set('somethingElse', 'trolled');
console.log(a)
