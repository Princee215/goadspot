const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export async function sendEnquiry(formElement) {
  if (!ACCESS_KEY) {
    return { success: false }
  }

  const payload = new FormData(formElement)
  payload.append('access_key', ACCESS_KEY)
  payload.append('subject', 'New enquiry from GoAdSpot website')

  const response = await fetch(ENDPOINT, { method: 'POST', body: payload })
  return response.json()
}
