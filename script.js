const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const formMessage = document.getElementById('form-message');
const demoForm = document.getElementById('demo-form');

function openModal(type) {
  const isSignup = type === 'signup';
  modalTitle.textContent = isSignup ? 'Create Your Account' : 'Welcome Back';
  modalDescription.textContent = isSignup
    ? 'Sign up and start your wellness journey.'
    : 'Log in to access your membership.';
  formMessage.textContent = '';
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('email').focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-modal]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(link.dataset.modal);
  });
});

document.querySelector('.close').addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

demoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent =
    'This is a demo website. Registration and login are not connected yet.';
});


/* Support form demo: connect a form service or backend to receive messages. */
const supportForm = document.getElementById('support-form');
if (supportForm) {
  supportForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('support-feedback').textContent =
      'Thanks for your message. This demo form is not connected yet, so your message has not been sent.';
    supportForm.reset();
  });
}

/* Basic FAQ chatbot demo. A real AI assistant requires a secure backend/API connection. */
const chatToggle = document.getElementById('chat-toggle');
const chatPanel = document.getElementById('chat-panel');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatToggle.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) chatInput.focus();
}
chatToggle.addEventListener('click', () => setChatOpen(chatPanel.hidden));
chatClose.addEventListener('click', () => setChatOpen(false));

function addChatMessage(text, className) {
  const message = document.createElement('div');
  message.className = className;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getDemoReply(question) {
  const q = question.toLowerCase();
  if (q.includes('price') || q.includes('cost') || q.includes('membership') || q.includes('£')) {
    return 'Our example plans are £19.99 per month or £179.99 per year. Please contact the team to confirm current membership details.';
  }
  if (q.includes('beginner') || q.includes('start') || q.includes('new')) {
    return 'Welcome! Our Beginner Yoga and guided mindfulness sessions are a gentle place to start. Visit the Sessions section to explore.';
  }
  if (q.includes('book') || q.includes('class') || q.includes('session') || q.includes('schedule')) {
    return 'You can explore Group Yoga, One-to-One Yoga and Meditation sessions in the Sessions section. Online booking is not connected yet.';
  }
  if (q.includes('instructor') || q.includes('teacher')) {
    return 'Visit the Meet Your Instructors section to learn about the types of guidance offered. Instructor profiles are placeholders at the moment.';
  }
  if (q.includes('support') || q.includes('contact') || q.includes('help')) {
    return 'Please use the support form near the bottom of the page. It is currently a demo and needs connecting before messages can be received.';
  }
  return 'Thanks for your question! I can answer basic questions about memberships, beginner sessions, classes and instructors. For anything else, please contact the support team.';
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  addChatMessage(question, 'user-message');
  addChatMessage(getDemoReply(question), 'bot-message');
  chatInput.value = '';
});
