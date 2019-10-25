const all_exps = document.querySelectorAll(".experience__list__item");  // List of all experiences
const current_exp = document.querySelector(".experience__current");     // My current up to date experience
const footer_text = document.querySelector(".footer__text");            // Footer text with copyright content

const data_json = {
   // Experience data list
   // Each data: id, name, date, description & link(?)
   exp_data: [
      {
         id: 1,
         name: "School 1",
         date: ["Jan '16","Dec '19"],
         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum autem ab dolorem excepturi beatae fugit nulla deleniti voluptas reprehenderit temporibus consequuntur animi vero a ullam, nesciunt quam maiores minima et?",
         link: ["DDG", "https://ddg.gg"]
      },
      {
         id: 2,
         name: "School 2",
         date: ["Jan '16","Dec '13"],
         desc: "Also Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum autem ab dolorem excepturi beatae fugit nulla deleniti voluptas reprehenderit temporibus consequuntur animi vero a ullam, nesciunt quam maiores minima et?",
         link: ["DDG", "https://ddg.gg"]
      },
      {
         id: 3, 
         name: "School 3",
         date: ["Jan '16","Dec '12"],
         desc: "Also also Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum autem ab dolorem excepturi beatae fugit nulla deleniti voluptas reprehenderit temporibus consequuntur animi vero a ullam, nesciunt quam maiores minima et?", 
         link: ["DDG", "https://ddg.gg"]
      },
      {
         id: 4,
         name: "School 4",
         date: ["Jan '16","Dec '29"],
         desc: "Also also also Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum autem ab dolorem excepturi beatae fugit nulla deleniti voluptas reprehenderit temporibus consequuntur animi vero a ullam, nesciunt quam maiores minima et?",
         link: ["DDG", "https://ddg.gg"]
      },
   ],
   // Projects data list
   proj_data: []
};

// Renders text with current year to footer
const footerText = () => {
   let d = new Date();

   let markup = `
      Designed && Coded by Me
      <br>
      &copy; ${d.getFullYear()}
   `;
   footer_text.innerHTML = markup;
};

// Returns experience data markup: text, description + link(if applicable)
const loadExpData = (id) => {
   let markup = ``;
   const exp_data_list = data_json.exp_data;

   exp_data_list.forEach(item => {
      // if id matches, fill basic data
      if (item.id === id) {
         markup = `
            <h2 class="experience__current__title">${item.name}</h2>
            <h3 class="experience__current__date">(${item.date[0]} - ${item.date[1]})</h3>
            <div class="experience__current__desc">
               ${item.desc}
            </div>
         `;

         // Hides button if there's no link
         if (item.link.length === 0) {
            markup += `<a href="#" class="experience__current__link experience__current__link--inexistent">Inexistent</a>`;
         } else {
            markup += `<a href="${item.link[1]}" target="_blank" class="experience__current__link">${item.link[0]}</a>`;
         }
      }
   });
   return markup;
};

// Renders experience from given id to container
const renderExp = (id, container) => {
   let curr_exp_markup = loadExpData(id);
   container.innerHTML = curr_exp_markup;
};

// Load footer text & renders current experience on load
window.addEventListener('load', () => {
   // Render footer text
   footerText();

   // Highlights current experience indicator circle
   const curr_exp_indicator = all_exps[all_exps.length-1];
   curr_exp_indicator.classList.add("experience__list__item--active");
   
   // Current experience from json file
   const exp_obj_list = data_json.exp_data;
   const curr_exp_obj = exp_obj_list[exp_obj_list.length-1];

   renderExp(curr_exp_obj.id, current_exp);
});

// TODO
// - Fill projects on load with default values

// Loads projects to UI
const loadProjectData = (id) => {

};

// Switch to different experiences with timeline
all_exps.forEach(el => el.addEventListener('click', (e) => {
   let active_exp = document.querySelector(".experience__list__item--active"); // Currently active experience
   const clicked_exp = e.target.closest(".experience__list__item");
   const exp_id = parseInt(clicked_exp.dataset.exp_id);
   
   if (!clicked_exp.classList.contains("experience__list__item--active")) {
      // Adds active class to clicked experience circle in timeline
      active_exp.classList.remove("experience__list__item--active");
      clicked_exp.classList.add("experience__list__item--active");
      
      // Loads experience data correponding clicked circle
      const exp_container = clicked_exp.parentElement.parentElement.previousElementSibling;
      renderExp(exp_id, exp_container);
   }
}));

