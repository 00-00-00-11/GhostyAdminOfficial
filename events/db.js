const MySQL = require('mysql');
let connection;

class Database {
  constructor(config) {
    this.config = config;

    connection = this.connect();
  }

  get getConnection() {
    return connection;
  }

  connect() {
    try {
      const tempConnection =  MySQL.createPool({
        connectionLimit: this.config.connection || 20,
        host: this.config.host,
        user: this.config.user,
        password: this.config.password,
        database: this.config.database,
      });
      return tempConnection;
    } catch (err) {
      console.error(err);
    }
  }

  prepare(statement) {
    if (typeof statement != 'string') new Error('Statement must be a string');

    const amount = (statement.match(/\?/g) || []).length;
    const preparedStatement = {
      statement,
      amount,
      run: function(...variables) {
        Database.run(statement, amount, variables);
      },
      get: function(...variables) {
        return Database.get(statement, amount, variables);
      },
      all: function(...variables) {
        return Database.all(statement, amount, variables);
      },
    };

    return preparedStatement;
  }

  static query(statement, amount, variables) {
    return new Promise((resolve, reject) => {
      if (!statement) reject(new Error('No preparedStatement found'));
      if (amount !== variables.length) reject(new Error(`Prepared statement expected ${amount} escaped variables, but only ${variables.length} was provided`));

      connection.query(statement, variables, (error, results) => {
        if (error) reject(error);
        try {
          const rawPacket = (results) => ({ ...results });
          const object = results.map(rawPacket);
          resolve(object);
        } catch (ignored) {
          resolve(undefined);
        }
      });
    });
  }

  static run(statement, amount, variables) {
    return Database.query(statement, amount, variables);
  }

  static async get(statement, amount, variables) {
    try {
      const result = await Database.query(statement, amount, variables);
      return result ? result[0] : undefined;
    } catch (error) {
      throw error;
    }
  }

  static async all(statement, amount, variables) {
    try {
      const result = await Database.query(statement, amount, variables);
      return result || undefined;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Database;