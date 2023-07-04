
const saveStorage = (key, value) => {
   try {
    const statejSON = JSON.stringify(value);
    localStorage.setItem(key, statejSON);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

const loadStorage = key => {
  try {
    const statejSON = localStorage.getItem(key);
    return statejSON === null ? undefined : JSON.parse(statejSON);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const removeStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { saveStorage ,loadStorage, removeStorage };