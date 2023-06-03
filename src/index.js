import { fetchBreeds } from '../api/getCats';

const select = document.querySelector('.breed-select')

fetchBreeds().then(data => createOptions(data));

function createOptions(catsArrey){
const markup = catsArrey
.map(({ id, name }) => '<option value="${id}">${name}</option>')
.join('');
select.innerHTML = markup;
}