/*
Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

get(object, path, [defaultValue]);
object: The object to query.
path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
defaultValue: Optional parameter. The value returned if the resolved value is undefined.
*/

const get = (object, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');

  return pathArray.reduce((acc, key) => {
    if (acc !== undefined && acc[key] !== undefined) {
      return acc[key];
    }

    return defaultValue;
  }, object);
};

export default get;