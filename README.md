# hathimanan.github.io
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manan Hathi - Portfolio</title>
    <style>
        html {
            scroll-padding-top: 190px;
            scroll-behavior: smooth;
        }
    
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding-top: 170px; /* Ensures content isn't hidden under the fixed navbar */
            color: white;
            background-color: #f5f5f5;
        }
    
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px; /* Adjust this as needed */
            padding: 20px;
        }
    
        header {
            position: fixed;
            top: 0;
            width: fit-content;
            height: 280px;
            color: white;
            background: blueviolet;
            z-index: 1000;
        }
    
        header h1 {
            margin: 0;
            font-size: 2.5em;
            color: white;
        }
       h1.hathimanangithub.io    {
           background-color: orange;
       }
        header h2 {
            margin-top: 10px; /* Adjust as needed */
            font-size: 1.5em;
            color: white;
        }
    
        nav {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: white;
        }
    
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            color: white;
        }
    
        nav ul li {
            margin: 0 20px;
        }
    
        nav ul li a {
            text-decoration: none;
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }
    
        nav ul li a:hover {
            background-color: #e0e0e0;
            color: #333;
        }
    
        .hamburger {
            display: none;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 21px;
            cursor: pointer;
        }
    
        .hamburger .line {
            width: 100%;
            height: 3px;
            background-color: #333;
            border-radius: 2px;
            transition: all 0.3s;
        }
    
        section {
            padding: 20px;
            max-width: 1200px;
            width: 100%;
            color: black;
            background-color: lightgreen;
            margin: 50px 0; /* Increased margin for better separation */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }
    
        section h2 {
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
            color: black;
        }

        section::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #ddd;
            margin-top: 30px;
        }

        section:nth-child(even) {
            background-color: yellow;
            color: black;
        }


        .experience-item,
        .project-item,
        .education-item {
            margin-bottom: 20px;
        }
    
        ul {
            list-style: disc inside;
            color: #555;
        }
    
        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 20px 0;
        }
    
        /* Mobile View (for small screens) */
        @media (max-width: 768px) {
            body {
                padding-top: 120px; /* Adjusted top padding to account for navbar + hamburger height */
            }
    
            header h1 {
                font-size: 2em;
            }
    
            header h2 {
                font-size: 1.2em;
            }
    
            nav ul {
                flex-direction: column;
                display: none;
                background-color: #fff;
                width: 100%;
                text-align: center;
                position: absolute;
                top: 80px; /* Adjusted so that it doesn't overlap with the header */
                left: 0;
                padding: 10px 0;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
    
            /* Display the menu when active */
            .nav-links.active {
                display: flex;
            }
    
            nav ul li {
                margin: 10px 0;
            }
    
            .hamburger {
                display: flex;
            }
    
            .hamburger .line {
                background-color: #333;
            }
        }
    </style>
    
    
    <script>
        console.log("JavaScript loaded");
    </script>
</head>

<body>
    <header>
        <div class="container">
            <h1>Manan Hathi</h1>
            <h2>Software Engineer</h2>
            <nav>
                <ul class="nav-links" id="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger" id="hamburger" aria-label="Menu">
                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            const hamburger = document.getElementById("hamburger");
                            const navLinks = document.getElementById("nav-links");

                            hamburger.addEventListener("click", () => {
                                navLinks.classList.toggle("active");
                            });
                        });

                    </script>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </nav>
        </div>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Hi, I'm Manan Hathi, a Software Engineer based in Ahmedabad, India. I specialize in software testing,
            cybersecurity, and full-stack development. With a strong educational background and hands-on experience, I
            aim to contribute to innovative and secure software solutions.</p>
    </section>

    <section id="experience">
        <h2>Professional Experience</h2>
        <div class="experience-item">
            <h3>Software Test Engineer</h3>
            <p><em>KiwiQA Services Pvt. Ltd. | 07/2023 - Present, Ahmedabad, India</em></p>
            <ul>
                <li> Successfully completed a 6-month internship and was promoted to a full time QA role following a performance review</li>
                <li><b>Insurance Domain Project</b> – Authored 200+ test cases, executed tests, and identified 100+ issues.</li>
                <li><b>Education Domain Project</b> – Created and executed 150+ test cases, uncovering 40+ defects</li>
                <li> <b>HRMS Domain Project</b> – Currently involved in multiple modules, developing and executing 1000+ test cases, and reporting 200+ defects.</li>
                <li>  Contributed to streamlining QMS (Quality Management System) documentation for the organization. </li>
            </ul>
        </div>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project-item">
            <h3>Security Testing using Burp Suite and NMap</h3>
            <p><em>02/2023 - 04/2023</em></p>
            <p>Secured a perfect GPA of 10 in college for this project. Directed forwarding and used 1000+ requests/responses for VAPT.</p>
            <p> Used Burp Suite for Network Interception, Pen Testing attacks and Intrusion attacks. </p>
            <p> Used NMap for Network scanning,mapping,analyzing and Packet filtering. </p>
        </div>
        <div class="project-item">
            <h3>Pharmacy Management System</h3>
            <p><em>04/2022 - 05/2022</em></p>
            <p>Developed an efficient, scalable system from scratch using ASP.NET, C#, Visual Studio, and Visual Studio Code.</p>
            <p> Developed modules such as Dashboard, Products, Orders, Profile. </p>
        </div>
        <div class="project-item">
            <h3>College Management App</h3>
            <p><em>07/2021 - 11/2021</em></p>
            <p> Developed a college management application using Android Studio and Firebase keeping CHARUSAT University students as End Users. </p>
            <p> Developed college app for Students as well as Admin as well as Faculty </p>
            <p> Developed modules for Student app- Profile,Faculty,Attendance,Payment,Results. </p>
        </div>
            <div class="project-item">
            <h3>Quizlet</h3>
            <p><em>01/2022 - 05/2022</em></p>
            <p> Developed a quiz management application using Javascript,HTML,CSS and MongoDB. </p>
            <p> Developed modules for various types of Quizzes. </p>
        </div>
    </section>

    <section id="education">
        <h2>Education</h2>
        <div class="education-item">
            <h3>Advanced Executive Program in Cybersecurity</h3>
            <p><em>International Institute of Information Technology, Bangalore | 04/2023 - 10/2023</em></p>
            <p>GPA: 3.81/4.00</p>
            <ul>
                <li>Enterprise Infrastructure Security</li>
                <li>Application and Web Application Security</li>
                <li>Ransomware and Malware Analysis</li>
                <li>Ethical Hacking and VAPT</li>
            </ul>
        </div>
        <div class="education-item">
            <h3>Bachelor of Technology in Computer Engineering</h3>
            <p><em>Charotar University of Science And Technology, Changa | 07/2019 - 05/2023</em></p>
            <ul>
                <li>Programming Languages: C, C++, Java, Python, JavaScript, Dotnet, C#</li>
                <li>Focus on AI, Data Structures & Algorithms, Software Engineering, Information Security, Blockchain
                    Technology, Operating Systems including Linux Essentials</li>
            </ul>
        </div>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>Regression Testing</li>
            <li>Java</li>
            <li>XPath</li>
            <li>Automation</li>
            <li>Functional Testing</li>
            <li>DSA Algorithms</li>
            <li>Python</li>
            <li>Application Security</li>
            <li>Cyber Security</li>
            <li>Firewalls</li>
            <li>VAPT</li>
            <li>Incidence Response (IR)</li>
            <li>Dotnet</li>
            <li>Blockchain</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:hathimanan@gmail.com">hathimanan@gmail.com</a></p>
        <p>Phone: +91 9408884750</p>
        <p>Location: Ahmedabad, India</p>
        <p><a href="http://hathimanan.github.io">Personal Website</a></p>
        <p><a href="https://www.linkedin.com/in/manan-hathi/">LinkedIn</a></p>
        <p><a href="https://github.com/hathimanan">GitHub</a></p>
        <p><a href="https://medium.com/@hathimanan">Medium</a></p>
    </section>

    <footer>
        <p>&copy; 2025 Manan Hathi. All rights reserved.</p>
    </footer>
</body>

</html>
