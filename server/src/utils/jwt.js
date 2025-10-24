import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
    return jwt.sign({ id: userId },
        process.env.JWT_SECRET || 'cinetrack_secret_key_change_in_production', { expiresIn: '7d' }
    );
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || 'cinetrack_secret_key_change_in_production');
    } catch (error) {
        return null;
    }
};