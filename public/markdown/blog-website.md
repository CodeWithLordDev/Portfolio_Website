---
description: A blog website created using Next.js, featuring a homepage, blog posts, and a contact page. It also serves as a portfolio website.
---
### Features

- **Blog post listings**
- **Contact form**
- **Portfolio page**

### Technologies Used

- ***Next.js***
- ***React***
- ***Tailwind CSS***

# Setup for Next.js Blog Website

1. Create a Next.js app

```bash

  npx create-next-app@latest blog-website

```

- Set up routing for pages like /, /blog, /contact.
- Basic code example for blog page:

 
```bash

  import Link from "next/link";

  const Blog = () => {
    return (
      <div>
        <h1>My Blog</h1>
        <ul>
          <li>
            <Link href="/blog/first-post">First Post</Link>
          </li>
          <li>
            <Link href="/blog/second-post">Second Post</Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Blog;

```
