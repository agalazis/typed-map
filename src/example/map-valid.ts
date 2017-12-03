import { Map } from 'immutable';

class Person {
	public name: string;
	public surname: string;
	public isBusy: true;
}
const a = Map<keyof Person, any>({
	isBusy: true,
	surname: 'Smith',
	somethingElse: 't',
});
// This following compiles but as you can see it's error prone
a.set('name', true);
a.set('isBusy', 'John');
console.log(`The names is ${a.get('name')}. Now you get the issue..`);
