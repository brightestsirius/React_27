const renderValue = (value) => {
  if (Array.isArray(value)) return value.join(`, `);
  else if (typeof value === `object`)
    return (
      <ul>
        {Object.keys(value).map((key, index) => (
          <li key={index}>{value[key]}</li>
        ))}
      </ul>
    );
  else return value;
};

export { renderValue };
