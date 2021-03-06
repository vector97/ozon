import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItem = document.querySelectorAll(".catalog li");

  let isOpen = false;

  const catalogState = () => {
    isOpen = !isOpen;

    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  };

  btnCatalog.addEventListener("click", catalogState);

  catalogModalItem.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent;

      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      });

      catalogState();
    });
  });
};

export default catalog;
