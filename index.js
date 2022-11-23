const URL = "https://api.github.com/users/Andrii-OttO/repos";
const avatar = "https://avatars.githubusercontent.com/u/82340217?v=4";
const loader = document.querySelector("#loading");
//
let box = document.querySelector(".box_info");
let repoList = document.querySelector(".my_repositories");
// spiner
function displayLoading() {
  loader.classList.add("display");
}
displayLoading();
function hideLoading() {
  loader.classList.remove("display");
}
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    hideLoading();
    makeInfo(data);
  });

//   create a list of repositories
function makeInfo(data) {
  //   console.log(data);
  let photo = document.createElement("img");
  photo.src = avatar;
  photo.alt = "my-photo";
  photo.className = "my_photo";
  let name = document.createElement("a");
  name.textContent = `Parshuk Andrii  gitHub profile: Andrii-OttO`;
  name.classList = "my_name";
  name.rel = "no-opener no-referer";
  box.append(photo, name);
  data.map((e) => {
    let li = document.createElement("li");
    li.className = "repositories";
    li.textContent = `repository name: ${e.name}`;
    let commit = document.createElement("p");
    commit.className = "commit_text";
    commit.textContent = `last update: ${e.updated_at} on ${e.default_branch} branch`;
    repoList.append(li, commit);
  });
}
// show and hide time of the last commit
repoList.addEventListener("click", showCommit);
function showCommit(e) {
  let target = e.target.nextElementSibling;
  let p = e.target.classList.contains("commit_text");
  if (e.target.classList.contains("repositories")) {
    target.style.display = "block";
  } else if (p) {
    e.target.style.display = "none";
  }
}
