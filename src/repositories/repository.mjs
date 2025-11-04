

export const fetchData = async (url) => {
    const resp = await fetch(url);    
    const json = await resp.text();
    return JSON.parse(json);
}