function Tag({ data }) {
  return (
    <span className="tags-entities" style={{ "backgroundColor": data.color_hex_code }}>
      {data.entity_label}
    </span >
  );
}

export default Tag;