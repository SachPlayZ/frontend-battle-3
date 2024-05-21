import React from 'react';

const JobListingPage = () => {
  // Dummy job data
  const jobs = [
    {
      id: '1',
      company: 'PagerDuty',
      logo: 'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/PagerDuty.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
      title: 'Senior Director, Corporate Development',
      location: 'San Francisco',
      description: 'Identify and evaluate inorganic growth and expansion opportunities and potential targets, in collaboration with executive management, cross-functional teams, and relationships in the ecosystem.',
      URL: 'https://jobs.lever.co/pagerduty',
    },
    {
      id: '2',
      company: 'Postman',
      logo: 'https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png',
      title: 'Technical Writer',
      location: 'San Francisco',
      description: 'Contribute to documentation efforts for assigned products in-line with the overall content strategy.',
      URL: 'https://www.postman.com/jobs/#open-positions',
    },
    {
      id: '3',
      company: 'Patreon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/800px-Patreon_logo.svg.png',
      title: 'Director of Engineering, Membership Product',
      location: 'San Francisco',
      description: 'Lead multiple engineering teams that fall under the Membership Product group, which focuses on the growth and product development of Patreon’s core value proposition, a membership platform that delivers a delightful experience for creators, patrons, and fans -- all in service to fund the creative class.',
      URL: 'https://boards.greenhouse.io/patreon',
    },
    {
      id: '4',
      company: 'GitHub',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      title: 'Senior Frontend Engineer',
      location: 'Remote',
      description: 'Lead the development of the GitHub frontend application, ensuring high performance and scalability.',
      URL: 'https://jobs.github.com/',
    },
    {
      id: '5',
      company: 'Slack',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
      title: 'Product Manager',
      location: 'New York',
      description: 'Drive the product vision, strategy, and execution for Slack’s messaging platform.',
      URL: 'https://slack.com/careers',
    },
    {
      id: '6',
      company: 'Netflix',
      logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
      title: 'Senior Software Engineer - UI Platform',
      location: 'Los Gatos',
      description: 'Work on building scalable and performant UI platforms for Netflix applications.',
      URL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/800px-Patreon_logo.svg.png',
    },
    {
      id: '7',
      company: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png',
      title: 'Software Development Engineer',
      location: 'Seattle',
      description: 'Design, develop, and maintain scalable software solutions for Amazon’s web services.',
      URL: 'https://www.amazon.jobs/',
    },
    {
      id: '8',
      company: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
      title: 'Product Marketing Manager',
      location: 'Mountain View',
      description: 'Develop marketing strategies to promote Google’s products and services globally.',
      URL: 'https://careers.google.com/jobs/',
    },
    {
      id: '9',
      company: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      title: 'Data Scientist',
      location: 'Redmond',
      description: 'Apply machine learning techniques to analyze and extract insights from large datasets.',
      URL: 'https://careers.microsoft.com/',
    },
    {
      id: '10',
      company: 'Airbnb',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png',
      title: 'Senior UX Designer',
      location: 'San Francisco',
      description: 'Lead the design of intuitive and delightful user experiences for Airbnb’s platform.',
      URL: 'https://careers.airbnb.com/',
    },
  ];
  
  

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}...`;
    }
  };

  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {jobs.map(job => (
          <div key={job.id} className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src={job.logo} alt={job.company} className="h-8 w-8 mr-2 object-cover" />
              <h2 className="text-lg font-medium text-gray-50">{job.title}</h2>
            </div>
            <h3 className="text-base font-semibold text-gray-300">{job.company}</h3>
            <h3 className="text-base font-semibold text-gray-300">{job.location}</h3>
            <p className="text-sm text-gray-400">{truncateDescription(job.description, 100)}</p>
            <div className="flex mt-2">
              <a href={job.URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-transparent border border-purple-600 text-gray-700 hover:bg-purple-600 dark:text-gray-300 dark:hover:text-gray-50 hover:text-gray-900 py-2 px-4 rounded">
                Apply
              </a>
              <button className="ml-2 flex items-center gap-3 bg-transparent border border-purple-600 text-gray-700 hover:bg-purple-600 dark:text-gray-300 dark:hover:text-gray-50 hover:text-gray-900 py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;
