function ToDoItem() {

  let toDoName='Buy Milk';
  let toDoDate='04/10/2023';
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
