const projectSectionContent = document.querySelector(
  ".project-section__content"
);

const projectData = [
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
    liveLink: "https://ei3xs.csb.app/",
    sourceLink: "https://codesandbox.io/s/popular-books-ei3xs",
  },
  {
    img: "./assets/project-screenshots/flag-interpreter.png",
    title: "Flag Interprete",
    description:
      " This is my first React App. Given a emoji of Flag, it will tell you what flag it it. It's fun. Check it out.",
    tags: ["React JS"],
    liveLink: "https://z8rd2.csb.app/",
    sourceLink: "https://codesandbox.io/s/flag-interpreter-z8rd2",
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

console.log(createTags(projectData[0].tags));

function createProjectItem(projectSection) {
  let projectItemList = projectData.map((projectObj) => {
    return `<article class="project-item border-box-shadow">
    <div class="project-item__image">
        <img
          src=${projectObj.img}
          alt="" loading="lazy"
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
