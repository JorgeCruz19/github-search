const $body = document.querySelector("body");
const $btnToggle = document.querySelector("#button-theme-toggle");
const $formSearch = document.getElementById("form-search");
const $card = document.querySelector(".card");

const API_URL = "https://api.github.com/users";

$btnToggle.addEventListener("click", function () {
  if ($body.classList.contains("light-theme")) {
    this.innerHTML = `Light
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g></svg>`;
    $body.classList.remove("light-theme");
  } else {
    this.innerHTML = `Dark 
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/></svg>`;
    $body.classList.add("light-theme");
  }
});

$formSearch.addEventListener("submit", async (e) => {
  e.preventDefault();
  await fetchUserAccount(e.target.elements.username.value);
});

const fetchUserAccount = async (username = "octocat") => {
  try {
    loading();
    const res = await fetch(`${API_URL}/${username}`);
    if (!res.ok || res.status === 404) {
      $card.innerHTML = `
      <div class="is-centered">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="error-404" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 98.31" style="enable-background:new 0 0 122.88 98.31" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M8.32,0h106.24c4.57,0,8.32,3.74,8.32,8.32V90c0,4.57-3.74,8.32-8.32,8.32l-106.24,0C3.74,98.31,0,94.57,0,90 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M37.46,65.4H23.01v-6.53l14.45-17.18h6.9v17.56h3.59v6.15h-3.59v5.35h-6.9V65.4L37.46,65.4z M37.46,59.25v-9.02l-7.63,9.02H37.46L37.46,59.25z M49.77,56.34c0-5.43,0.98-9.23,2.93-11.39c1.96-2.17,4.94-3.25,8.93-3.25 c1.92,0,3.51,0.24,4.74,0.71c1.24,0.47,2.24,1.09,3.02,1.85c0.78,0.76,1.4,1.56,1.84,2.39c0.45,0.84,0.81,1.82,1.08,2.93 c0.53,2.13,0.8,4.35,0.8,6.67c0,5.18-0.88,8.97-2.63,11.37c-1.75,2.4-4.77,3.61-9.06,3.61c-2.4,0-4.34-0.39-5.83-1.15 c-1.48-0.77-2.69-1.89-3.65-3.37c-0.69-1.05-1.22-2.49-1.61-4.31C49.96,60.56,49.77,58.55,49.77,56.34L49.77,56.34z M57.63,56.35 c0,3.63,0.32,6.12,0.96,7.45c0.64,1.33,1.58,2,2.8,2c0.8,0,1.5-0.28,2.1-0.84c0.59-0.57,1.02-1.46,1.3-2.68 c0.28-1.22,0.42-3.13,0.42-5.71c0-3.79-0.32-6.34-0.96-7.65c-0.65-1.3-1.61-1.96-2.89-1.96c-1.32,0-2.26,0.67-2.85,2 C57.92,50.28,57.63,52.75,57.63,56.35L57.63,56.35z M89.37,65.4H74.92v-6.53l14.45-17.18h6.9v17.56h3.59v6.15h-3.59v5.35h-6.9V65.4 L89.37,65.4z M89.37,59.25v-9.02l-7.63,9.02H89.37L89.37,59.25z M117.97,23.29H5.29v67.51c0,0.64,0.25,1.2,0.67,1.63 c0.42,0.43,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63l0-67.51H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></g></svg>
        <p class="is-error">'User account not found'</p>
      </div>`;
      return;
    }
    const data = await res.json();
    loadUserTemplate(data);
  } catch (error) {
    console.error(error);
  }
};

const loadUserTemplate = (data) => {
  const { name, avatar_url, followers, following, public_repos, created_at, twitter_username, bio, location, company, html_url, login, blog } = data;
  const templateHTML = `
          <div class="card-header">
            <div class="card-header-flex">
              <img src="${avatar_url}" class="card-header-avatar" alt="${name}" />
              <div class="card-header-info">
                <div>
                  <h2 class="card-header-username">${name ? name : "Not Available"}</h2>
                  <a href="${html_url}" class="card-header-at" target="_blank">@${login}</a>
                </div>
                <span class="card-header-joined">Joined ${new Date(created_at).toLocaleDateString()}</span>
              </div>
              <p class="card-header-description">${bio ? bio : "This profile has no bio"}</p>
            </div>
          </div>
          <div class="card-body">
            <div class="card-body-info">
              <div class="card-body-info-repos">
                <h4>Repos</h4>
                <p>${public_repos}</p>
              </div>
              <div class="card-body-info-repos">
                <h4>Followers</h4>
                <p>${followers}</p>
              </div>
              <div class="card-body-info-repos">
                <h4>Following</h4>
                <p>${following}</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-item">
              <a href="#" class="card-footer-item-link ${location || "not-available"}">
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                    fill="currentColor"
                  />
                </svg>
                <span>${location ? location : "Not Available"}</span>
              </a>
            </div>
            <div class="card-footer-item">
              <a href="#" class="card-footer-item-link ${blog || "not-available"}">
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <g fill="currentColor">
                    <path
                      d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"
                    />
                    <path
                      d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"
                    />
                  </g>
                </svg>
                <span>${blog ? blog : "Not Available"}</span>
              </a>
            </div>
            <div class="card-footer-item">
              <a href="#" class="card-footer-item-link ${twitter_username || "not-available"}">
                <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                    fill="currentColor"
                  />
                </svg>
                <span>${twitter_username ? twitter_username : "Not Available"}</span>
              </a>
            </div>
            <div class="card-footer-item">
              <a href="#" class="card-footer-item-link ${company || "not-available"}">
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <g fill="currentColor">
                    <path
                      d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"
                    />
                  </g>
                </svg>
                <span>${company ? company : "Not Available"}</span>
              </a>
            </div>
          </div>`;
  $card.innerHTML = templateHTML;
};

const loading = () => {
  const loadingTemplateHTML = `
    <div class="is-centered">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="background: none; shape-rendering: auto"
        width="150px"
        height="150px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50 50)">
          <g transform="scale(0.8)">
            <g transform="translate(-50 -50)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  repeatCount="indefinite"
                  dur="1.1363636363636365s"
                  values="-20 -20;20 -20;0 20;-20 -20"
                  keyTimes="0;0.33;0.66;1"
                />
                <path
                  fill="#ffffff"
                  d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"
                />
                <path
                  fill="#141c2f"
                  d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p>Loading...</p>
    </div>`;
  $card.innerHTML = loadingTemplateHTML;
};

document.addEventListener("DOMContentLoaded", async () => {
  await fetchUserAccount();
});
