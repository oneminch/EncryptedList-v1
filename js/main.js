const disclaimer_btn = document.querySelector(".disclaimer-btn");
const disclaimer_text = document.querySelector(".disclaimer");

const list_type = document.querySelector(".list__type");
const list_container = document.querySelector(".list__container");

const tag_dropdown = document.querySelector(".tags__list");
const category_dropdown = document.querySelector(".category__list");   
const dropdown_lists = document.querySelectorAll(".dropdown__list");

const empty_list_img = "./img/404.png";

// List of all products
const data_json = [
   {
      name: "Firefox Send",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://send.firefox.com",
      img_url: "./img/firefox.svg",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Signal",
      description: "messaging",
      url: "https://signal.org",
      img_url: "./img/signal.png",
      category: [
         "All", "Messaging"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "EteSync",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://etesync.com",
      img_url: "./img/etesync.png",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "SpiderOak",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://send.firefox.com",
      img_url: "./img/spideroak.svg",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Skype",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://www.skype.com/en/",
      img_url: "./img/skype.svg",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Wickr",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://wickr.com/",
      img_url: "./img/wickr.png",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Wire",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://wire.com/en/",
      img_url: "./img/wire.png",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Telegram",
      description: "messaging",
      url: "https://telegram.org",
      img_url: "./img/telegram.svg",
      category: [
         "All", "Messaging"
      ],
      tags: [
         "all", "free"
      ]      
   },
   {
      name: "WhatsApp",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://www.whatsapp.com/",
      img_url: "./img/whatsapp.svg",
      category: [
         "All", "Messaging"
      ],
      tags: [
         "all", "free"
      ]      
   },
   {
      name: "Threema",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://threema.ch/",
      img_url: "./img/threema.svg",
      category: [
         "All", "Messaging"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "CryptPad",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://cryptpad.fr",
      img_url: "./img/cryptpad.svg",
      category: [
         "All", "File Transfer"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Protonmail",
      description: "Send e2ee emails",
      url: "https://protonmail.com",
      img_url: "./img/protonmail.svg",
      category: [
         "All", "Email"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Tutanota",
      description: "Send e2ee emails",
      url: "https://Tutanota.com",
      img_url: "./img/tutanota.svg",
      category: [
         "All", "Email"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Mailfence",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://mailfence.com",
      img_url: "./img/mailfence.png",
      category: [
         "All", "Email"
      ],
      tags: [
         "all", "open-source", "free"
      ]      
   },
   {
      name: "Mega",
      description: "Store files with end-to-end encryption.",
      url: "https://mega.nz",
      img_url: "./img/mega.svg",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Tresorit",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://tresorit.com",
      img_url: "./img/tresorit.svg",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "pDrive",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://pdrive.co/",
      img_url: "./img/pdrive.png",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Recall Photos",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://app.recall.photos/",
      img_url: "./img/recallphotos.svg",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Photo Vault",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://photovault.online/",
      img_url: "./img/photovault.png",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Encrypt My Photos",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://encryptmyphotos.com/",
      img_url: "./img/encryptmyphotos.png",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Firefox Notes",
      description: "Share files with end-to-end encryption and a link that automatically expires.",
      url: "https://addons.mozilla.org/en-US/firefox/addon/notes-by-firefox/",
      img_url: "./img/firefoxnotes.png",
      category: [
         "All", "File Transfer", "Storage"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },
   {
      name: "Standard Notes",
      description: "Take encrypted notes.",
      url: "https://app.standardnotes.org",
      img_url: "./img/snotes.svg",
      category: [
         "All", "Productivity", "Notes"
      ],
      tags: [
         "all", "open-source", "freemium"
      ]      
   },

];

// List of available tags
const tag_names = [
   "all", "free", "premium", "freemium", "blockchain", "open-source", "cross-platform" //, "", "", "", "", ""
];
// List of available categories
const catergory_names = [
   "All", "Email", "Notes", "Storage", "Productivity", "Messaging", "Collaboration"  
];


// Load up dropdown values from corresponding arrays
window.addEventListener("load", () => {
   dropdown_lists.forEach(dropdown => {
      if (dropdown.classList.contains("tags__list")) {
         renderOptions(tag_names, tag_dropdown);
      } else if (dropdown.classList.contains("category__list")) {
         renderOptions(catergory_names, category_dropdown);
      }
   });
   // Render from current value (onload)
   renderFromValue(data_json, selectedValues()[0], selectedValues()[1]);
});

const renderOptions = (dropdown_type, dropdown_type_parent) => {
   let dropdown_markup = ``;
   for (let i = 0; i < dropdown_type.length; i++) {
      let val = dropdown_type[i];
      dropdown_markup += `<option value = "${val}" ${val.toLowerCase() == "all" ? 'selected' : ''}>${val}</option>`;
   }
   dropdown_type_parent.insertAdjacentHTML("afterbegin", dropdown_markup);
};

// Renders values from array to list container
const renderItems = (items_arr) => {
   let markup = ``;
   for (let i = 0; i < items_arr.length; i++) {
      markup += `
         <a target="_blank" href="${items_arr[i].url}" class="list__item">
            <div class="icon">
               <img src="${items_arr[i].img_url}" alt="${items_arr[i].name} logo">
            </div>
            <div class="info">
               <div class="name">${items_arr[i].name}</div>
               <div class="desc">${items_arr[i].description}</div>
               <div class="tags">`
                  for (let j = 1; j < items_arr[i].tags.length; j++) {
                     markup += `<span>#${items_arr[i].tags[j]}</span>`;
                  }
      markup += `</div></div></a>`;
   }
   list_container.innerHTML = "";
   list_container.innerHTML = markup;
   list_container.insertAdjacentHTML("beforeend", "<hr class='list__end'>");
};

// Renders items from passed array list 
// with matching category and tag values
const renderFromValue = (items_list, cat_val, tag_val) => {
   let filterArr = [];

   // Find items with matching cat_val & tag_val
   for (let i = 0; i < items_list.length; i++) {
      if (
         items_list[i].category.includes(cat_val) && 
         items_list[i].tags.includes(tag_val) 
      ) {
         filterArr.push(items_list[i]);
      }
   }
   
   // Render 
   // 1) results if items match
   // 2) 404 output if no match
   renderItems(filterArr);
   if (filterArr.length > 0) {
      list_type.innerHTML = `${cat_val} (${tag_val})`;
   } else {
      const content_empty = `
         <h2>No products with that specification.</h2>
         <img src=${empty_list_img} alt="Empty List">
      `; 
      list_type.innerHTML =  "";
      list_container.insertAdjacentHTML('afterbegin',content_empty);
   }
};

// Returns current category and tag values
const selectedValues = () => {
   // Get current category value
   let category_index = category_dropdown.selectedIndex;
   let category_value = category_dropdown.options[category_index].value;

   // Get current tag value
   let tag_index = tag_dropdown.selectedIndex;
   let tag_value = tag_dropdown.options[tag_index].value;

   return [category_value, tag_value];
};

// Render from changed dropdown values
dropdown_lists.forEach(dropdown => dropdown.addEventListener("change", () => {
   renderFromValue(data_json, selectedValues()[0], selectedValues()[1]);

   if (disclaimer_text.classList.contains("show")) {
      disclaimer_text.classList.remove("show");
      disclaimer_text.classList.add("hide");   
   }
}));

// Toggle disclaimer text
const toggleDisclaimer = () => {
   if (disclaimer_text.classList.contains("show")) {
      disclaimer_text.classList.remove("show");
      disclaimer_text.classList.add("hide");   
   } else {
      disclaimer_text.classList.remove("hide");
      disclaimer_text.classList.add("show");
   }
};
disclaimer_btn.addEventListener("click", toggleDisclaimer);