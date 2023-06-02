interface IApiFetch {
  url: string;
  method: string;
}

const apiFetch = async ({ url, method }: IApiFetch) => {
  try {
    const response = await fetch(url, { method: method })
    const result = await response.json()
    return result;
  } catch (error) {
    console.log(error)
  }
}

export default apiFetch