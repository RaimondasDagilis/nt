const state = { properties: [], btn1: 1, btn2: 1, btn3: 1 };
fetch("https://robust-safe-crafter.glitch.me/")
  .then((Response) => Response.json())
  .then((data) => {
    drawCards(data);
    state.properties = data;
  });

function setButtons(_btn1, _btn2, _btn3) {
  state.btn1 *= _btn1;
  if (state.btn1 == -1) {
    document.getElementById("Vno").className = "secondary-btn";
  } else {
    document.getElementById("Vno").className = "secondary-btn active-btn";
  }
  state.btn2 *= _btn2;
  if (state.btn2 == -1) {
    document.getElementById("Kun").className = "secondary-btn";
  } else {
    document.getElementById("Kun").className = "secondary-btn active-btn";
  }
  state.btn3 *= _btn3;
  if (state.btn3 == -1) {
    document.getElementById("Klp").className = "secondary-btn";
  } else {
    document.getElementById("Klp").className = "secondary-btn active-btn";
  }
  dataFilter();
}

function dataFilter() {
  const FilterProperties = state.properties.filter(
    (element) =>
      (element.city === "Vilnius" && state.btn1 === 1) ||
      (element.city === "Kaunas" && state.btn2 === 1) ||
      (element.city === "Klaipeda" && state.btn3 === 1)
  );
  drawCards(FilterProperties);
}

function drawCards(properties) {
  const cardWrapper = document.querySelector(".card-wrapper");
  cardWrapper.innerHTML = "";
  properties.forEach((element) => {
    const card = document.createElement("div");
    const divImage = document.createElement("div");
    const cardImg = document.createElement("img");
    const divPara = document.createElement("div");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const paragraph3 = document.createElement("p");
    card.append(divImage, divPara);
    divImage.append(cardImg);
    divPara.append(paragraph1, paragraph2, paragraph3);
    cardWrapper.append(card);

    card.className = "card";
    divImage.className = "img";
    divPara.className = "card-footer";
    paragraph1.className = "price";
    paragraph2.className = "city";
    paragraph3.className = "info";
    paragraph1.textContent = element.price;
    paragraph2.textContent = element.city;
    paragraph3.textContent = element.description;
    cardImg.src = element.image;
  });
}
