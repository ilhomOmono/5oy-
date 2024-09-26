let students = [
    {
      name: "Karthi",
      email: "karthi@gmmail.com",
      phone: "7305477760",
      enrollNumber: "1234567305477760",
      admissionDate: "2021-12-08",
    },
   
  ];

  let sortDirection = true;

  function renderStudentList() {
    const tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
      const row = document.createElement("tr");
      row.classList.add("border-b", "hover:bg-gray-50", "cursor-pointer");

      row.innerHTML = `
        <td class="px-6 py-4">${student.name}</td>
        <td class="px-6 py-4">${student.email}</td>
        <td class="px-6 py-4">${student.phone}</td>
        <td class="px-6 py-4">${student.enrollNumber}</td>
        <td class="px-6 py-4">${student.admissionDate}</td>
        <td class="px-6 py-4">
          <button class="mr-2 text-yellow-500 hover:text-yellow-700" onclick="editStudent(${index})">✏️</button>
          <button class="text-red-500 hover:text-red-700" onclick="deleteStudent(${index})">🗑️</button>
        </td>
      `;
      
      row.addEventListener('click', () => viewStudentDetails(student));
      tableBody.appendChild(row);
    });
  }

  function addStudent() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const enrollNumber = document.getElementById("enrollInput").value;
    const admissionDate = document.getElementById("admissionInput").value;

    if (name && email && phone && enrollNumber && admissionDate) {
      students.push({ name, email, phone, enrollNumber, admissionDate });
      closeModal();
      renderStudentList();
    } else {
      alert("Please fill in all fields.");
    }
  }

  function editStudent(index) {
   
    alert(`Editing student: ${students[index].name}`);
  }

  function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
      students.splice(index, 1);
      renderStudentList();
    }
  }

  function searchStudents(query) {
    const tableBody = document.getElementById("studentTable");
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(query.toLowerCase())
    );
    tableBody.innerHTML = "";
    filteredStudents.forEach((student, index) => {
      const row = document.createElement("tr");
      row.classList.add("border-b");

      row.innerHTML = `
        <td class="px-6 py-4">${student.name}</td>
        <td class="px-6 py-4">${student.email}</td>
        <td class="px-6 py-4">${student.phone}</td>
        <td class="px-6 py-4">${student.enrollNumber}</td>
        <td class="px-6 py-4">${student.admissionDate}</td>
        <td class="px-6 py-4">
          <button class="mr-2 text-yellow-500 hover:text-yellow-700" onclick="editStudent(${index})">✏️</button>
          <button class="text-red-500 hover:text-red-700" onclick="deleteStudent(${index})">🗑️</button>
        </td>
      `;
      row.addEventListener('click', () => viewStudentDetails(student));
      tableBody.appendChild(row);
    });
  }

  function sortStudents() {
    students.sort((a, b) => {
      if (sortDirection) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    sortDirection = !sortDirection;
    renderStudentList();
  }

  function openModal() {
    document.getElementById("modal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }

  function viewStudentDetails(student) {
    alert(`Student Details:\n\nName: ${student.name}\nEmail: ${student.email}\nPhone: ${student.phone}\nEnroll Number: ${student.enrollNumber}\nDate of Admission: ${student.admissionDate}`);
  }


  document.getElementById("addBtn").addEventListener("click", openModal);
  document.getElementById("saveBtn").addEventListener("click", addStudent);
  document.getElementById("cancelBtn").addEventListener("click", closeModal);
  document.getElementById("searchInput").addEventListener("input", (e) => searchStudents(e.target.value));
  document.getElementById("sortBtn").addEventListener("click", sortStudents);
  document.getElementById("logoutBtn").addEventListener("click", () => alert("Logging out..."));

  renderStudentList();