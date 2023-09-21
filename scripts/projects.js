import data from "../data/projects.json" assert { type: "json" };

console.log(data.findIndex((std) => std.index == 357));

data.forEach((project) => {
  console.log(project);
});

console.table(data);

data.forEach((project) => {
  // Check if is even or odd
  if (Math.round(project.index % 2) == 0) {
    let p_image = "project_1.png";
  } else {
    let p_image = "project_3.png";
  }
  my_projects.innerHTML += `<div class="project" id="project${project.index}">
              <div class="thumbnail_container">
                <img
                  class="thumbnail"
                  src="./media/images/${project.thumbnail}"
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
  btn.addEventListener("click", (e) => {
    console.log(data[data.findIndex((std) => std.index == id)].description);
  });
});
