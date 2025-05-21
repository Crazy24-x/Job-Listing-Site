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
            logo: '/images/techcorp.png',
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
            logo: '/images/designhub.png',
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
            logo: '/images/datasystems.png'
        },
        location: 'Chicago, IL',
        salary: '$110,000 - $140,000',
        tags: ['Node.js', 'Python', 'AWS'],
        type: 'full-time'
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