export const getResponseStatus = (response, type) => {
  type = parseInt(type/100);
  let regex = new RegExp(`^${type}\\d{2}$`);
  return !!regex.exec(response);
};


/**
 * @description Convert to slug
 * @todo Remove special characters
 * @param text
 * @returns {string}
 */
export const getSlug = (text="") => {
  try{
    text = text.toLowerCase();
    text = text.replace(/\s/g, "-");
  }catch (e) {
    // handle error
  }
  return text;

};