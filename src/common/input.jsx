function Input({ id, label }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input className="form-control" {...rest} />
    </div>
  );
}

export default Input;
