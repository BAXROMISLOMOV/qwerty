const users = [
  { name: "Leanne Graham", email: "Sincere@april.biz", city: "Gwenborough", company: "Romaguera-Crona" },
  { name: "Ervin Howell", email: "Shanna@melissa.tv", city: "Wisokyburgh", company: "Deckow-Crist" },
  { name: "Clementine Bauch", email: "Nathan@yesenia.net", city: "McKenziehaven", company: "Romaguera-Jacobson" },
  { name: " jon konnor", email: "jonconnor.@gmail.net", city: "Gwenbough", company: "kun uz" },
  { name: "axad qayum", email: "birtiyingaqimmat@regisyor.uz", city: "toshkent", company: "uzbekkino" },
];

const userContainer = document.getElementById('user-container');
const userDetails = document.getElementById('user-details');
const searchInput = document.getElementById('search');
const detailsDiv = document.getElementById('details');
const goBackBtn = document.getElementById('go-back');

// Foydalanuvchilarni ko'rsatish
function displayUsers(usersList) {
  userContainer.innerHTML = "";
  usersList.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
          <h3>${user.name}</h3>
          <p>${user.email}</p>
          <p>${user.city}</p>
          <p>${user.company}</p>
      `;
      card.addEventListener('click', () => showDetails(user));
      userContainer.appendChild(card);
  });
}

// Batafsil ma'lumotni ko'rsatish
function showDetails(user) {
  userDetails.classList.remove('hidden');
  userContainer.style.display = 'none';
  detailsDiv.innerHTML = `
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>City: ${user.city}</p>
      <p>Company: ${user.company}</p>
  `;
}

// Qidiruv paneli orqali foydalanuvchilarni filtr qilish
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
  );
  displayUsers(filteredUsers);
});

// Orqaga qaytish funksiyasi
goBackBtn.addEventListener('click', () => {
  userDetails.classList.add('hidden');
  userContainer.style.display = 'flex';
});

// Boshlang'ich sahifa
displayUsers(users);
