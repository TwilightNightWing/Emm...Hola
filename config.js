import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
      apiKey: "AIzaSyB6gC3_smKnXh5FRqtlJlLAM1zVp1rQfs4",
     authDomain: "timbre-inalambrico-ebf47.firebaseapp.com",
      databaseURL: "https://timbre-inalambrico-ebf47-default-rtdb.firebaseio.com",
       projectId: "timbre-inalambrico-ebf47", 
       storageBucket: "timbre-inalambrico-ebf47.appspot.com",
        messagingSenderId: "724506734380", 
        appId: "1:724506734380:web:c021878983ce0ffd91c689", 
        measurementId: "G-2MNBZLCXXT"

};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
