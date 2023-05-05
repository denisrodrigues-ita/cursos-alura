const HttpClient = async (fetchUrl, fetchOptions) => {
  try {
    const response = await fetch(fetchUrl, {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        "Content-Type": "application/json",
      },
      body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    });

    const data = await response.json();
    return {
      ok: response.ok,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export default HttpClient;
