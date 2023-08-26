export default function handler(req, res) {
    res.status(200).json({
        id: req.query.code,
        name: ` Dude ${req.query.code}`,
        email: `dude${req.query.code}@e-method.com`
    })
}