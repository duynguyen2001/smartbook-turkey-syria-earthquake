const fs = require('fs')
const path = require('path')

// Read all markdown files from public/pages directory
const pagesDir = path.join(__dirname, '../public/pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.md'))

// Generate the JavaScript array
const filesList = files.map(file => `  '${file}'`).join(',\n')

const serviceContent = `import axios from 'axios'

// List of all markdown files in the public/pages directory
const PAGE_FILES = [
${filesList}
]

export class PagesService {
  static formatTitle(filename) {
    // Remove .md extension
    let title = filename.replace('.md', '')
    
    // Extract question part after .json_
    const parts = title.split('.json_')
    if (parts.length > 1) {
      title = parts[1]
    }
    
    // Replace underscores with spaces and decode
    title = decodeURIComponent(title.replace(/_/g, ' '))
    
    // Clean up
    title = title.replace(/\\?/g, '')
    
    return title
  }

  static async getAllPages() {
    return PAGE_FILES.map(filename => ({
      filename,
      title: this.formatTitle(filename),
      category: this.getCategory(filename)
    }))
  }

  static getCategory(filename) {
    if (filename.includes('gpt4_cite_feb_')) return 'Turkey-Syria Earthquake (Feb)'
    if (filename.includes('withcite_dec_')) return 'Ukraine Analysis (Dec)'
    if (filename.includes('withcite_jan_')) return 'Ukraine Analysis (Jan)'
    if (filename.includes('withcite_nov_')) return 'Ukraine Analysis (Nov)'
    if (filename.includes('withcite_sept_')) return 'Ukraine Analysis (Sept)'
    if (filename.includes('withcite_oct_')) return 'Ukraine Analysis (Oct)'
    return 'General Analysis'
  }

  static async loadPageContent(filename) {
    try {
      const response = await axios.get(\`/pages/\${filename}\`)
      return response.data
    } catch (error) {
      console.error('Error loading page content:', error)
      throw new Error('Failed to load document content')
    }
  }

  static markdownToHtml(markdown) {
    // Basic markdown to HTML conversion
    // For production, consider using a proper markdown parser like marked.js
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\\* (.*$)/gim, '<li>$1</li>')
      .replace(/^\\- (.*$)/gim, '<li>$1</li>')
      .replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>')
      .replace(/\\*(.*?)\\*/gim, '<em>$1</em>')
      .replace(/\`(.*?)\`/gim, '<code>$1</code>')
      .replace(/\\n\\n/gim, '</p><p>')
      .replace(/\\n/gim, '<br>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>')
      .replace(/<p><\\/p>/gim, '')
      .replace(/<p>(<h[1-6]>)/gim, '$1')
      .replace(/(<\\/h[1-6]>)<\\/p>/gim, '$1')
      .replace(/<p>(<li>)/gim, '<ul>$1')
      .replace(/(<\\/li>)<\\/p>/gim, '$1</ul>')
  }

  static searchPages(pages, query) {
    if (!query.trim()) return pages
    
    const searchTerm = query.toLowerCase()
    return pages.filter(page => 
      page.title.toLowerCase().includes(searchTerm) ||
      page.category.toLowerCase().includes(searchTerm)
    )
  }

  static getPagesByCategory(pages) {
    const categories = {}
    pages.forEach(page => {
      if (!categories[page.category]) {
        categories[page.category] = []
      }
      categories[page.category].push(page)
    })
    return categories
  }
}

export default PagesService`

// Write the updated service file
const servicePath = path.join(__dirname, '../src/services/pagesService.js')
fs.writeFileSync(servicePath, serviceContent)

console.log(`Generated pagesService.js with ${files.length} files`)
console.log('Categories found:')
const categories = new Set()
files.forEach(file => {
  if (file.includes('gpt4_cite_feb_')) categories.add('Turkey-Syria Earthquake (Feb)')
  else if (file.includes('withcite_dec_')) categories.add('Ukraine Analysis (Dec)')
  else if (file.includes('withcite_jan_')) categories.add('Ukraine Analysis (Jan)')
  else if (file.includes('withcite_nov_')) categories.add('Ukraine Analysis (Nov)')
  else if (file.includes('withcite_sept_')) categories.add('Ukraine Analysis (Sept)')
  else if (file.includes('withcite_oct_')) categories.add('Ukraine Analysis (Oct)')
  else categories.add('General Analysis')
})
categories.forEach(cat => console.log(`- ${cat}`))
