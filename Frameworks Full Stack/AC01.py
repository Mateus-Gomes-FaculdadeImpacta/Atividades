from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def main():
  resultado = 'Digite as notas na URL'

  firstNote = request.args.get('firstNote')
  secondNote = request.args.get('secondNote')

  if firstNote and secondNote:

    firstNote = float(firstNote)
    secondNote = float(secondNote)

    media = (firstNote + secondNote) / 2
    resultado = (f"Primeira nota: {firstNote} <p> Segunda nota: {secondNote} <p> Media: {media}")

  return resultado


if __name__ == '__main__':
  app.run(debug=True)
