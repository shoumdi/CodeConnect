
export const fetchData = async (url) => {
    const resp = await fetch(url);    
    const json = await resp.text();
    return JSON.parse(json);
}

export const getComponentHtml = async (url) => {
    return (await fetch(url)).text();
}


export function isEmptyObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false; 
  }
  return Object.keys(obj).length === 0;
}