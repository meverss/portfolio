import data from "../data/projects.json" assert { type: "json" };

data.projects.forEach((element) => {
  // Check if is even or odd
  if (Math.round(element.index % 2) == 0) {
    let p_image = "project_1.png";
  } else {
    let p_image = "project_3.png";
  }
  my_projects.innerHTML += `<div class="project" id="project${element.index}">
              <div class="thumbnail_container">
                <img
                  class="thumbnail"
                  src="./media/images/${element.thumbnail}"
                  alt="Portfolio Proyect ${element.index}"
                />
              </div>
              <hr />
              <ul class="project_desc">
                <li><spam class="info">Name: </spam>${element.name}</li>
                <li>
                  <spam class="info">Description: </spam>${element.description}
                </li>
              </ul>
              <p>
                <span class="button view_more" id="view_more${element.index}">View more</span>
              </p>
            </div>`;
});

const vmb = document.querySelectorAll(".view_more");

vmb.forEach((btn) => {
  let p = btn.id.split("");
  let id = p[p.length - 1] - 1;
  btn.addEventListener("click", (e) => {
    console.log(data.projects[id].description);
  });
});
