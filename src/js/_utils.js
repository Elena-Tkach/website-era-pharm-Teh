export const modal = document.querySelector(".js-modal");
export const navBlockEl = document.querySelector(".js-nav-block");
export const closeMenuBtnEl = document.querySelector(".js-btn-close");

export const toggleAccordeon = (moreBtn, block) => {
  block.classList.toggle("show-slider");

  if (block.classList.contains("show-slider")) {
    block.setAttribute("aria-hidden", "false");
    moreBtn.setAttribute("aria-label", "Закрыть блок");
    moreBtn.innerHTML = "Скрыть блок";
  } else {
    block.setAttribute("aria-hidden", "true");
    moreBtn.setAttribute("aria-label", "Показать больше информации");
    moreBtn.innerHTML = "Больше информации";
  }
};

export const showBlock = (element, closeMenuBtn) => {
  element.classList.add("show");
  // previousActiveElement = document.activeElement;
  element.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    closeMenuBtn.focus();
  }, 100);
};

export const hideBlock = (element) => {
  element.classList.remove("show");
  element.setAttribute("aria-hidden", "true");
  // previousActiveElement.focus();
};

