export const catsService = {
    GetInfo
}

export function GetInfo(url) {
    const options = {
        method: "GET",
        headers: {'content-type': 'application/json'},
      };
      return fetch(url, options).then(response => response.json()).then(data => data)
}