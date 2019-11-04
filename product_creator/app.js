// List of available tags
const tag_list = [
   "all", "beta", "free", "premium", "freemium", "proprietary", "open-source", "decentralized", "cross-platform" //, "", "", "", "", ""
];
// List of available categories
const catergory_list = [
   "All", "Email", "Notes", "Storage", "Productivity", "Messaging", "Collaboration"  
];

const renderOptions = (dropdown_type, dropdown_type_parent) => {
   let dropdown_markup = ``;
   for (let i = 0; i < dropdown_type.length; i++) {
      let val = dropdown_type[i];
      dropdown_markup += `<option value = "${val}" ${val.toLowerCase() == "all" ? 'selected' : ''}>${val}</option>`;
   }
   dropdown_type_parent.insertAdjacentHTML("afterbegin", dropdown_markup);
};

// To generate an encrypted product 
// object for list from input
class EncryptedProduct {
   constructor(n,d,u,i,c,t) {
      this.name = n;
      this.desc = d;
      this.url = u;
      this.img_url = i;
      this.category = c;
      this.tags = t;
   }
}