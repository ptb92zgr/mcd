function Searchbar() {
  return (
    <div className="d-flex">
      <div className="form-group col">
        <input className="form-control" type="text" placeholder="Szukaj" />
      </div>
      <div className="col">
        <button className="btn btn-primary ms-2">Szukaj</button>
      </div>
    </div>
  );
}

export default Searchbar;
