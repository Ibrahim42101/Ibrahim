const openAddPropertyModalBtn = document.getElementById('openAddPropertyModal');
const addPropertyModal = document.getElementById('addPropertyModal');
const closeAddPropertyModalBtn = document.getElementById('closeAddPropertyModal');
const addPropertyForm = document.getElementById('addPropertyForm');
const propertyTableBody = document.getElementById('propertyTableBody');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminLoginSection = document.querySelector('.admin-login-section');
const dashboardHeader = document.querySelector('.dashboard-header');
const propertyManagementSection = document.querySelector('.property-management');
const loginError = document.getElementById('loginError');

adminLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const adminId = document.getElementById('adminId').value;
  const adminPassword = document.getElementById('adminPassword').value;

  // Hardcoded admin credentials
  const validAdminId = 'ibrahim';
  const validAdminPassword = 'baig';

  if (adminId === validAdminId && adminPassword === validAdminPassword) {
    adminLoginSection.classList.add('hidden');
    dashboardHeader.classList.remove('hidden');
    propertyManagementSection.classList.remove('hidden');
    loginError.classList.add('hidden');
  } else {
    loginError.classList.remove('hidden');
  }
});

openAddPropertyModalBtn.addEventListener('click', () => {
  addPropertyModal.classList.remove('hidden');
});

closeAddPropertyModalBtn.addEventListener('click', () => {
  addPropertyModal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
  if (event.target === addPropertyModal) {
    addPropertyModal.classList.add('hidden');
  }
});

addPropertyForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('propertyTitle').value;
  const beds = document.getElementById('propertyBeds').value;
  const baths = document.getElementById('propertyBaths').value;
  const size = document.getElementById('propertySize').value;
  const price = document.getElementById('propertyPrice').value;

  // Generate new ID based on current rows count + 1
  const newId = propertyTableBody.rows.length + 1;

  // Create new row
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${newId}</td>
    <td>${title}</td>
    <td>${beds}</td>
    <td>${baths}</td>
    <td>${size}</td>
    <td>$${price}</td>
    <td>Sell</td>
    <td>
      <button onclick="alert('Edit property ${newId}')">Edit</button>
      <button onclick="alert('Delete property ${newId}')">Delete</button>
    </td>
  `;

  propertyTableBody.appendChild(newRow);

  // Reset form and close modal
  addPropertyForm.reset();
  addPropertyModal.classList.add('hidden');
});
