function AddToDo(){
  return(
    <div class="container text-center">
  
    <div class="row kg-row">
      <div class="col-6">
        <input type='text' placeholder='Enter Todo Here'></input>
      </div>
      <div class="col-4">
        <input type='date'></input>
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-success kg-button">Success</button>
      </div>
    </div>
    </div>
  




  );
}
export default AddToDo;