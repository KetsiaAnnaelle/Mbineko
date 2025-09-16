declare global {
  interface Window {
    Swal?: any
  }
}

export function alertSuccess(title: string, text?: string) {
  if (window.Swal) return window.Swal.fire({ icon: 'success', title, text, confirmButtonColor: '#228B22' })
  // fallback
  alert(`${title}${text ? `\n${text}` : ''}`)
}

export function alertError(title: string, text?: string) {
  if (window.Swal) return window.Swal.fire({ icon: 'error', title, text })
  alert(`${title}${text ? `\n${text}` : ''}`)
}

export function alertInfo(title: string, text?: string) {
  if (window.Swal) return window.Swal.fire({ icon: 'info', title, text })
  alert(`${title}${text ? `\n${text}` : ''}`)
}
