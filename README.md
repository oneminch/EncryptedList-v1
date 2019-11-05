# Encrypted List

### List of end-to-end ecnrypted services

Technology used: HTML, CSS(SCSS), Vanilla JavaScript (Bundled with Webpack)

- [./src/](https://github.com/oneminch/encryptedlist/tree/master/src) - inlcudes JavaScript files
    - data.js - contains the list of products, tags and categories available in JSON format.
      - Products are stored as objects:
      ```
      {
          name: "Firefox Send",
          description: "Share files with end-to-end encryption and a link that automatically expires.",
          url: "https://send.firefox.com",
          img_url: "./assets/img/firefoxsend.svg",
          category: ["All","File Transfer"],
          tags: ["all","free","web-app","open-source"]     
      }
      ```
    - main.js - renders these values to the UI and is responsible for filtering functionality
- [./dist](https://github.com/oneminch/encryptedlist/tree/master/dist) - includes the bundled js file
- [./creator](https://github.com/oneminch/encryptedlist/tree/master/creator) - includes a page with product submission form to generate a valid object.
- [./assets/img/](https://github.com/oneminch/encryptedlist/tree/master/assets/img) - inlcudes icons used for the list of products.
