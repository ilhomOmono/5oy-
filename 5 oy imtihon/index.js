document.getElementById('toggle-auth-mode').addEventListener('click', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleText = this;
  
    if (loginForm.classList.contains('hidden')) {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      toggleText.innerHTML = "Don't have an account? Sign Up";
    } else {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      toggleText.innerHTML = 'Already have an account? Login';
    }
  });
  
  function handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (username && password) {
      alert('Login successful! Redirecting to admin page...');
      window.location.href = 'admin.html'; 
    } else {
      alert('Please enter both login and password');
    }
  }
  
  function handleSignup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    if (username && password) {
      alert('Sign-up successful! Redirecting to admin page...');
      window.location.href = 'admin.html'; 
    } else {
      alert('Please enter a new login and password');
    }
  }
