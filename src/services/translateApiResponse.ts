export async function loadTranslation(data: string) {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  try {
    const result = await fetch(
      `https://api.mymemory.translated.net/get?q=${data}&langpair=en-GB|pt-BR`,
      {
        headers: headers,
      }
    )
      .then((res) => res.json())
      .then((data) => data.responseData.translatedText);

    return result;
  } catch (error) {
    console.error(error);
    return data;
  }
}
