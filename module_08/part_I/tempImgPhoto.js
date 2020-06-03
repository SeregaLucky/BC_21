export const tempImgPhoto = item => {
  return `
    <li>
      <img
        src="${item.preview}"
        data-sourceSmall="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      >
    </li>
  `;
};
