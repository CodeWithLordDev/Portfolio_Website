# A Next.js application that keeps all social media and other important links in one place. It allows users to access these links using a username.

### ***Features*** :-
- Display links for social media and personal websites
- Simple, clean design
- Easy to manage and update


## ***Technologies Used*** :-

- Next.js
- React

## Setup for Next.js Link Tree :-
1. Create a Next.js app
   ```bash

   npx create-next-app@latest link-tree

   ```
- Example of managing links:
```bash

  import { useState } from "react";

  const LinkTree = () => {
    const [username, setUsername] = useState("example");

    return (
      <div className="container">
        <h1>{username}'s Link Tree</h1>
        <ul>
          <li>
            <a href="https://twitter.com" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://github.com" target="_blank">GitHub</a>
          </li>
        </ul>
      </div>
    );
  };

  export default LinkTree;

```