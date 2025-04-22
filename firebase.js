const firebaseConfig = {
    apiKey: "AIzaSyB0DQJ85Z3NbhElzS6rW611XX0VuYiODUE",
    authDomain: "sao-camilo-quiz.firebaseapp.com",
    databaseURL: "https://sao-camilo-quiz-default-rtdb.firebaseio.com", // ESSENCIAL!
    projectId: "sao-camilo-quiz",
    storageBucket: "sao-camilo-quiz.firebasestorage.app",
    messagingSenderId: "224854933415",
    appId: "1:224854933415:web:30b1e39d2f9a817f2f4082"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function enviarRespostasFirebase(dados) {
    const chave = `respostas/${dados.nome}_${dados.idade}`;
    firebase.database().ref(chave).set(dados)
      .then(() => console.log("✅ Dados enviados com sucesso"))
      .catch((error) => console.error("❌ Erro ao enviar dados:", error));
  }