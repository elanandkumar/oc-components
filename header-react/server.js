export const data = (context, callback) => {
  const { name, bgcolor } = context.params;
  return callback(null, { name, bgcolor });
};
