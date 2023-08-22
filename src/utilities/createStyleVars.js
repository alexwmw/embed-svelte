function createStyleVars(vars) {
  return Object.entries(vars)
    .map(([key, value]) => ` --${key}: ${value}`)
    .join(";");
}

export default createStyleVars;
