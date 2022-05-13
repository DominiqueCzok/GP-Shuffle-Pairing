const participants = [];

const newPersonInput = document.querySelector("#new-person");
const personList = document.querySelector("#person-list");
const createPairingsButton = document.querySelector("#create-pairings-button");
const sessions = document.querySelector("#sessions");

newPersonInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const newPerson = newPersonInput.value;
    participants.push(newPerson);
    newPersonInput.value = "";

    const newLi = document.createElement("li");
    newLi.textContent = newPerson;
    personList.appendChild(newLi);
  }
});

createPairingsButton.addEventListener("click", createPairings);

function createPairings() {
  const org = [...participants];
  const gedreht = participants.reverse();

  let arr1 = [];
  let arr2 = [];
  let result = [];
  let endResult = [];
  for (let k = 0; k < participants.length / 2; k++) {
    arr1.push(org[k]);
    arr2.push(gedreht[k]);
  }
  console.log(arr1);
  console.log(arr2);
  console.log(participants.length);

  for (let i = 0; i < participants.length - 1; i++) {
    result = [];
    endResult.push(result);
    for (let j = 0; j < participants.length / 2; j++) {
      result.push(arr1[j] + " - " + arr2[j]);
    }
    arr2.push(arr1[arr1.length - 1]);
    arr1.splice(-1);
    arr1.splice(1, 0, arr2[0]);
    arr2.shift();
  }
  console.log(endResult);

  endResult.forEach((element, index) => {
    const newDt = document.createElement("dt");
    const text = "Session " + (index + 1);
    const dtText = document.createTextNode(text);
    sessions.appendChild(newDt);
    newDt.append(dtText);
    element.forEach((e) => {
      const newDd = document.createElement("dd");
      newDt.append(newDd);
      newDd.append(e);
    });
  });
}

/*
    [1, 2, 3] // Letztes auf Ende von array 2
    [6, 5, 4] // Erstes Element auf pos 2 von array 1

    [1, 6, 2]
    [5, 4, 3]

    [1, 5, 6]
    [4, 3, 2]
  */