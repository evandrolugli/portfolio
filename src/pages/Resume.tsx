import React from 'react';
import { FaCode, FaTools, FaServer, FaDatabase, FaCloud, FaAws } from "react-icons/fa";
import { FaAward, FaGraduationCap, FaCertificate, FaLanguage } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

export function Resume() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Evandro Lugli</h1>
        <p className="text-base text-gray-600 flex-1">Melbourne, VIC | <strong>Email:</strong> evandro.lugli@gmail.com</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Career Overview</h2>
        <p className="text-gray-400">
          Experienced Software Professional graduated with a degree in Information Systems, key skills include a range of back and front end technical languages and intercultural experience. Seeking a role in which I can continue to develop my skills within Australian IT support experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Skills and Attributes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaCode className="text-xl text-blue-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Programming Languages</h3>
              <p className="text-gray-400 text-sm">C#, Java, JavaScript, CSS, HTML</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaTools className="text-xl text-green-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Frameworks and Libraries</h3>
              <p className="text-gray-400 text-sm">Spring Framework, .NET Framework</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaServer className="text-xl text-purple-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Protocols and Data Formats</h3>
              <p className="text-gray-400 text-sm">SOAP, REST, WSDL, JSON</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaDatabase className="text-xl text-red-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Database</h3>
              <p className="text-gray-400 text-sm">MS SQL Server, MySQL</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaTools className="text-xl text-yellow-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Version Control and Testing</h3>
              <p className="text-gray-400 text-sm">Git, Unit Testing</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCloud className="text-xl text-indigo-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">DevOps Tools</h3>
              <p className="text-gray-400 text-sm">
                Jenkins (Cloudbees), Openshift, Azure, <span className="flex items-center">
                  <FaAws className="text-2xl text-yellow-500 mr-2" /> AWS Certified
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Employment History</h2>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">Student Service | NextEd Group – Greenwich College</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Office Operations</span>
              <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Student Support</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">Mar 2023 – Present</p>
          <p className="text-gray-400 mb-2">
            As a Student Service at an English college, I have a role in supporting the office operations and assisting the Student Service team.
          </p>
          <ul className="list-disc list-inside text-gray-300">
             <li className="flex items-center mb-1">
             <FaCode className="mr-2 size-3 text-green-300" />
              Assisting the reception by managing book fill-ups and ensuring efficient record-keeping.
            </li>
            <li className="flex items-center mb-1">
            <FaCode className="mr-2 size-3 text-green-300" />
              Handling student card issuance and maintenance, ensuring accurate and up-to-date information.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">Software Engineer | BRQ Digital Solutions</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Java</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Spring Framework</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Microservices</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Git</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">May 2021 - Apr 2022 (1 year)</p>
          <p className="text-gray-400 mb-2">
            As a member of the solutions’ team, I worked directly with Santander Bank, where I granted integration with back-end systems and facilitated efficient communication with external services.
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li className="flex items-center mb-1">
              <FaCode className="mr-2 text-blue-300 size-3" />
              Developed and maintained projects utilizing Java to deliver robust and scalable solutions.
            </li>
            <li className="flex items-center mb-1">
              <FaCode className="mr-2 text-blue-300 size-6" />
              Utilized a range of technologies such as Java, Spring Framework, Microservices, Protocols (SOAP, REST, WSDL, JSON), MS SQL Server, Git, Unit Test, DevOps, Jenkins (Cloudbees), Openshift, and Azure.
            </li>
            <li className="flex items-center mb-1">
              <FaCode className="mr-2 text-blue-300 size-4" />
              Worked in a team environment of nine technical staff in an agile environment using team-based methodologies and troubleshooting techniques.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">Product Owner | Laureate International Universities</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Market Analysis</span>
              <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Portfolio Management</span>
              <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Stakeholder Communication</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">Mar 2013 – Feb 2020 (7 years)</p>
          <p className="text-gray-400 mb-2">
            The Laureate International Universities network comprises over 25 higher education institutions around the globe and more than 875000 students. As the Product Owner, I was responsible for market analysis and competition monitoring with a focus on portfolio management and pricing.
          </p>
          <ul className="list-disc list-inside text-gray-300">
             <li className="flex items-center mb-1">
             <FaCode className="mr-2 text-green-300 size-3" />
             Marketing analysis of the international education industry.
            </li>
            <li className="flex items-center mb-1">
            <FaCode className="mr-2 text-green-300 size-3" />
             Managed a team of four marketing analysts: including scheduling and strategic forecasting.
            </li>
            <li className="flex items-center mb-1">
            <FaCode className="mr-2 text-green-300 size-3" />
             Maintained direct communication with stakeholders, providing regular reports and key updates.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">.Net Developer | Woow! Brasil</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">ASP.NET MVC</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">SQL Server</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Javascript</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">C#</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">Sep 2011 - Sep 2012 (1 year and 1 month)</p>
          <p className="text-gray-400 mb-2">
            I developed projects using .Net Framework and Microsoft SQL Server database, facilitating integration with both back-end and front-end systems.
          </p>
          <ul className="list-disc list-inside text-gray-300">
             <li className="flex items-center mb-1">
             <FaCode className="mr-2 text-blue-300 size-4" />
             Developed and maintained projects utilizing front-end web technologies such as HTML, CSS, JavaScript, and C# as a back-end programming language.
            </li>
            <li className="flex items-center mb-1">
            <FaCode className="mr-2 text-blue-300 size-3" />
             Modeling and data manipulation in Microsoft SQL Server database.
            </li>
            <li className="flex items-center mb-1">
            <FaCode className="mr-2 text-blue-300 size-3" />
             Utilized Asp.Net MVC 2 and Asp.Net MVC 3 as web applications.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">Software Developer | Grupo TV1</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">.NET Framework</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">SQL Server</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Javascript</span>
              <span className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xs font-medium">C#</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">Aug 2008 - Apr 2009 (9 months)</p>
          <p className="text-gray-400 mb-2">
            An internship where I embraced complex coding challenges, showcasing my problem-solving skills and adapting quickly to new frameworks and technologies.
          </p>
          <ul className="list-disc list-inside text-gray-300">
             <li className="flex items-center mb-1">
             <FaCode className="mr-2 text-blue-300 size-3" />
             Maintained projects utilising technologies such as HTML, CSS, JavaScript, and C#.
            </li>
            <li className="flex items-center mb-1">
            <FaCode className="mr-2 text-blue-300 size-3" />
             Modelling and data manipulation in Microsoft SQL Server database.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Qualifications and Certificates</h2>
        <ul className="list-disc list-inside text-gray-400 ml-4">
          <li className="flex items-center mb-3">
            <FaAward className="text-yellow-500 mr-2" />
            <span className="font-semibold">2023 AWS Certified Cloud Practitioner</span>
          </li>
          <li className="flex items-center mb-3">
            <FaGraduationCap className="text-blue-500 mr-2" />
            2023 Diploma of Information Technology
          </li>
          <li className="flex items-center mb-3">
            <FaGraduationCap className="text-blue-500 mr-2" />
            2012 Bachelor of Science Degree in Information Systems
          </li>
          <li className="flex items-center mb-3">
            <FaCertificate className="text-green-500 mr-2" />
            2011 Microsoft Certified Professional
          </li>
          <li className="flex items-center mb-3">
            <FaLanguage className="text-purple-500 mr-2" />
            2010 English as a Second Language
          </li>
          <li className="flex items-center mb-3">
            <FaDatabase className="text-red-500 mr-2" />
            2007 Data Processing Technician Course
          </li>
        </ul>
      </section>


      <hr className="border-gray-300 my-6" />
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Volunteering</h2>
        <div className="mb-6">
        <h3 className="text-xl font-semibold">2024 Volunteering at K8SUG Australia</h3>
          <ul className="list-disc list-inside text-gray-400 ml-4 mb-3">
            <li>Assisting with event space setup, guest check-in and photography.</li>
            <li>Engaged with IT professionals to immerse myself fully in the IT industry.</li>
          </ul>
          <h3 className="text-xl font-semibold">2022 Volunteering at the Hare Krishna Temple</h3>
          <ul className="list-disc list-inside text-gray-400 ml-4 mb-3">
            <li>Served food to guests and assisted in the kitchen to prepare food.</li>
            <li>Engaged with locals to build my English skills and immerse myself into the culture.</li>
          </ul>
        </div>
      </section>

      <section className="mb-2">
          <h2 className="text-xl font-semibold">Communication and Intercultural competence</h2>
          <ul className="list-disc list-inside text-gray-400 ml-4">
            <li>Bilingual speaker of Portuguese and English, currently studying Spanish.</li>
            <li>Background of studying and living across three different countries, engaging with a range of cultures.</li>
          </ul>
      </section>

    </div>
  );
}
