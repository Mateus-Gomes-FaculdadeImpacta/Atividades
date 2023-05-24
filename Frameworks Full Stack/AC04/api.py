from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dados.db'

db = SQLAlchemy(app)


class Dado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50), nullable=False)


@app.route('/api/dados', methods=['GET'])
def get_dados():
    dados = Dado.query.all()
    dados_json = []
    for dado in dados:
        dado_dict = {
            'id': dado.id,
            'nome': dado.nome
        }
        dados_json.append(dado_dict)
    return jsonify(dados_json)


@app.route('/api/dados', methods=['POST'])
def post_dados():
    novo_dado = request.json['dado']

    dado = Dado(campo=novo_dado)
    db.session.add(dado)
    db.session.commit()

    return jsonify({'message': 'Adicionado com sucesso!'})


if __name__ == '__main__':
    db.create_all()
    app.run()
