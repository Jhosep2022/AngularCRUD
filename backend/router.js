const router = require('express').Router();
const conexion = require('./Config/conexion');

// Obtener todos los usuarios
router.get('/usuario', (req, res) => {
  let sql = 'SELECT * FROM usuario';
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

// Obtener un usuario por ID
router.get('/usuario/:id', (req, res) => {
  const { id } = req.params;
  let sql = 'SELECT * FROM usuario WHERE id = ?';
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

// Agregar un usuario
router.post('/usuario', (req, res) => {
  const { id, nombre, password, phone } = req.body;

  let sql = `INSERT INTO usuario (id, nombre, password, phone) VALUES ('${id}', '${nombre}', '${password}', '${phone}')`;
  conexion.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ status: 'Usuario agregado exitosamente',
    code: 200
   });
  });
});

// Eliminar un usuario
router.delete('/usuario/:id', (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM usuario WHERE id = '${id}'`;
  conexion.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ status: 'Usuario eliminado' });
  });
});

// Modificar un usuario
router.put('/usuario/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, password, phone } = req.body;

  let sql = `UPDATE usuario SET nombre = '${nombre}', password = '${password}', phone = '${phone}' WHERE id = '${id}'`;
  conexion.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ status: 'Usuario modificado' });
  });
});

module.exports = router;
