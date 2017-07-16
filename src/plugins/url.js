import extend from "just-extend";
import linkify from "html-linkify";

export default opts => {
  const defaultOptions = {
    attributes: {},
    escape: true
  };

  const { attributes, escape } = extend({}, defaultOptions, opts);
  return options =>
    Promise.resolve(
      extend({}, options, {
        input: linkify(options.input, { attributes, escape })
      })
    );
};