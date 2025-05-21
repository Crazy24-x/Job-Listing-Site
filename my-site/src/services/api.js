// src/services/api.js
// This is a mock API service for demonstration
const mockJobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: {
            name: 'TechCorp',
            logo: '/images/techcorp.png',
        },
        location: 'San Francisco, CA',
        salary: '$90,000 - $120,000',
        description: 'We are looking for a skilled Frontend Developer to join our team...',
        requirements: ['3+ years of React experience', 'Strong CSS skills', 'Experience with Redux'],
        postedTime: '2 days ago',
        tags: ['React', 'JavaScript', 'CSS', 'Frontend'],
        type: 'full-time',
    },
    // Add more mock jobs here...
];

const mockUsers = [
    {
        id: 1,
        email: 'test@example.com',
        password: 'password123', // In a real app, never store plain text passwords!
        name: 'Test User',
        token: 'mock-token-123',
    },
];

const api = {
    get: async (url) => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (url === '/jobs') {
            return { data: mockJobs };
        }

        throw new Error('Endpoint not found');
    },
    post: async (url, data) => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (url === '/auth/login') {
            const user = mockUsers.find(
                (u) => u.email === data.email && u.password === data.password
            );
            if (user) {
                return { data: { user: { id: user.id, email: user.email, name: user.name }, token: user.token } };
            }
            throw new Error('Invalid credentials');
        }

        if (url === '/auth/register') {
            const newUser = {
                id: mockUsers.length + 1,
                ...data,
                token: `mock-token-${Math.random().toString(36).substr(2)}`,
            };
            mockUsers.push(newUser);
            return { data: { user: { id: newUser.id, email: newUser.email, name: newUser.name }, token: newUser.token } };
        }

        throw new Error('Endpoint not found');
    },
};

export default api;