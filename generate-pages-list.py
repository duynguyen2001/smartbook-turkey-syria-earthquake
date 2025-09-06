#!/usr/bin/env python3
import os
import json

def generate_pages_list():
    pages_dir = "pages-site/pages"
    pages = []
    
    if os.path.exists(pages_dir):
        for filename in sorted(os.listdir(pages_dir)):
            if filename.endswith('.md'):
                pages.append({
                    "filename": filename,
                    "path": f"pages/{filename}"
                })
    
    # Read the current HTML file
    html_file = "pages-site/index.html"
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Replace the empty pages array with the actual data
    pages_js = json.dumps(pages, indent=12)
    html_content = html_content.replace(
        "const pages = [\n            // This will be filled by our generation script\n        ];",
        f"const pages = {pages_js};"
    )
    
    # Write the updated HTML file
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"Generated pages list with {len(pages)} pages")
    return len(pages)

if __name__ == "__main__":
    count = generate_pages_list()
    print(f"✅ Successfully generated index for {count} analysis pages")
