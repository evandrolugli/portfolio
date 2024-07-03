import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export function Resume() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Evandro Lugli</h1>
        <p className="text-lg text-gray-600">Melbourne, VIC | Email: evandro.lugli@gmail.com | LinkedIn</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>

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
             <IoIosArrowRoundForward className="mr-2" />
              Assisting the reception by managing book fill-ups and ensuring efficient record-keeping.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
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
             <IoIosArrowRoundForward className="mr-2" />
             Developed and maintained projects utilizing Java to deliver robust and scalable solutions.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Utilized a range of technologies such as Java, Spring Framework, Microservices, Protocols (SOAP, REST, WSDL, JSON), MS SQL Server, Git, Unit Test, DevOps, Jenkins (Cloudbees), Openshift, and Azure.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Worked in a team environment of nine technical staff in an agile environment using team-based methodologies and troubleshooting techniques.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">Product Owner | Laureate International Universities</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-purple-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Market Analysis</span>
              <span className="bg-purple-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Portfolio Management</span>
              <span className="bg-purple-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Stakeholder Communication</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">Mar 2013 – Feb 2020 (7 years)</p>
          <p className="text-gray-400 mb-2">
            The Laureate International Universities network comprises over 25 higher education institutions around the globe and more than 875000 students. As the Product Owner, I was responsible for market analysis and competition monitoring with a focus on portfolio management and pricing.
          </p>
          <ul className="list-disc list-inside text-gray-300">
             <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Marketing analysis of the international education industry.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Managed a team of four marketing analysts: including scheduling and strategic forecasting.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Maintained direct communication with stakeholders, providing regular reports and key updates.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold">.Net Developer | Woow! Brasil</h3>
            <div className="ml-4 flex space-x-2">
              <span className="bg-yellow-500 text-white py-1 px-2 rounded-lg text-xs font-medium">.NET Framework</span>
              <span className="bg-yellow-500 text-white py-1 px-2 rounded-lg text-xs font-medium">Microsoft SQL Server</span>
              <span className="bg-yellow-500 text-white py-1 px-2 rounded-lg text-xs font-medium">ASP.NET MVC</span>
            </div>
          </div>
          <p className="text-gray-400 mb-2">Sep 2011 - Sep 2012 (1 year and 1 month)</p>
          <p className="text-gray-400 mb-2">
            I developed projects using .Net Framework and Microsoft SQL Server database, facilitating integration with both back-end and front-end systems.
          </p>
          <ul className="list-disc list-inside text-gray-300">
             <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Developed and maintained projects utilizing front-end web technologies such as HTML, CSS, JavaScript, and C# as a back-end programming language.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Modeling and data manipulation in Microsoft SQL Server database.
            </li>
            <li className="flex items-center mb-1">
             <IoIosArrowRoundForward className="mr-2" />
             Utilized Asp.Net MVC 2 and Asp.Net MVC 3 as web applications.
            </li>
          </ul>
        </div>

      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Skills and Attributes</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Technologies:</h3>
          <ul className="list-disc list-inside text-gray-400 ml-4">
            <li>Spring Framework (Java), .NET (C#), Microservices, Protocols (SOAP, REST, WSDL, JSON), MS SQL Server, Git, Unit Test, DevOps, Jenkins (Cloudbees), Openshift, Azure, AWS (Certified), HTML, CSS, JavaScript.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Communication and Intercultural competence:</h3>
          <ul className="list-disc list-inside text-gray-400 ml-4">
            <li>Bilingual speaker of Portuguese and English, currently studying Spanish.</li>
            <li>Background of studying and living across three different countries, engaging with a range of cultures.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Teamwork:</h3>
          <ul className="list-disc list-inside text-gray-400 ml-4">
            <li>Collaborated with diverse teams to achieve collective goals.</li>
          </ul>
        </div>

      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Qualifications and Certificates</h2>

        <ul className="list-disc list-inside text-gray-400 ml-4">
          <li>2023 AWS Certified Cloud Practitioner</li>
          <li>2023 Diploma of Information Technology</li>
          <li>2012 Bachelor of Science Degree in Information Systems</li>
          <li>2011 Microsoft Certified Professional</li>
          <li>2010 English as a Second Language</li>
          <li>2007 Data Processing Technician Course</li>
        </ul>

      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Volunteering</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">2022 Volunteering at the Hare Krishna Temple</h3>
          <ul className="list-disc list-inside text-gray-400 ml-4">
            <li>Served food to guests and assisted in the kitchen to prepare food.</li>
            <li>Engaged with locals to build my English skills and immerse myself into the culture.</li>
          </ul>
        </div>

      </section>

    </div>
  );
}
