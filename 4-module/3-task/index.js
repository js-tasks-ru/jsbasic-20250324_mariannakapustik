function highlight(table) {
  let td;
  let tr;

  for (let i = 1; i < table.rows.length; i++) {
    td = table.rows[i].cells[3];
    tr = table.rows[i];

    if (td.dataset.available === "true") {
      tr.classList.add("available");
      continue;
    }

    if (td.dataset.available === "false") {
      tr.classList.add("unavailable");
      continue;
    }

    tr.hidden = true;
  }

  for (let i = 1; i < table.rows.length; i++) {
    td = table.rows[i].cells[2];
    tr = table.rows[i];

    if (td.innerHTML === "m") {
      tr.classList.add("male");
      continue;
    }

    tr.classList.add("female");
  }

  for (let i = 1; i < table.rows.length; i++) {
    td = table.rows[i].cells[1];
    tr = table.rows[i];

    if (td.innerHTML < 18) {
      tr.setAttribute("style", "text-decoration: line-through");
    }
  }
}
