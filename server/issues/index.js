const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.json({
      id: 1,
      title: 'this is a title',
      description: 'this is a descriptoin'
    });
  })
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


module.exports = router;