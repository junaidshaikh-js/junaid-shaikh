const projectSectionContent = document.querySelector(
  ".project-section__content"
);

const loadMore = document.querySelector(".loadmore");
let currentItem = 3;

const projectData = [
  {
    img: "./assets/project-screenshots/autocrew.png",
    title: "AutoCrew",
    description: "A social media app for automobile enthusiast",
    tags: ["React JS", "Redux", "CSS"],
    liveLink: "https://autocrew.vercel.app/login",
    sourceLink: "https://github.com/junaidshaikh-js/autocrew",
  },
  {
    img: "./assets/project-screenshots/autodecore-store.png",
    title: "AutoDecore",
    description: "An e-commerce website for automobile accessories",
    tags: ["React JS", "React Router", "CSS"],
    liveLink: "https://autodecore-store.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/autodecore-store",
  },
  {
    img: "./assets/project-screenshots/autotube.png",
    title: "AutoTube",
    description: "A video library for everything related to automobiles.",
    tags: ["React JS", "React Router", "SCSS"],
    liveLink: "https://autotube-app.netlify.app/  ",
    sourceLink: "https://github.com/junaidshaikh-js/autotube",
  },
  {
    img: "./assets/project-screenshots/simple-note.png",
    title: "Simple Note",
    description: "A note taking app",
    tags: ["React JS", "TypeScript", "Tailwind"],
    liveLink: "https://simple-note1.netlify.app/ ",
    sourceLink: "https://github.com/junaidshaikh-js/simple-note",
  },
  {
    img: "./assets/project-screenshots/hydrogen.png",
    title: "Hydrogen UI",
    description: "Component Library",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://hydrogen-ui.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/hydrogen",
  },
  {
    img: "./assets/project-screenshots/clockwork.png",
    title: "Clockwork",
    description:
      "Clockwork combines Pomodoro Timer with Task Management, it is a app that will motivate you to stay focused and get things done.",
    tags: ["React", "SCSS"],
    liveLink: "https://clockwork-app.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/clockwork",
  },
  {
    img: "./assets/project-screenshots/stocklossprofit.png",
    title: "Stock Profit & Loss Calculator",
    description:
      "This app calculates if you are in loss or profit. Enter your initial price, the number of stocks, and current price and get results.",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://stocklossprofit.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/profit-loss",
  },
  {
    img: "./assets/project-screenshots/palindromebirthday.png",
    title: "Palindrome Birthday",
    description:
      "Tell your friends if their birthdate is a palindrome. If not, show the nearest palindrome date and how much days they are missing.",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://palindromebirthday1.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/palindrome-birthday",
  },
  {
    img: "./assets/project-screenshots/funwithtriangles.png",
    title: "Fun With Triangles",
    description:
      "Calculate area, the hypotenuse of the triangle, play a quiz based on the triangle and give three angles to decide if they form a triangle.",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://funwithtriangles12.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/fun-with-triangles",
  },

  {
    img: "./assets/project-screenshots/lucky-number-app.png",
    title: "Is your Birthday Lucky",
    description:
      "The user need to enter their birth date and a lucky number, this, will tell them if that number is lucky for them or not.",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://lucky-number-app.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/is-your-birthday-lucky",
  },
  {
    img: "./assets/project-screenshots/calculate-change.png",
    title: "Cash Register",
    description:
      "The cash register manager calculates how the amount can be returned to the customer in a minimum number of notes possible.",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://calculate-change.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/cash-register",
  },
  {
    img: "./assets/project-screenshots/popular-books.png",
    title: "Popular Books",
    description:
      "A mini React project. When a user click on the given button, the popular books in the genre is displayed as a list.",
    tags: ["React JS"],
    liveLink: "https://sgyiu.csb.app/",
    sourceLink: "https://github.com/junaidshaikh-js/book-recommendation",
  },
  {
    img: "./assets/project-screenshots/flag-interpreter.png",
    title: "Flag Interpreter",
    description:
      " This is my first React App. Given a emoji of Flag, it will tell you what flag it it. It's fun. Check it out.",
    tags: ["React JS"],
    liveLink: "https://z8rd2.csb.app/",
    sourceLink: "https://github.com/junaidshaikh-js/flag-interpreter",
  },
  {
    img: "./assets/project-screenshots/ferb-latin-ss.png",
    title: "Ferb-latin Translator",
    description:
      "This app converts English into Ferb-Latin language spoken by the two brothers Phineas and Ferb (in a Disney series)",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://translateintoferblatin.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/Ferb-latin-translation-app",
  },
  {
    img: "./assets/project-screenshots/translate-into-banana.png",
    title: "Banana Language Translator",
    description:
      "A translation app that convert English text into Banana Language spoken by minions in Despicable movie.",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://translate-into-banana.netlify.app/",
    sourceLink: "https://github.com/junaidshaikh-js/banana-talk-translationApp",
  },
  {
    img: "./assets/project-screenshots/dog-app.png",
    title: "Dog App",
    description:
      "This app will will give you a random photo of any breed of dog you choose.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://junaidshaikh-js.github.io/dog-app/",
    sourceLink: "https://github.com/junaidshaikh-js/dog-app",
  },
  {
    img: "./assets/project-screenshots/quiz-app.png",
    title: "Quiz App",
    description:
      " Given a country name, you have to tell the name of capital city of that particular country.",
    tags: ["NodeJS"],
    liveLink:
      "https://replit.com/@junaidshaikhjs/Mark2-Quiz-2?embed=1&output=1#index.js",
    sourceLink: "https://github.com/junaidshaikh-js/quiz-app-02",
  },
  {
    img: "./assets/project-screenshots/how-well-you-know-me.png",
    title: "How well do you know me?",
    description:
      "A quiz app. This app ask certain question about me and if you answer correctly you get one point. It's fun. Let's see your score.",
    tags: ["NodeJS"],
    liveLink:
      "https://replit.com/@junaidshaikhjs/Mark1-Quiz?embed=1&output=1#index.js",
    sourceLink: "https://github.com/junaidshaikh-js/quiz-app-01",
  },
];

function createTags(tagArr) {
  let output = tagArr.map((tag) => {
    return `<li class="tag">${tag}</li>`;
  });

  return output.join(" ");
}


function createProjectItem(projectSection) {
  let projectItemList = projectData.map((projectObj) => {
    return `<article class="project-item border-box-shadow">
    <div class="project-item__image">
        <img
          src=${projectObj.img}
          alt="" loading="lazy"
          height="360"
          width="640"
        />
      </div>

      <div class="project-item__info">
        <h2 class="project-item__info-title">${projectObj.title}</h2>

        <p class="project-item__info-description">
          ${projectObj.description}
        </p>

        <div class="tags-links-wrapper">
          <div class="project-item__info-tags">
            <ul>
              ${createTags(projectObj.tags)}
            </ul>
          </div>
          <div class="project-item__info-links">
            <a
              href=${projectObj.liveLink}
              class="src-btn"
              >View Live</a
            >

            <a
              href=${projectObj.sourceLink}
              class="src-btn"
              >Source</a
            >
          </div>
        </div>
      </div>
    </article>`;
  });

  projectSection.innerHTML = projectItemList.join(" ");
}

window.addEventListener("DOMContentLoaded", () => {
  createProjectItem(projectSectionContent);
});

loadMore.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".project-item")];

  for (let i = currentItem; i <= currentItem + 2; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
  }

  currentItem += 3;

  if (currentItem >= elementList.length) {
    e.target.style.display = "none";
  }
});
