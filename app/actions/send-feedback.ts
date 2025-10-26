"use server"

export async function sendFeedback(data: { name: string; email: string; message: string }) {
  try {
    // This doesn't require any API keys and works immediately
    const subject = encodeURIComponent(`Zpětná vazba od ${data.name}`)
    const body = encodeURIComponent(`Jméno: ${data.name}\nEmail: ${data.email}\n\nZpráva:\n${data.message}`)

    // Return success - the actual email sending happens client-side via mailto
    return {
      success: true,
      mailtoLink: `mailto:tomasslech@seznam.cz?subject=${subject}&body=${body}`,
    }
  } catch (error) {
    console.error("Error preparing feedback:", error)
    return {
      success: false,
      error: "Nepodařilo se připravit zprávu",
    }
  }
}
