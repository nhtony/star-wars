export default async function fetchApi(url, options = {}) {
  const apiUrl = "https://swapi.dev/api" + url;

  const response = await fetch(apiUrl, { ...options });

  const body = await response.json();

  const { status } = response;


  if (status != 200) {
    throw new Error("Error msg");
  }

  return { status, data: body.results };
}
