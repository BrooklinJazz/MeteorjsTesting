import { Meteor } from 'meteor/meteor';
import Todos from '/imports/api/todos';


function insertTodo(title, completed = false) {
  Todos.insert({ title, completed: completed, createdAt: new Date() });
}

Meteor.startup(() => {

  if (Todos.find().count() === 0) {
    insertTodo(
      'Example Todo',
    );
    insertTodo(
      'Example Todo Completed',
      true
    );
  }
});
