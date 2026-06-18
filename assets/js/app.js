document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  const btnFind = document.getElementById("btn-find");
  btnFind.addEventListener("click", () => {
    const vIn = parseFloat(document.getElementById("vin-find").value);
    const vOut = parseFloat(document.getElementById("vout-find").value);

    if (!vIn || !vOut || vIn <= 0 || vOut <= 0) {
      alert("Please enter voltages greater than 0.");
      return;
    }

    const target = vOut / vIn;
    let bestGreen = 1;
    let bestYellow = 1;
    let minError = Infinity;

    for (let green = 1; green <= 16; green++) {
      for (let yellow = 1; yellow <= 16; yellow++) {
        const ratio = yellow / green;
        const error = Math.abs(ratio - target);
        if (error < minError) {
          minError = error;
          bestGreen = green;
          bestYellow = yellow;
        }
      }
    }

    const actual = vIn * (bestYellow / bestGreen);
    const diff = Math.abs(actual - vOut);
    const errorPct = ((diff / vOut) * 100).toFixed(2);

    document.getElementById("green-val").textContent = bestGreen;
    document.getElementById("yellow-val").textContent = bestYellow;
    document.getElementById("green-bar").style.width = ((bestGreen / 16) * 100) + "%";
    document.getElementById("yellow-bar").style.width = ((bestYellow / 16) * 100) + "%";

    document.getElementById("stat-target").textContent = vOut.toFixed(2) + "V";
    document.getElementById("stat-actual").textContent = actual.toFixed(2) + "V";
    document.getElementById("stat-diff").textContent = diff.toFixed(2) + "V";
    document.getElementById("stat-diff").className = "stat-value" + (diff === 0 ? " good" : diff / vOut < 0.05 ? " good" : " warn");
    document.getElementById("stat-error").textContent = errorPct + "%";
    document.getElementById("stat-error").className = "stat-value" + (errorPct < 5 ? " good" : " warn");
    document.getElementById("stat-ratio").textContent = bestYellow + " : " + bestGreen;

    const note = document.getElementById("error-note");
    if (diff === 0) {
      note.textContent = "Exact match found!";
      note.className = "error-note exact";
    } else {
      note.textContent = "Closest possible integer ratio within 1\u201316 limit.";
      note.className = "error-note";
    }

    document.getElementById("results-find").classList.add("visible");
  });

  const btnCalc = document.getElementById("btn-calc");
  btnCalc.addEventListener("click", () => {
    const vIn = parseFloat(document.getElementById("vin-calc").value);
    const green = parseInt(document.getElementById("green-calc").value, 10);
    const yellow = parseInt(document.getElementById("yellow-calc").value, 10);

    if (!vIn || vIn <= 0) {
      alert("Please enter a valid input voltage greater than 0.");
      return;
    }
    if (isNaN(green) || green < 1 || green > 16 || isNaN(yellow) || yellow < 1 || yellow > 16) {
      alert("Slider values must be integers between 1 and 16.");
      return;
    }

    const output = vIn * (yellow / green);

    document.getElementById("calc-input").textContent = vIn.toFixed(2) + "V";
    document.getElementById("calc-ratio").textContent = yellow + " : " + green;
    document.getElementById("calc-output").textContent = output.toFixed(2) + "V";

    document.getElementById("results-calc").classList.add("visible");
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const panel = input.closest(".tab-panel");
        if (panel) {
          panel.querySelector(".btn").click();
        }
      }
    });
  });
});
