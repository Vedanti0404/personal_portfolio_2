const Projects = [
    // {
    //     name: "MCQ Generator using OpenAI and Langchain",
    //     about: "A streamlit web app that generates multiple choice questions using OpenAI and Langchain from reading PDFs.",
    //     img: "../images/MCQ_generator.png",
    //     gitrepo: "https://github.com/rohitspatil30/MCQ_generator_openAI_and_langchain",
    //     tech_stack: "Python | OpenAI | Streamlit | Langchain | Jupyter Notebook | Pandas | AWS | Git",
    //     tech_stackicons: [
    //         `<img src="../images/icons8-python-48.png" />`,
    //         `<img src="../images/icons8-jupyter-48.png"/>`,
    //         `<img src="../images/icons8-streamlit-48.png" height="48px" width="48px"/>`,
    //         `<img src="../images/icons8-langchain-48.png" height="48px" width="60px"/>`,
    //         `<img src="../images/icons8-chatgpt-50.png"/>`,
    //         `<img src="../images/icons8-aws-48.png"/>`,
    //         `<img src="../images/icons8-pandas-48.png"/>`,
    //         `<img src="../images/icons8-git-48.png"/>`

    //     ],
    //     project_link: "https://github.com/rohitspatil30/MCQ_generator_openAI_and_langchain",
    //     project_type: "Solo Project"
    // },
    // done project 1
    {
        name: "Talk to PDF Chatbot",
        about: "A React application that answers to queries from PDF files using Gemini Pro API and Langchain. ",
        img: "../images/talk_to_pdf.png",
        gitrepo: "https://github.com/Vedanti0404/Talk-to-PDF",
        tech_stack: "Python | Streamlit | Langchain | Jupyter Notebook | HTML | Git | CSS | Javascript",
        tech_stackicons: [
            `<img src="../images/icons8-python-48.png" />`,
            `<img src="../images/icons8-jupyter-48.png"/>`,
            `<img src="../images/icons8-streamlit-48.png" height="48px" width="48px"/>`,
            `<img src="../images/icons8-langchain-48.png" height="48px" width="60px"/>`,
            `<img src="../images/icons8-html-48.png"/>`,
            `<img src="../images/icons8-git-48.png"/>`,
            `<img src="../images/icons8-css-48.png"/>`,
            `<img src="../images/icons8-javascript-48.png"/>`

        ],
        project_link: "https://github.com/Vedanti0404/Talk-to-PDF",
        project_type: "Team Project"
    },
    // done project 2
    {
        name: "Toxic Comment Identification",
        about: "this project uses MLOps principles to develop a web app that classifies whether a person is diabetic or not. ",
        img: "../images/toxic_comment.jpeg",
        gitrepo: "https://github.com/Vedanti0404/Toxic_Comment_Classifier",
        tech_stack: "Python | HTML | CSS | Javascript | Scikit Learn | Pandas | Git  | Numpy | AWS | Docker | Linux",
        tech_stackicons: [
            `<img src="../images/icons8-python-48.png" />`,
            `<img src="../images/icons8-pandas-48.png"/>`,
            `<img src="../images/icons8-docker-48.png"/>`,
            `<img src="../images/icons8-aws-48.png"/>`,
            `<img src="../images/icons8-html-48.png"/>`,
            `<img src="../images/icons8-css-48.png"/>`,
            `<img src="../images/icons8-javascript-48.png"/>`,
            `<img src="../images/icons8-git-48.png"/>`,
            `<img src="../images/scikit-learn.png" height="48px" width="48px"/>`

        ],
        project_link: "https://github.com/Vedanti0404/Toxic_Comment_Classifier",
        project_type: "Solo Project"
    },
    // done project 3
    {
        name: "CraftBot Website",
        about: "this project uses MLOps principles to develop a web app that checks the quality of wine. ",
        img: "../images/craftbot.png",
        gitrepo: "https://github.com/Vedanti0404/CraftBot",
        tech_stack: " HTML | CSS | Javascript | Git ",
        tech_stackicons: [
            `<img src="../images/icons8-html-48.png"/>`,
            `<img src="../images/icons8-css-48.png"/>`,
            `<img src="../images/icons8-javascript-48.png"/>`

        ],
        project_link: "https://github.com/Vedanti0404/CraftBot",
        project_type: "Solo Project"
    },
    // project 4
   
    //project 5
    
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ''}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      ${pro.tech_stackicons[10] ? pro.tech_stackicons[10] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
