const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM ciclovias', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO ciclovias set ?', data, (err, customer) => {
      console.log(ciclovias)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id_ciclovia } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM ciclovias WHERE id_ciclovia = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_ciclovia } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE ciclovias set ? where id_ciclovia = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id_ciclovia } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM ciclovias WHERE id_ciclovia = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
