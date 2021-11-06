const hasil = document.querySelector('input.inputan');
const tambahTodo = document.querySelector('.tombol-tambah');

tambahTodo.addEventListener('click', function () {
  const li = document.createElement('li');
  const text = document.createTextNode(hasil.value);
  const ul = document.querySelector('div ul');
  li.appendChild(text);
  ul.appendChild(li);
  hasil.value = '';
});
