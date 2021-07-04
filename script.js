let container = document.getElementById('photos');
let footercontainer = document.getElementById('footer');
let row = document.createElement('div');
row.setAttribute('class', 'row');
let api = 'https://picsum.photos/v2/list';
const fetchapi = async () => {
  let fetching = await fetch(api);
  let datas = await fetching.json();
  console.log(datas);
  datarender(datas);
};
function datarender(datas) {
  datas.map((data) => {
    imgrender(data);
  });
  footer();
}
function imgrender(image) {
  let col = document.createElement('div');
  col.setAttribute('class', 'col-6');
  let img = document.createElement('img');
  img.setAttribute('class', 'w-75 h-75 m-4');
  img.src = image.download_url;
  col.append(img);
  row.append(col);
  container.append(row);
}
function footer() {
  let ft = document.createElement('footer');
  ft.setAttribute('class', ' mt-2');
  ft.innerHTML = `<div class="text-white text-center">
    <p class="lead pt-4">Images from Lorem Ipsum</p>
    <h6 class="p-4">Created by ajay</h6>
  </div>`;
  footercontainer.append(ft);
}
document.body.append(container, footercontainer);
fetchapi();
