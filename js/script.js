const populate = async (amount, currency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_6Ui8C2aKReWdkkMaOcdZln6q6mbERTeb73jPPJHp&base_currency=" +
    currency;
  let response = await fetch(url);
  let rJson = await response.json();
  document.querySelector(".output").style.display = "block";

  for (let key of Object.keys(rJson["data"])) {
    myStr += `  <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(
                          rJson["data"][key]["value"] * amount
                        )}</td>
                    </tr>
    `;
  }

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  console.log("clicked", amount);

  populate(amount, currency);
});
