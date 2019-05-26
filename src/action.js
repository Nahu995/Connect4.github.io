
//al hacer click en la columna deberia caer la ficha
export function dropTile(col) {
  return {
    type: "DROP_TILE",
    payload: col,
  };
} 