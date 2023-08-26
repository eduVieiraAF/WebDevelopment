export default function ClientHandler(req, res) {
    if (req.method === "GET") handleGet(req, res)
    else res.status(405).send("Not supported")
    
}

function handleGet(req, res) {
    res.status(200).json({
        name: 'Test API',
        id: '45rt8',
        req: req.method,
        contact: 'support@e-method.com'
    })
}