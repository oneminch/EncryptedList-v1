# Encrypted List

### List of end-to-end ecnrypted services

Technology used: HTML, CSS(SCSS), Vanilla JavaScript (Bundled with Webpack)

- [./src/](https://github.com/oneminch/encryptedlist/tree/master/src) - inlcudes JavaScript files
    - [data.js](https://github.com/oneminch/encryptedlist/tree/master/src/data.js) - contains the list of products, tags and categories available in JSON format.
      - Products are stored as objects:
      ```
      {
          name: "Product Name",
          description: "Product Description",
          url: "Product Homepage",
          img_url: "./assets/img/{product-name-in-lowercase}.svg",
          category: ["All","Category Types (e.g. Email)","..."],
          tags: ["all","Tag Types (e.g. open-source)","..."]     
      }
      ```
    - [main.js](https://github.com/oneminch/encryptedlist/tree/master/src/data.js) - renders these values to the UI and is responsible for filtering functionality
- [./dist](https://github.com/oneminch/encryptedlist/tree/master/dist) - includes the bundled js file
- [./assets/img/](https://github.com/oneminch/encryptedlist/tree/master/assets/img) - inlcudes icons used for the list of products.
- [./creator](https://github.com/oneminch/encryptedlist/tree/master/creator) - includes a page with product submission [form](https://oneminch.github.io/encryptedlist/creator/index.html) to generate a valid object.
### Submit a product
I haven't set up a proper way to submit product information yet. So use this,
1. Add necessary data to  [form](https://oneminch.github.io/encryptedlist/creator/index.html) (name, description, url, ...) and hit submit.
2. An object is generated at the bottom of the page; Continue submiting other products (if any) and all the objects generated will be listed at the bottom of the page.
3. Copy + Paste the generated object(s) to `product_list` array in [data.js](https://github.com/oneminch/encryptedlist/tree/master/src/data.js)
4. Submit pull request
