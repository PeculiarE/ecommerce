module.exports = {
  insertTodo: `
    insert into todo (
        id,
        title,
        user_id
    ) values ($1, $2, $3)
    returning *;
    `,
  fetchAllTodos: 'select * from todo',
  fetchAllTodosForSingleUser: `
    select * from todo
    where user_id = $1;`,
  fetchSingleTodoById: `
    select * from todo
    where id = $1;`,
  updateTodoTitle: `
    update todo
    set title = $1, updated_at = now()
    where id = $2
    returning *;
    `,
  deleteTodo: `
    delete from todo
    where id = $1;
    `,
  updateTodoStatus: `
    update todo
    set is_complete = $2, updated_at = now()
    where id = $1
    returning *;
    `,
};
