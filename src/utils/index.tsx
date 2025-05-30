export const formatRating = (rating: number) => {
  return rating ? rating.toFixed(1) : "N/A"
}

export const formatDate = (dateString: string) => {
  if (!dateString) return "TBA"
  const date = new Date(dateString)
  return date.toLocaleDateString("pt-BR")
}
