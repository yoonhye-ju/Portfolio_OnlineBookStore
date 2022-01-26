function selectAll(selectAll) {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = selectAll.checked
  })
}