import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY;

export function authMiddleware(req, res, next) {
  if(req.method === 'OPTIONS') {
    next()
  }

  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next()
  } catch(e) {
    console.log(e) 
    return res.status(401).json({message: "User is not autherization"})
  } 
}
