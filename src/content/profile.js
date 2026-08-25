/**
 * profile.js — identity, contact, and the handful of numbers worth leading with.
 * Everything the hero, nav, footer and resume header render comes from here.
 */

export const profile = {
  name: 'Aditya Kulkarni',
  first: 'Aditya',
  last: 'Kulkarni',

  role: 'Founding Software Engineer',
  roleAlt: 'AI Scientist',
  company: 'NaviNetics AI',
  companyNote: 'a Mayo Clinic company',
  location: 'Rochester, Minnesota',
  available: 'Open to conversations about medical imaging, applied AI, and systems engineering.',

  /* The one sentence the whole site is built to earn. */
  thesis: 'I build planning and navigation software for stereotactic neurosurgery.',

  /* Hero standfirst — three sentences, no more. */
  lede: 'Founding engineer at NaviNetics AI, a Mayo Clinic company, where I own the architecture of a stereotactic planning and navigation suite. The work centres on multimodal fusion across CT, MR and 3D surface scans, at the accuracy required for deep brain stimulation and external ventricular drain procedures. Previously: contract intelligence at the University of Texas System, LLM evaluation at Boehringer Ingelheim, and computer vision research at UT Dallas.',

  /* Short bio used by the resume view. */
  bio: 'Software engineer and AI scientist working on stereotactic and functional neurosurgery software. Owns the architecture of a Class B/C SaMD planning and navigation suite under IEC 62304, and leads research into multimodal image fusion, learnable registration, and markerless surface-based patient registration. Previously built agentic RAG systems, LLM evaluation frameworks, and production ML pipelines across pharma, the public sector, and ad-tech.',

  email: 'adityavkulkarni0999@gmail.com',
  phone: '+1 (945) 527-5186',
  linkedin: 'https://www.linkedin.com/in/adityavkulkarni',
  github: 'https://www.github.com/adityavkulkarni',
  website: 'https://adityavkulkarni.github.io',
  resumePdf: '/assets/Aditya_Kulkarni_resume.pdf',

  /* Load-bearing numbers. Each one is defensible — keep it that way. */
  stats: [
    { value: '5', unit: 'yrs', label: 'Building production software', axis: 'ap' },
    { value: '4', unit: '', label: 'Industries shipped in', axis: 'lr' },
    { value: '2', unit: '', label: 'Peer-reviewed publications', axis: 'edu' },
  ],
};

/**
 * How a role counted. Hue is the only thing distinguishing them on the
 * trajectory, so keep these four distinct and keep the labels plain.
 */
export const axes = {
  si: { key: 'si', label: 'Full-time', hex: '#4C7DFF' },
  ap: { key: 'ap', label: 'Internship', hex: '#3DDC97' },
  lr: { key: 'lr', label: 'Research', hex: '#FF3B6B' },
  edu: { key: 'edu', label: 'Education', hex: '#C9CFEA' },
};

export const publications = [
  {
    title: 'A Survey on Various Available Object Detection Models and Application in Automatic Licence Plate Detection',
    venue: 'Peer-reviewed publication',
  },
  {
    title: 'Tweet Sentiment Analysis: A Study and Comparison of Various Approaches and Classification Algorithms',
    venue: 'Peer-reviewed publication',
  },
];

export const certifications = [
  {
    name: 'Data Science Professional Certificate',
    issuer: 'IBM · Coursera',
    year: '2024',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/WRS7YJPCRKST',
  },
  { name: 'Machine Learning with Apache Spark', issuer: 'IBM', year: '2024' },
  { name: 'Harnessing the Power of Data with Power BI', issuer: 'Microsoft', year: '2020' },
  { name: 'MTA: Introduction to Programming Using JavaScript', issuer: 'Microsoft', year: '2019' },
];
