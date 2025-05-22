// src/services/api.js
const mockUsers = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password123',
        age: 30,
        city: 'New York',
        region: 'NY',
        country: 'USA',
        address: '123 Main St',
        phoneNumber: '555-123-4567',
        token: 'mock-token-123',
    },
];

const mockJobs = [
    {
        id: 1,
        title: 'Frontend Developer (React)',
        company: {
            name: 'TechCorp',
            logo: 'images.png',
        },
        location: 'San Francisco, CA',
        salary: '$90,000 - $120,000',
        description: 'We are looking for a skilled Frontend Developer...',
        requirements: ['3+ years of React', 'CSS expertise'],
        postedTime: '2 days ago',
        tags: ['React', 'JavaScript', 'Frontend'],
        type: 'full-time',
    },
    {
        id: 2,
        title: 'UX Designer',
        company: {
            name: 'DesignHub',
            logo: 'images2.jpeg',
        },
        location: 'Remote',
        salary: '$80,000 - $100,000',
        description: 'Join our design team to create beautiful interfaces...',
        requirements: ['Figma proficiency', 'Portfolio required'],
        postedTime: '1 week ago',
        tags: ['UI/UX', 'Figma', 'Design'],
        type: 'full-time',
    },
    {
        id: 3,
        title: 'Backend Developer',
        company: {
            name: 'DataSystems',
            logo: 'images3.avif'
        },
        location: 'Chicago, IL',
        salary: '$110,000 - $140,000',
        tags: ['Node.js', 'Python', 'AWS'],
        type: 'full-time'
    },
    {
        id: 6,
        title: 'Registered Nurse',
        company: {
            name: 'City Hospital',
            logo: '/images/hospital.png',
            industry: 'Healthcare'
        },
        location: 'New York, NY',
        salary: '$75,000 - $95,000',
        description: 'Provide patient care in hospital setting...',
        requirements: ['RN License', 'BLS Certification'],
        postedTime: '3 days ago',
        tags: ['Healthcare', 'Nursing'],
        type: 'Full-time'
    },
    {
        id: 7,
        title: 'Financial Analyst',
        company: {
            name: 'Global Finance',
            logo: '/images/finance.png',
            industry: 'Finance'
        },
        location: 'Chicago, IL',
        salary: '$85,000 - $110,000',
        tags: ['Finance', 'Accounting', 'Hybrid'],
        postedTime: '1 week ago'
    },
    {
        id: 8,
        title: 'Marketing Manager',
        company: {
            name: 'AdvertisePro',
            logo: '/images/marketing.png',
            industry: 'Marketing'
        },
        location: 'Remote',
        salary: '$90,000 - $120,000',
        tags: ['Marketing', 'Digital', 'Remote'],
        postedTime: '2 days ago'
    },
    {
        id: 9,
        title: 'Construction Supervisor',
        company: {
            name: 'BuildRight Inc',
            logo: '/images/construction.png',
            industry: 'Construction'
        },
        location: 'Houston, TX',
        salary: '$70,000 - $90,000',
        tags: ['Construction', 'Management'],
        postedTime: '5 days ago'
    },
    {
        id: 10,
        title: 'Hotel Manager',
        company: {
            name: 'Grand Hotels',
            logo: '/images/hotel.png',
            industry: 'Hospitality'
        },
        location: 'Miami, FL',
        salary: '$60,000 - $80,000',
        tags: ['Hospitality', 'Management'],
        postedTime: '1 day ago'
    }
    // Add more mock jobs as needed
];

const api = {
    // Auth endpoints
    post: async (url, data) => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (url === '/auth/login') {
            const user = mockUsers.find(
                (u) => u.email === data.email && u.password === data.password
            );
            if (user) {
                return {
                    data: {
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                        },
                        token: user.token
                    }
                };
            }
            throw { response: { data: { message: 'Invalid credentials' } } };
        }

        if (url === '/auth/register') {
            const emailExists = mockUsers.some(u => u.email === data.email);
            if (emailExists) {
                throw { response: { data: { message: 'Email already exists' } } };
            }

            const newUser = {
                id: mockUsers.length + 1,
                ...data,
                token: `mock-token-${Math.random().toString(36).substr(2)}`,
            };
            mockUsers.push(newUser);
            return {
                data: {
                    user: {
                        id: newUser.id,
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        email: newUser.email,
                    },
                    token: newUser.token
                }
            };
        }

        throw { response: { data: { message: 'Endpoint not found' } } };
    },

    // Jobs endpoints
    get: async (url) => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (url === '/jobs') {
            return { data: mockJobs };
        }

        throw new Error('Endpoint not found');
    }
};

export default api;