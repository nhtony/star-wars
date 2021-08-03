export default async function fetchApi(url, options = {}) {
  const apiUrl = "https://swapi.dev/api/" + url;

  const response = await fetch(apiUrl, { ...options });

  const body = await response.json();

  const { status } = response;

  console.log("body", body);

  if (status != 200) {
  }
}
