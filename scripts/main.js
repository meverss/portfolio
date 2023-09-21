// SHOW WEBSITE AFTER LOADED

function show_page() {
  page_content.style.opacity = "1";
  page_loader.style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("btn_send").disabled = true;
}

// SHOW/HIDE ALTERANTIVE MENU

m_menu_open_btn.addEventListener("click", showmenu);
m_menu_close_btn.addEventListener("click", hidemenu);

function showmenu() {
  m_menu_open_btn.style = "display: none; right: 0;";
  m_menu_close_btn.style = "display: flex; right: 0;";
  m_menu.style["transform"] = "translate(0%)";
}

function hidemenu() {
  m_menu_close_btn.style = "display: none; right: 0;";
  m_menu_open_btn.style = "display: flex; right: 0;";
  m_menu.style["transform"] = "translate(100%)";
}

const m_menu_items = document.querySelectorAll(".m_menu_item");

m_menu_items.forEach((menu) => {
  menu.addEventListener("click", function () {
    m_menu.style["transform"] = "translate(100%)";
    hidemenu();
  });
});

// SACROLL TO SECTIONS

function scroll_to_section(section) {
  var element = document.getElementById(section);
  var position = element.offsetTop;
  window.scrollTo(0, position - 70);
}

function scroll_to_section_m(section) {
  var element = document.getElementById(section);
  var position = element.offsetTop;
  if (window.innerWidth <= 500) {
    switch (section) {
      case "s_m_about":
        window.scrollTo(0, position - 50);
        break;
      case "s_m_services":
        window.scrollTo(0, position - 10);
        break;
      case "s_m_projects":
        window.scrollTo(0, position);
        break;
      default:
        window.scrollTo(0, position - 80);
        break;
    }
  }

  var menu = document.querySelectorAll(".menu_item");
  var alt_menu = document.querySelectorAll(".m_menu_item");

  menu.forEach((obj) => {
    if (obj.classList[1] != "m_menu_item") {
      if (obj.id != "") {
        const sec = obj.id;
        obj.addEventListener("click", function () {
          scroll_to_section("s_" + sec);
        });
      }
    }
  });

  alt_menu.forEach((obj1) => {
    console.log(obj1);
    if (obj1 != "s_m_menu_open_btn") {
      obj1.addEventListener("click", function () {
        scroll_to_section_m("s_" + obj1.id);
      });
    }
  });
}

//COPYRIGHT

const fecha = new Date();
const copyright = "Copyright ©" + fecha.getFullYear() + " KiniunTech.";
footer.innerHTML = copyright;
my_age.innerHTML = fecha.getFullYear() - 1985;

// SHARE MY PORTFOLIO

const social_n = document.querySelectorAll(".social_item");
const my_website = encodeURIComponent(location.origin + "/portfolio");
const my_website_title = document.title;
const url_facebook =
  "http://www.facebook.com/sharer.php?u=" +
  my_website +
  "&t= Marvin%27s%20Portfolio";
const url_tweeter =
  "https://twitter.com/intent/tweet?url=" +
  my_website +
  "&text = Marvin%27s%20Portfolio";
const url_telegram =
  "https://telegram.me/share/url?url=" +
  my_website +
  "&text = Marvin%27s%20Portfolio";
const url_linkedin =
  "https://www.linkedin.com/shareArticle?mini=true&url=" + my_website;

social_n.forEach((item) => {
  item.addEventListener("click", function () {
    link = "url_" + item.id;
    window.open(eval(link), "_blank", "resizable=no, toolbar=0, status=0");
  });
});

// FORM FIELDS DATA TYPE

const fields = document.querySelectorAll(".frm_text");

fields.forEach((field) => {
  switch (field.id) {
    case "email":
      field.type = "email";
      break;
    default:
      field.type = "text";
      break;
  }
});

// FORM VALIDATION

function f_check() {
  const f_form = document.getElementById("contact_form");
  const f_name = document.getElementById("name");
  const f_email = document.getElementById("email");
  const f_message = document.getElementById("message");
  const f_btn = document.getElementById("btn_send");
  const valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  f_name.addEventListener("focusout", (e) => {
    if (f_name.value.length < 2) {
      f_btn.disabled = true;
      f_name.classList.add("wrong", "animate__animated", "animate__shakeX");
      f_name.value = "";
      f_name.placeholder = "More than one character, please";
      setTimeout((e) => {
        f_name.classList.remove(
          "wrong",
          "animate__animated",
          "animate__shakeX"
        );
      }, 1000);
      setTimeout((e) => {
        f_name.placeholder = "Who is contacting me?";
      }, 3000);
    }
  });

  f_email.addEventListener("focusout", (e) => {
    if (!valid_email.test(f_email.value)) {
      f_btn.disabled = true;
      f_email.classList.add("wrong", "animate__animated", "animate__shakeX");
      f_email.value = "";
      f_email.placeholder = "Enter a valid e-mail address";
      setTimeout((e) => {
        f_email.classList.remove(
          "wrong",
          "animate__animated",
          "animate__shakeX"
        );
      }, 1000);
      setTimeout((e) => {
        f_email.placeholder = "your@email.here";
      }, 3000);
    }
  });

  f_message.addEventListener("focus", (e) => {
    if (f_name.value != "" && f_email.value != "") {
      f_btn.disabled = false;
    }
  });

  f_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (f_message.value.length > 4) {
      f_form.submit();
      var fields = document.querySelectorAll(".frm_text");
      fields.forEach((field) => {
        field.value = "";
      });
    } else {
      f_message.classList.add("wrong", "animate__animated", "animate__shakeX");
      f_message.value = "";
      f_message.placeholder = "Please, write something!";
      setTimeout((e) => {
        f_message.classList.remove(
          "wrong",
          "animate__animated",
          "animate__shakeX"
        );
      }, 1000);
      setTimeout((e) => {
        f_message.placeholder = "Leave me your message";
      }, 3000);
    }
  });
}

// GET A JSON FILE FROM A URL TO GENERATE PREJECTS

// fetch("https://meverss.github.io/portfolio/data/projects.json", {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// });

function gen_projects() {}
fetch("https://meverss.github.io/portfolio/data/projects.json")
  .then((data) => data.json())
  .then((data) => {
    const my_url = "https://meverss.github.io/portfolio";
    data.forEach((project) => {
      my_projects.innerHTML += `<div class="project" id="project${project.index}">
              <div class="thumbnail_container">
                <img
                  class="thumbnail"
                  src="./media/images/${project.thumbnail}"
                  alt="Portfolio Proyect ${project.index}"
                />
              </div>
              <hr>
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
      let short_desc =
        data[data.findIndex((std) => std.index == id)].description;
      let full_desc = data[data.findIndex((std) => std.index == id)].viewmore;
      let thumb = data[data.findIndex((std) => std.index == id)].thumbnail;
      let scrsht = data[data.findIndex((std) => std.index == id)].screenshot;

      btn.addEventListener("click", (e) => {
        viewmore_container.style["display"] = "flex";
        viewmore_container.style["opacity"] = "1";
        document.body.style.overflow = "hidden";
        viewmore_pict.innerHTML = `<img src="${my_url}/media/images/${scrsht}" alt="Proyecto web">`;
      });
    });

    viewmore_close.addEventListener("click", (close) => {
      viewmore_container.style["display"] = "none";
      document.body.style["overflow"] = "auto";
    });
  });
