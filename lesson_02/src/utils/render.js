const renderItem = (item) => {
  if (Array.isArray(item)) return item.join(`, `);
  else if (typeof item === `object`)
    return (
      <ul>
        {Object.keys(item).map((key, index) => (
          <li key={index}>{item[key]}</li>
        ))}
      </ul>
    );
  return item;
};

export { renderItem };
