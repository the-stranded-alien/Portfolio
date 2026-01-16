/**
 * Utility function to handle asset paths with base URL for GitHub Pages
 * @param {string} path - The asset path (can be absolute like "/resume.pdf" or relative)
 * @returns {string} - The path with base URL prepended
 */
export function getAssetPath(path) {
  if (!path) return '';
  
  // Get base URL from Vite (e.g., "/Portfolio/")
  const baseUrl = import.meta.env.BASE_URL;
  
  // If path is already a full URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine base URL with clean path
  return `${baseUrl}${cleanPath}`;
}
