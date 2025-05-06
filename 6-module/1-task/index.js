export default class UserTable {
  elem = null;

  constructor(rows) {
    this.#render();
    this.#addRows(rows);
  }

  #addRows(rows) {
    const tbody = document.createElement("tbody");

    tbody.innerHTML = rows
      .map((row) => {
        return `
          <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td>
              <button class="delete-button">X</button>
            </td>
          </tr>
        `;
      })
      .join("");

    this.elem.insertAdjacentHTML("beforeEnd", tbody.outerHTML);

    this.elem.addEventListener("click", ({ target }) => {
      const deleteButtons = this.elem.querySelectorAll(".delete-button");
      let tr;

      for (const button of deleteButtons) {
        if (target !== button) {
          continue;
        }

        tr = target.closest("tr");
        tr.remove();
      }
    });
  }

  #render() {
    this.elem = document.createElement("table");
    this.elem.innerHTML = this.#template();
  }

  #template() {
    return `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
    `;
  }
}
