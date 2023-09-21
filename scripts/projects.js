import data from "../data/projects.json" assert { type: "json" };
// import lang from ".../data/languages.json" assert { type: "json" };

data.forEach((project) => {
  // Check if is even or odd
  // let my_image = "";

  // if (Math.round(project.index % 2) == 0) {
  //   const my_image = "project_1.png";
  // } else {
  //   const my_image = "project_3.png";
  // };



  my_projects.innerHTML += `<div class="project" id="project${project.index}">
              <div class="thumbnail_container">
                <img
                  class="thumbnail"
                  src="https://meverss.github.io/portfolio/media/images/${project.thumbnail}"
                  alt="Portfolio Proyect ${project.index}"
                />
              </div>
              <hr />
              <ul class="project_desc">
                <li><spam class="info">Name: </spam>${project.name}</li>
                <li>
                  <spam class="info">Description: </spam>${project.description}
                </li>
              </ul>
              <p>
                <span class="button view_more" id="view_more${project.index}">View more</span>
              </p>
            </div>`;
});

// VIEW MORE INFO

const vmb = document.querySelectorAll(".view_more");

vmb.forEach((btn) => {
  let id = btn.id.split("view_more")[1];
  let short_desc = data[data.findIndex((std) => std.index == id)].description;
  let full_desc = data[data.findIndex((std) => std.index == id)].viewmore;
  let thumb = data[data.findIndex((std) => std.index == id)].thumbnail;
  let scrsht = data[data.findIndex((std) => std.index == id)].screenshot;

  btn.addEventListener("click", (e) => {
    viewmore_container.style['display'] = 'flex';
    viewmore_container.style["opacity"] = "1";
    document.body.style.overflow = "hidden";
    viewmore_pict.innerHTML = `<img src=".https://meverss.github.io/portfolio/media/images/sample.png" alt="Proyecto web">`;
  });
  
});


