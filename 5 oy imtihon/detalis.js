const selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));

if (selectedStudent) {
  document.getElementById('studentName').textContent = selectedStudent.name;
  document.getElementById('studentImage').src = selectedStudent.img;
  document.getElementById('studentDetailName').textContent = selectedStudent.name;
  document.getElementById('studentDetailEmail').textContent = selectedStudent.email;
  document.getElementById('studentDetailPhone').textContent = selectedStudent.phone;
  document.getElementById('studentDetailDate').textContent = selectedStudent.date;
}