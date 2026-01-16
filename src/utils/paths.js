/**
 * Utility function to handle asset paths with base URL for GitHub Pages
 * @param {string} path - The asset path (can be absolute like "/resume.pdf" or relative)
 * @returns {string} - The path with base URL prepended
 */
export function getAssetPath(path) {
  if (!path) return '';
  
  // If path is already a full URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Get base URL from Vite (e.g., "/" or "/Portfolio/")
  const baseUrl = import.meta.env.BASE_URL;
  
  // If path already starts with base URL, return as is
  if (path.startsWith(baseUrl)) {
    return path;
  }
  
  // If path starts with /, remove it and combine with base URL
  if (path.startsWith('/')) {
    const cleanPath = path.slice(1);
    // Ensure baseUrl ends with / for proper joining
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${normalizedBase}${cleanPath}`;
  }
  
  // Relative path - combine with base URL
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${path}`;
}
