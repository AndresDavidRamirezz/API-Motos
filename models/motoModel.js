const motoModel = {
	getAllMotos: (conn) => {
			return new Promise((resolve, reject) => {
					conn.query('SELECT * FROM apimysqlnodejsexpress.motos', (err, rows) => {
							if (err) reject(err);
							resolve(rows);
					});
			});
	},
	createMoto: (conn, data) => {
			return new Promise((resolve, reject) => {
					conn.query('INSERT INTO apimysqlnodejsexpress.motos SET ?', [data], (err, result) => {
							if (err) reject(err);
							resolve(result);
					});
			});
	},
	deleteMoto: (conn, id) => {
			return new Promise((resolve, reject) => {
					conn.query('DELETE FROM apimysqlnodejsexpress.motos WHERE id = ?', [id], (err, result) => {
							if (err) reject(err);
							resolve(result);
					});
			});
	},
	updateMoto: (conn, id, data) => {
			return new Promise((resolve, reject) => {
					conn.query('UPDATE apimysqlnodejsexpress.motos SET ? WHERE id = ?', [data, id], (err, result) => {
							if (err) reject(err);
							resolve(result);
					});
			});
	}
};

module.exports = motoModel;
