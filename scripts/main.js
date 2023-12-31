// SHOW WEBSITE AFTER LOADED

function show_page() {
	page_content.style.opacity = "1";
	page_loader.style.display = "none";
	document.body.style.overflow = "auto";
	document.getElementById("btn_send").disabled = true;
}

// SHOW/HIDE ALTERANTIVE MENU
const btnOpen = document.getElementById("m_menu_open_btn");

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
	let element = document.getElementById(section);
	let position = element.offsetTop;
	switch (section) {
		case "s_about":
			window.scrollTo(0, position - 150);
			break;
		case "s_projects":
			window.scrollTo(0, position - 65);
			break;
		default:
			window.scrollTo(0, position - 105);
			break;
	}
}

function scroll_to_section_m(section_m) {
	let element = document.getElementById(section_m);
	let position = element.offsetTop;
	if (window.innerWidth <= 1140) {
		switch (section_m) {
			case "s_m_about":
				window.scrollTo(0, position - 50);
				break;
			case "s_m_services":
				window.scrollTo(0, position - 10);
				break;
			case "s_m_projects":
				window.scrollTo(0, position + 40);
				break;
			default:
				window.scrollTo(0, position - 20);
				break;
		}
	}
}

let menu = document.querySelectorAll(".menu_item");
let alt_menu = document.querySelectorAll(".m_menu_item");

menu.forEach((obj) => {
	let sec = obj.id;
	if (obj.classList[1] != "m_menu_item") {
		if (obj.id != "") {
			obj.addEventListener("click", function () {
				scroll_to_section("s_" + sec);
			});
		}
	}
});

alt_menu.forEach((obj1) => {
	let sec = obj1.id;

	if (obj1 != "s_m_menu_open_btn") {
		obj1.addEventListener("click", function () {
			scroll_to_section_m("s_" + sec);
		});
	}
});

//COPYRIGHT

const fecha = new Date();
const copyright = "Copyright ©" + fecha.getFullYear() + " KiniunTech.";
footer.innerHTML = copyright;
my_age.innerHTML = fecha.getFullYear() - 1985;

// SHARE MY PORTFOLIO

const social_n = document.querySelectorAll(".social_item");
const my_website = encodeURIComponent(location.href);
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
		window.open(
			eval(link),
			"",
			"width=720, height=480, toolbar=0, status=0, top=300, left=600"
		);
	});
});

// FORM VALIDATION

// Form fields data-type

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

// ---------------------

const frm_contact = document.querySelector(".contact_form");
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
			f_name.classList.remove("wrong", "animate__animated", "animate__shakeX");
		}, 1000);
		setTimeout((e) => {
			f_name.placeholder = "Who is contacting me?";
		}, 3500);
	}
});

f_email.addEventListener("focusout", (e) => {
	if (!valid_email.test(f_email.value)) {
		f_btn.disabled = true;
		f_email.classList.add("wrong", "animate__animated", "animate__shakeX");
		f_email.value = "";
		f_email.placeholder = "Enter a valid e-mail address";
		setTimeout((e) => {
			f_email.classList.remove("wrong", "animate__animated", "animate__shakeX");
		}, 1000);
		setTimeout((e) => {
			f_email.placeholder = "your@email.here";
		}, 3500);
	}
});

f_message.addEventListener("focus", (e) => {
	if (f_name.value != "" && f_email.value != "") {
		f_btn.disabled = false;
	}
});

// Get data from the form, save a copy in a JSON and send the emmail

frm_contact.addEventListener("submit", (e) => {
	e.preventDefault();

	const frmData = new FormData(e.target);
	const frmDataComplete = Object.fromEntries(frmData.entries());
	const name = frmData.get("name");
	const email = frmData.get("email");
	const subj = frmData.get("subj");
	const message = frmData.get("message");
	const contactMessage = { name, email, subj, message };

	frm_key.value = "6812b923-1859-4cd0-a7b2-7f246e481715";
	frm_url.value = location.origin;

	subject.innerHTML += `<input id="subject" type="hidden" name="subject" value="New message from ${f_name.value} on My Portfolio" ></input>`;

	if (f_message.value.length >= 4) {
		frm_contact.submit();
		setTimeout(() => {
			let fields = document.querySelectorAll(".frm_text");
			fields.forEach((field) => {
				field.value = "";
			});
		}, 2000);
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
		}, 3500);
	}
});

// =================================================

// GET A JSON FILE FROM A URL TO GENERATE PREJECTS

// fetch("https://myportfolio.kiniun.tech/data/projects.json", {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// });

const getProjects = async () => {
	resp = await fetch("https://myportfolio.kiniun.tech/data/projects.json")
		.then((data) => data.json())
		.then((data) => {
			const my_url = "https://myportfolio.kiniun.tech";
			data.forEach((project) => {
				my_projects.innerHTML += `
              <div class="project" id="project${project.index}">
              <div class="thumbnail_container">
                <img
                  class="thumbnail"
                  src="https://myportfolio.kiniun.tech/media/images/projects/${project.thumbnail}"
                  alt="${project.name}_thumbnail"
                />
              </div>
              <hr>
              <ul class="project_desc text">
                <li><spam class="info">Name: </spam>${project.name}</li>
                <li>
                  <spam class="info">Description: </spam>${project.description}
                </li>
              </ul>
              <p>
                <span class="button view_more" id="view_more${project.index}">View more</span>
              </p>
            </div>
            `;
			});

			// VIEW MORE INFO

			const vmb = document.querySelectorAll(".view_more");

			vmb.forEach((btn) => {
				let id = btn.id.split("view_more")[1];
				let short_desc =
					data[data.findIndex((std) => std.index == id)].description;
				id = btn.id.split("view_more")[1];
				let p_name = data[data.findIndex((std) => std.index == id)].name;
				let full_desc = data[data.findIndex((std) => std.index == id)].viewmore;
				let thumb = data[data.findIndex((std) => std.index == id)].thumbnail;
				let scrsht = data[data.findIndex((std) => std.index == id)].screenshot;
				let w_link = data[data.findIndex((std) => std.index == id)].link;

				btn.addEventListener("click", (e) => {
					viewmore_anim.classList.remove(
						"animate__animated",
						"animate__zoomOut"
					);
					viewmore_anim.classList.add("animate__animated", "animate__zoomIn");
					viewmore_container.style["display"] = "flex";
					viewmore_container.style["opacity"] = "1";
					document.body.style.overflow = "hidden";
					viewmore_pict.innerHTML = `
		        <img src="${my_url}/media/images/projects/${scrsht}" alt="${p_name}">
        		<a class="button" id="viewmore_page_link" href="${w_link}" target="_blank"> Visit website </a>
        		<span id="arrow" style="font-family: Symbols">  </span>
        		`;
					viewmore_text.innerHTML = `
        		<h3 class="title">${p_name}</h3>
        		<p class='text'><spam>${full_desc}</spam></p>`;
				});
			});

			viewmore_close.addEventListener("click", (close) => {
				document.getElementById("viewmore_box").scrollTop = 0;
				viewmore_anim.classList.remove("animate__animated", "animate__zoomIn");
				viewmore_anim.classList.add("animate__animated", "animate__zoomOut");
				document.body.style["overflow"] = "auto";
				setTimeout(function () {
					viewmore_container.style["display"] = "none";
				}, 400);
			});

			window.addEventListener("keydown", function (event) {
				let k = event.key;
				let d = getComputedStyle(viewmore_container).display;
				if (d != "none") {
					if (k == 27 || k == "Escape" || k == "Esc") {
						viewmore_anim.classList.remove(
							"animate__animated",
							"animate__zoomIn"
						);
						viewmore_anim.classList.add(
							"animate__animated",
							"animate__zoomOut"
						);
						document.body.style["overflow"] = "auto";
						setTimeout(function () {
							viewmore_container.style["display"] = "none";
						}, 400);
					}
				}
			});

			viewmore_box.addEventListener("scroll", () => {
				let dat = viewmore_pict.getBoundingClientRect();
				if (dat.top <= 135) {
					arrow.classList.remove("animate__animated", "animate__bounceIn");
					arrow.classList.add("animate__animated", "animate__bounceOut");
				} else {
					arrow.classList.remove("animate__animated", "animate__bounceOut");
					arrow.classList.add("animate__animated", "animate__bounceIn");
				}
			});

			window.addEventListener("resize", (a) => {
				let w = window.innerWidth;
				if (w > 1000) {
					m_menu_open_btn.style.display = "none";
				} else {
					hidemenu();
				}
			});
		});
};

getProjects();

// COOKIES

function openCookies() {
	window.open(
		"./pages/cookies.html",
		"",
		"width=720, height=480, toolbar=0, status=0, top=300, left=600"
	);
}

cookies_policy.innerHTML =
	'We use cookies with the only purpose to analyze our website traffic. If you want to know more about it, you can read our <a href="javascript:openCookies();">cookies policy</a>';

// Acept cookies //
cookies_ok.addEventListener("click", (e) => {
	cookies.classList.add("animate__animated", "animate__backOutUp");
});

// =====================
