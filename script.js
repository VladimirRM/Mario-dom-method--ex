const generateUl = () => {
  return `
    <div>
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </ul>
     </div>
    `;
};

const div = document.createElement("div");
div.classList.add("ulDiv");
div.innerHTML = generateUl;

div.append(generateUl);
