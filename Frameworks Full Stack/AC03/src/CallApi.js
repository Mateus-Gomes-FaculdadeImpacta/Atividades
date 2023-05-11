import React, { useState, useEffect } from 'react';

function CallApi() {

    const [numberOfUsers, setNumberOfUsers] = useState(0)
    const [users, setUsers] = useState();

        function getAllUsers(){
        var request = new Request('http://localhost:5001/v1/aula/consultar', {mode: 'no-cors'});

        fetch(request).then(function(response) {
          setNumberOfUsers(response.json.length)
            // Convert to JSON
            console.log('TESTE');
        }).then(function(j) {
            // Yay, `j` is a JavaScript object
            console.log(JSON.stringify(j));
        }).catch(function(error) {
            console.log('Request failed', error)
        });

    }

    const getApiLocal = async () => {
        const res = await fetch("http://localhost:5001/v1/aula/consultar/", {
          method: 'GET',
          mode: 'no-cors',
          headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application-json', 
          },
          })
          .then(res => {
            console.log(res) 
            return res.json()
         })
          
        };

  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json());

    setUsers(response);
  };

  const data = {
    id: '1',
    nome: document.getElementById("nome")
};

  const cadastrarUser = async () => {
    const res = await fetch("http://127.0.0.1:5000/v1/aula/cadastrar", {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application-json',
      },
      })
      .then((res) => res.json())
      .then(function(response) {
        console.info('fetch()', response);
      return response;
    });
  }

  useEffect(() => {
    getApiData();
  }, []);
  
      return (
        <div className="CallApi">

        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Users</h4>
            <div className="btn">
              <input type="text" id="nome"/>
            <button onClick={cadastrarUser}>Cadastrar</button>
            <button onClick={getApiLocal}>Listar</button>
            <button type="button" onClick={(e) => getApiLocal()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
        
        <div className="app">
        {users && users.map((user) => (
          <div className="item-container">
            Id:{user.id}
          </div>
        ))}

    </div></div>
    );
}

export default CallApi;