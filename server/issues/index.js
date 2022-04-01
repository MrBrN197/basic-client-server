const router = require('express').Router();

router.route('/')
  .post((req, res) => {
    const { body } = req;
    console.log('Adding new Issue >', body);
    res.status(201).json({})
  })
  .patch((req, res) => {
    const { body } = req;
    console.log('Update Issue >', body);
    res.json(body)
  })
  .delete((req, res) => {
    const { body } = req;
    console.log('deleting')
    console.log('Deletign Issue#', body.id);
    res.json(body)
  })

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    title: 'this is a title',
    description: 'this is a descriptoin'
  });
})


module.exports = router;