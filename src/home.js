const createWelcome = () => {
  const column = document.createElement('div');
  column.classList.add('col-12', 'my-auto', 'card');
  column.id = 'welcome';
  const title = document.createElement('h1');
  const text = document.createElement('p');
  text.innerHTML = 'We are really proud to be the best Latin American restaurant in the town.';
  text.id = 'page_text';
  title.innerHTML = "Welcome to our 'Restaurante'";
  title.id = 'page_title';

  column.appendChild(title);
  column.appendChild(text);

  return column;
};

// eslint-disable-next-line import/prefer-default-export
export const welcomeContent = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const rowcontainer = document.createElement('div');
  rowcontainer.classList.add('row', 'fullpage');
  rowcontainer.id = 'content_home';
  container.appendChild(rowcontainer);
  rowcontainer.appendChild(createWelcome());

  return container;
};
