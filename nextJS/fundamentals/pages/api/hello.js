// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    title: 'Test API' ,
    method: req.method,
    params: JSON.stringify(req.query),
    name: req.query.name,
    lang: req.query.lang
  })
}
