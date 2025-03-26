//Provo a descrivere quello che faccio a parole mie

// Faccio entrare il form dentro il file script
const form = document.querySelector("form");

// creo una funzione che esegua quello che gli richiedo quando invio il form
form.onsubmit = element => {
  // questo fa in modo che la pagina non faccia un refresh
  element.preventDefault();

  //dichiaro la variabile che prende i valori che inserisco nell'input
  const taskInput = document.getElementById("task");

  //creo un altra variabile che contenga il valore di ognuna delle variabili del mio input
  const taskData = taskInput.value;

  // faccio visualizzare in console il fatto che abbia inviato il form e il suo relativo valore
  console.log("Submit", taskData);

  //faccio entare il div che ho creato nel html nel file script
  const contentArea = document.getElementById("contentArea");

  //creo un nuovo div che sarà inserito nel div con id qua sopra
  const taskDiv = document.createElement("div");

  //gli aggiungo una classe creata
  taskDiv.classList.add("taskDiv");

  //creo gli elementi che faranno visualizzare gli input inseriti
  const unList = document.createElement("ul");
  const list = document.createElement("li");

  //creo una classe anche alla lista
  unList.classList.add("ul");
  list.classList.add("li");

  //gli inseriso il contenuto dell'input del form
  list.innerText = taskInput.value;

  list.onclick = () => {
    if (list.style.textDecoration === "line-through") {
      list.style.textDecoration = "none";
    } else {
      list.style.textDecoration = "line-through";
    }
  };

  unList.appendChild(list);
  taskDiv.appendChild(unList);
  contentArea.appendChild(taskDiv);
};
