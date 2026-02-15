// EXPANDED EXAM DATABASE
// Copy and paste these exams into your exam-portal.html file to expand your database

const expandedExamData = {
    tamilnadu: [
        // Existing exams...
        {
            id: 'tn4',
            name: 'TNAU Admission',
            type: 'Agriculture Entrance',
            eligibility: '12th pass with Physics, Chemistry, Biology/Agriculture',
            description: 'Tamil Nadu Agricultural University entrance for agriculture courses',
            syllabus: 'Physics, Chemistry, Biology, Agriculture basics',
            importantDates: 'Application: March-April, Exam: May',
            studyMaterials: ['TNAU Guide Books', 'Agriculture Handbooks', 'Previous Year Papers'],
            colleges: ['TNAU Coimbatore', 'Agricultural College Madurai', 'Horticultural College'],
            coachingCenters: ['Agri Academy Chennai', 'Green Career Institute']
        },
        {
            id: 'tn5',
            name: 'TN TET',
            type: 'Teacher Eligibility',
            eligibility: 'Graduate/Diploma in Education',
            description: 'Tamil Nadu Teacher Eligibility Test for school teachers',
            syllabus: 'Child Development, Teaching Methodology, Language, Mathematics',
            importantDates: 'Notification: Usually twice a year',
            studyMaterials: ['TN TET Guide', 'NCERT Books', 'Previous Papers'],
            colleges: ['N/A - Teaching Certification'],
            coachingCenters: ['Teachers Academy Chennai', 'TET Coaching Center']
        },
        {
            id: 'tn6',
            name: 'Tamil Nadu Police Exam',
            type: 'Police Recruitment',
            eligibility: '12th pass, Age: 18-30 years, Physical standards apply',
            description: 'Tamil Nadu Police recruitment for constable and SI positions',
            syllabus: 'General Knowledge, Aptitude, Tamil/English, Physical Test',
            importantDates: 'Varies - check TNUSRB website',
            studyMaterials: ['Police Exam Guides', 'Current Affairs', 'Physical Training Guides'],
            colleges: ['N/A - Direct Recruitment'],
            coachingCenters: ['Police Academy Chennai', 'Uniformed Services Institute']
        }
    ],
    
    kerala: [
        // Existing exams...
        {
            id: 'kl4',
            name: 'Kerala LLB Entrance',
            type: 'Law Entrance',
            eligibility: 'Graduate in any discipline, Minimum 45% marks',
            description: 'Entrance examination for LLB 3-year course admission',
            syllabus: 'Legal Aptitude, General Knowledge, Logical Reasoning, English',
            importantDates: 'Application: May, Exam: June',
            studyMaterials: ['Law Entrance Guides', 'Legal Awareness Books', 'Current Affairs'],
            colleges: ['Govt Law College Ernakulam', 'Trivandrum Law College'],
            coachingCenters: ['Law Academy Kochi', 'Legal Edge Coaching']
        },
        {
            id: 'kl5',
            name: 'Kerala SET',
            type: 'Eligibility Test',
            eligibility: 'Master\'s degree with 55% marks',
            description: 'State Eligibility Test for Assistant Professor positions',
            syllabus: 'Subject-specific, Teaching Aptitude, Research Methodology',
            importantDates: 'Usually conducted once a year',
            studyMaterials: ['SET/NET Books', 'Subject Reference Books', 'Previous Papers'],
            colleges: ['Universities in Kerala'],
            coachingCenters: ['Academic Coaching Centers', 'Research Institutes']
        },
        {
            id: 'kl6',
            name: 'Kerala Police Constable',
            type: 'Police Recruitment',
            eligibility: '12th pass, Age: 18-25 years, Physical standards',
            description: 'Kerala Police recruitment examination',
            syllabus: 'General Knowledge, Kerala Affairs, Mathematics, English',
            importantDates: 'Check official notifications',
            studyMaterials: ['Police Exam Books', 'Kerala Manual', 'Current Affairs'],
            colleges: ['N/A - Direct Recruitment'],
            coachingCenters: ['Kerala Police Academy', 'Defence Academy']
        }
    ],
    
    karnataka: [
        // Existing exams...
        {
            id: 'ka5',
            name: 'Karnataka Bank Exam',
            type: 'Banking Recruitment',
            eligibility: 'Graduate degree, Age: 21-30 years',
            description: 'Karnataka Bank recruitment for Clerk and PO positions',
            syllabus: 'Reasoning, Quantitative Aptitude, English, Computer Knowledge',
            importantDates: 'Various notifications throughout year',
            studyMaterials: ['Banking Awareness Books', 'Quantitative Aptitude', 'English Grammar'],
            colleges: ['N/A - Banking Recruitment'],
            coachingCenters: ['Banking Academy Bangalore', 'Career Power']
        },
        {
            id: 'ka6',
            name: 'Karnataka TET',
            type: 'Teacher Eligibility',
            eligibility: 'Diploma/Degree in Education',
            description: 'Karnataka Teacher Eligibility Test',
            syllabus: 'Child Psychology, Teaching Methods, Language, Content Knowledge',
            importantDates: 'Conducted annually',
            studyMaterials: ['KTET Books', 'Teaching Methods Guides', 'Subject Books'],
            colleges: ['N/A - Teaching Certification'],
            coachingCenters: ['Teachers Training Institute', 'Education Academy']
        },
        {
            id: 'ka7',
            name: 'Karnataka Police SI',
            type: 'Police Recruitment',
            eligibility: 'Graduate degree, Age: 21-25 years, Physical standards',
            description: 'Sub-Inspector of Police recruitment',
            syllabus: 'General Studies, Aptitude, Karnataka History, Physical Test',
            importantDates: 'Check KSP website',
            studyMaterials: ['Police SI Books', 'Current Affairs', 'Physical Training'],
            colleges: ['N/A - Direct Recruitment'],
            coachingCenters: ['Police Training Academy', 'Competitive Exams Center']
        }
    ]
};

// ADDITIONAL STATES TO ADD
// Copy these when expanding to more states

const additionalStates = {
    
    andhra_pradesh: [
        {
            id: 'ap1',
            name: 'AP EAMCET',
            type: 'Engineering/Medical Entrance',
            eligibility: '12th with PCM/PCB, Minimum 45% aggregate',
            description: 'Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test',
            syllabus: 'Physics, Chemistry, Mathematics/Biology',
            importantDates: 'Application: March, Exam: April-May',
            studyMaterials: ['EAMCET Previous Papers', 'NCERT Books', 'State Board Books'],
            colleges: ['JNTU Kakinada', 'Andhra University', 'SVU Tirupati'],
            coachingCenters: ['Sri Chaitanya', 'Narayana', 'FIITJEE Vijayawada']
        },
        {
            id: 'ap2',
            name: 'APPSC Group 1',
            type: 'State Service',
            eligibility: 'Graduate degree, Age: 21-42 years',
            description: 'Andhra Pradesh Public Service Commission Group 1 services',
            syllabus: 'General Studies, Aptitude, AP History and Culture',
            importantDates: 'Notification: Usually annual',
            studyMaterials: ['APPSC Materials', 'Current Affairs', 'State Manual'],
            colleges: ['N/A - Government Service'],
            coachingCenters: ['Chanakya IAS', 'ALS IAS Vijayawada']
        }
    ],
    
    telangana: [
        {
            id: 'ts1',
            name: 'TS EAMCET',
            type: 'Engineering/Medical Entrance',
            eligibility: '12th with PCM/PCB, Minimum 45% aggregate',
            description: 'Telangana State Engineering, Agriculture and Medical entrance',
            syllabus: 'Physics, Chemistry, Mathematics/Biology - 11th & 12th',
            importantDates: 'Application: March, Exam: May',
            studyMaterials: ['TS EAMCET Books', 'Previous Year Papers', 'NCERT Books'],
            colleges: ['JNTU Hyderabad', 'OU College of Engineering', 'NIT Warangal'],
            coachingCenters: ['Sri Chaitanya Hyderabad', 'Narayana', 'FIITJEE']
        },
        {
            id: 'ts2',
            name: 'TSPSC Group 1',
            type: 'State Service',
            eligibility: 'Graduate degree, Age: 18-34 years',
            description: 'Telangana State Public Service Commission examination',
            syllabus: 'General Studies, Telangana History, Aptitude',
            importantDates: 'Annual notification',
            studyMaterials: ['TSPSC Study Material', 'Telangana Handbook', 'Current Affairs'],
            colleges: ['N/A - Government Service'],
            coachingCenters: ['La Excellence IAS', 'Ace Academy Hyderabad']
        }
    ],
    
    maharashtra: [
        {
            id: 'mh1',
            name: 'MHT CET',
            type: 'Engineering/Pharmacy Entrance',
            eligibility: '12th with PCM/PCB, Minimum 45% aggregate',
            description: 'Maharashtra Common Entrance Test for professional courses',
            syllabus: 'Physics, Chemistry, Mathematics/Biology',
            importantDates: 'Application: March, Exam: May',
            studyMaterials: ['MHT CET Books', 'HSC Board Books', 'Previous Papers'],
            colleges: ['VJTI Mumbai', 'COEP Pune', 'ICT Mumbai'],
            coachingCenters: ['FIITJEE Mumbai', 'Vidyalankar', 'IIT Academy']
        },
        {
            id: 'mh2',
            name: 'MPSC Exam',
            type: 'State Service',
            eligibility: 'Graduate degree, Age: 19-38 years',
            description: 'Maharashtra Public Service Commission examination',
            syllabus: 'General Studies, Maharashtra History, Aptitude',
            importantDates: 'Multiple notifications yearly',
            studyMaterials: ['MPSC Materials', 'Marathi Sahitya', 'Current Affairs'],
            colleges: ['N/A - Government Service'],
            coachingCenters: ['Chanakya Mandal Pune', 'Unique Academy Mumbai']
        }
    ],
    
    west_bengal: [
        {
            id: 'wb1',
            name: 'WBJEE',
            type: 'Engineering/Medical Entrance',
            eligibility: '12th with PCM/PCB, Minimum 45% aggregate',
            description: 'West Bengal Joint Entrance Examination',
            syllabus: 'Physics, Chemistry, Mathematics',
            importantDates: 'Application: March, Exam: April',
            studyMaterials: ['WBJEE Previous Papers', 'Reference Books', 'NCERT'],
            colleges: ['Jadavpur University', 'IIEST Shibpur', 'Calcutta University'],
            coachingCenters: ['Aakash Kolkata', 'Career Point', 'Resonance']
        },
        {
            id: 'wb2',
            name: 'WBPSC Civil Service',
            type: 'State Service',
            eligibility: 'Graduate degree, Age: 21-36 years',
            description: 'West Bengal Public Service Commission examination',
            syllabus: 'General Studies, Bengal History, Current Affairs',
            importantDates: 'Annual notification',
            studyMaterials: ['WBPSC Books', 'Bengal Manual', 'History Books'],
            colleges: ['N/A - Government Service'],
            coachingCenters: ['Impulse IAS Kolkata', 'Astitwa IAS']
        }
    ],
    
    rajasthan: [
        {
            id: 'rj1',
            name: 'JEE Mains (Rajasthan Colleges)',
            type: 'Engineering Entrance',
            eligibility: '12th with PCM, Minimum 75% in Board',
            description: 'For admission to engineering colleges in Rajasthan',
            syllabus: 'Physics, Chemistry, Mathematics - JEE Pattern',
            importantDates: 'January & April sessions',
            studyMaterials: ['JEE Books', 'NCERT', 'Previous Papers'],
            colleges: ['MNIT Jaipur', 'RTU Kota', 'BITS Pilani'],
            coachingCenters: ['Allen Kota', 'Resonance Kota', 'Career Point']
        },
        {
            id: 'rj2',
            name: 'RPSC RAS',
            type: 'State Service',
            eligibility: 'Graduate degree, Age: 21-40 years',
            description: 'Rajasthan Administrative Service examination',
            syllabus: 'General Knowledge, Rajasthan GK, Aptitude',
            importantDates: 'Annual notification',
            studyMaterials: ['RAS Study Material', 'Rajasthan Manual', 'Current Affairs'],
            colleges: ['N/A - Government Service'],
            coachingCenters: ['Abhigyan IAS Jaipur', 'Lakshya IAS']
        }
    ],
    
    uttar_pradesh: [
        {
            id: 'up1',
            name: 'UPSEE (AKTU)',
            type: 'Engineering Entrance',
            eligibility: '12th with PCM, Minimum 45% aggregate',
            description: 'UP State Entrance Examination for technical courses',
            syllabus: 'Physics, Chemistry, Mathematics',
            importantDates: 'Application: March-April, Exam: May',
            studyMaterials: ['UPSEE Books', 'UP Board Books', 'Previous Papers'],
            colleges: ['IET Lucknow', 'HBTI Kanpur', 'KNIT Sultanpur'],
            coachingCenters: ['Aakash Lucknow', 'FIITJEE Noida', 'Career Launcher']
        },
        {
            id: 'up2',
            name: 'UPPSC PCS',
            type: 'State Service',
            eligibility: 'Graduate degree, Age: 21-40 years',
            description: 'UP Provincial Civil Service examination',
            syllabus: 'General Studies, UP GK, Current Affairs',
            importantDates: 'Annual notification',
            studyMaterials: ['UPPSC Materials', 'UP Manual', 'History Books'],
            colleges: ['N/A - Government Service'],
            coachingCenters: ['Chahal Academy Prayagraj', 'KSG India Noida']
        }
    ]
};

// NATIONAL LEVEL EXAMS
// Add these as a separate category

const nationalExams = [
    {
        id: 'nat1',
        name: 'JEE Main',
        type: 'Engineering Entrance',
        eligibility: '12th with PCM, 75% in Board exams (65% for SC/ST)',
        description: 'National level entrance for NITs, IIITs and other central institutions',
        syllabus: 'Physics, Chemistry, Mathematics - NCERT based',
        importantDates: 'January & April sessions, Registrations in November & February',
        studyMaterials: ['NCERT Books', 'JEE Main Previous Papers', 'Reference Books'],
        colleges: ['NITs across India', 'IIITs', 'GFTIs', 'State Engineering Colleges'],
        coachingCenters: ['Allen Kota', 'Resonance', 'FIITJEE', 'Aakash']
    },
    {
        id: 'nat2',
        name: 'JEE Advanced',
        type: 'Engineering Entrance',
        eligibility: 'Qualified JEE Main, Top 2.5 lakh candidates',
        description: 'For admission to 23 IITs',
        syllabus: 'Advanced Physics, Chemistry, Mathematics',
        importantDates: 'Usually in May-June',
        studyMaterials: ['Advanced Problem Books', 'IIT Papers', 'Coaching Materials'],
        colleges: ['23 IITs across India'],
        coachingCenters: ['Allen', 'Resonance', 'FIITJEE', 'Vidyamandir']
    },
    {
        id: 'nat3',
        name: 'NEET UG',
        type: 'Medical Entrance',
        eligibility: '12th with PCB, Minimum 50% (40% for SC/ST/OBC)',
        description: 'National Eligibility cum Entrance Test for medical courses',
        syllabus: 'Physics, Chemistry, Biology (Botany & Zoology)',
        importantDates: 'Application: March-April, Exam: May',
        studyMaterials: ['NCERT Biology', 'NEET Previous Papers', 'Reference Books'],
        colleges: ['All Medical Colleges in India', 'AIIMS', 'JIPMER'],
        coachingCenters: ['Aakash', 'Allen', 'Resonance', 'Career Point']
    },
    {
        id: 'nat4',
        name: 'UPSC Civil Services',
        type: 'Central Service',
        eligibility: 'Graduate degree, Age: 21-32 years (relaxation for reserved categories)',
        description: 'Indian Administrative Service and allied services',
        syllabus: 'Prelims, Mains (9 papers), Interview',
        importantDates: 'Notification: February, Prelims: May-June',
        studyMaterials: ['NCERT Books', 'Standard Reference Books', 'Current Affairs'],
        colleges: ['N/A - Direct Central Government Service'],
        coachingCenters: ['Vajiram and Ravi Delhi', 'Drishti IAS', 'Vision IAS', 'Chanakya IAS']
    },
    {
        id: 'nat5',
        name: 'CAT',
        type: 'MBA Entrance',
        eligibility: 'Graduate degree with 50% marks',
        description: 'Common Admission Test for IIMs and top B-schools',
        syllabus: 'Quantitative Ability, VARC, Data Interpretation & Logical Reasoning',
        importantDates: 'Registration: August, Exam: November',
        studyMaterials: ['CAT Preparation Books', 'Mock Tests', 'Previous Papers'],
        colleges: ['20 IIMs', 'Top B-schools across India'],
        coachingCenters: ['TIME', 'IMS', 'Career Launcher', 'Cracku']
    },
    {
        id: 'nat6',
        name: 'CLAT',
        type: 'Law Entrance',
        eligibility: '12th pass with 45% aggregate (40% for SC/ST)',
        description: 'Common Law Admission Test for NLUs',
        syllabus: 'English, Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative',
        importantDates: 'Application: January-May, Exam: December',
        studyMaterials: ['Legal Aptitude Books', 'Current Affairs Magazines', 'Mock Tests'],
        colleges: ['23 National Law Universities'],
        coachingCenters: ['Career Launcher', 'LegalEdge', 'CL', 'IMS']
    }
];

// HOW TO ADD THESE TO YOUR APPLICATION:
// 1. Open exam-portal.html
// 2. Find the examData object (around line 270)
// 3. Replace or extend with this data
// 4. For national exams, create a new category in state selector
// 5. Update the state selector UI to include national exams option
