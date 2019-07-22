/* eslint-disable import/prefer-default-export */
export const flattenMessages = (nestedMessages, prefix = '') => {
  // if (nestedMessages === null) {
  //   return {};
  // }
  console.log(nestedMessages, 'message');
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};
