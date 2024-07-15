const express = require('express');
const { Bulletin } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const bulletins = await Bulletin.find({})
  res.send(bulletins);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const bulletin = await Bulletin.create({
    title: req.body.title,
    content: req.body.content
  })

  res.send(bulletin);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.bulletin = await Bulletin.findById(id)
  if (!req.bulletin) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.bulletin.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.bulletin);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { title, content } = req.body;
  if (title !== undefined) req.bulletin.title = title;
  if (content !== undefined) req.bulletin.content = content;
  await req.bulletin.save();
  res.send(req.bulletin);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
